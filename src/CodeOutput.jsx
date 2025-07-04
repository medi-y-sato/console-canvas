import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const CodeOutput = ({ code }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: '4px', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h6" gutterBottom>Generated Code</Typography>
      <Box
        component="pre"
        sx={{
          flexGrow: 1,
          mb: 2,
          fontFamily: 'monospace',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-all',
          overflow: 'auto',
          p: 1,
          border: '1px solid #eee',
          backgroundColor: '#f5f5f5',
          borderRadius: '4px',
        }}
      >
        {code}
      </Box>
      <Button variant="contained" onClick={handleCopy}>Copy to Clipboard</Button>
    </Box>
  );
};

export default CodeOutput;
