import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Box, Button, Typography, AppBar, Toolbar, Container, Grid } from '@mui/material';
import Editor from './Editor';
import CodeOutput from './CodeOutput';

const DEBOUNCE_DELAY = 1000; // 1 second

const App = () => {
  const [editorValue, setEditorValue] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const debounceTimeoutRef = useRef(null);

  // Function to convert Quill Delta to console.log arguments
  const convertDeltaToConsoleLog = useCallback((delta) => {
    let consoleLogStatements = [];
    let currentLineSegments = [];

    const escapeSingleQuotes = (str) => {
      return str.replace(/'/g, "\\'");
    };

    const processSegment = (text, attributes) => {
      let style = '';
      if (attributes.bold) style += 'font-weight: bold;';
      if (attributes.italic) style += 'font-style: italic;';
      if (attributes.underline) style += 'text-decoration: underline;';
      if (attributes.strike) style += 'text-decoration: line-through;';
      if (attributes.color) style += `color: ${attributes.color};`;
      if (attributes.background) style += `background-color: ${attributes.background};`;
      if (attributes.align) style += `text-align: ${attributes.align};`;
      if (attributes.header) style += `font-size: ${[null, '2em', '1.5em'][attributes.header] || '1em'};`;
      // Add more styles as needed

      return { text: escapeSingleQuotes(text), style: escapeSingleQuotes(style) };
    };

    delta.ops.forEach(op => {
      if (op.insert) {
        const text = op.insert;
        const attributes = op.attributes || {};

        const lines = text.split('\n');
        lines.forEach((line, index) => {
          if (line.length > 0) {
            currentLineSegments.push(processSegment(line, attributes));
          }

          if (index < lines.length - 1) { // If it's not the last line segment, it means there was a newline
            if (currentLineSegments.length > 0) {
              let formatString = '';
              let styleArguments = [];
              currentLineSegments.forEach(segment => {
                formatString += `%c${segment.text}`;
                styleArguments.push(`'${segment.style}'`);
              });
              consoleLogStatements.push(`console.log('${formatString}', ${styleArguments.join(', ')});`);
              currentLineSegments = []; // Reset for the next line
            }
          }
        });
      }
    });

    // Process any remaining segments for the last line
    if (currentLineSegments.length > 0) {
      let formatString = '';
      let styleArguments = [];
      currentLineSegments.forEach(segment => {
        formatString += `%c${segment.text}`;
        styleArguments.push(`'${segment.style}'`);
      });
      consoleLogStatements.push(`console.log('${formatString}', ${styleArguments.join(', ')});`);
    }

    return consoleLogStatements.join('\n');
  }, []);

  // Debounced conversion and preview
  useEffect(() => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }
    debounceTimeoutRef.current = setTimeout(() => {
      if (editorValue) {
        // Ensure editorValue is a Delta object for conversion
        const delta = editorValue.ops ? editorValue : { ops: [{ insert: editorValue }] };
        const code = convertDeltaToConsoleLog(delta);
        setGeneratedCode(code);
        // For live preview, execute in browser console
        if (code) { // Only eval if there's code to execute
          try {
            // eslint-disable-next-line no-eval
            eval(code);
          } catch (e) {
            console.error("Error evaluating generated code:", e);
          }
        }
      } else {
        setGeneratedCode('');
      }
    }, DEBOUNCE_DELAY);

    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, [editorValue, convertDeltaToConsoleLog]);

  // Save and Load functions
  const handleSave = () => {
    localStorage.setItem('consoleCanvasContent', JSON.stringify(editorValue));
    alert('Content saved!');
  };

  const handleLoad = () => {
    const savedContent = localStorage.getItem('consoleCanvasContent');
    if (savedContent) {
      setEditorValue(JSON.parse(savedContent));
      alert('Content loaded!');
    } else {
      alert('No saved content found.');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Console Canvas
          </Typography>
          <Button color="inherit" onClick={handleSave}>Save</Button>
          <Button color="inherit" onClick={handleLoad}>Load</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xl" sx={{ flexGrow: 1, py: 3 }}>
        <Grid container spacing={3} sx={{ height: '100%' }}>
          <Grid item xs={12} md={6} sx={{ height: { xs: '50%', md: '100%' } }}>
            <Box sx={{ border: '1px solid #ccc', borderRadius: '4px', height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              <Typography variant="h6" sx={{ p: 2, pb: 0 }}>Rich Text Editor</Typography>
              <Editor value={editorValue} onChange={setEditorValue} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ height: { xs: '50%', md: '100%' } }}>
            <Box sx={{ height: '100%', overflow: 'hidden' }}>
              <CodeOutput code={generatedCode} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default App;