import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css'; // Import Quill's CSS

const Editor = ({ value, onChange }) => {
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      ['clean'],
      
    ],
    history: { // Enable history module
      delay: 1000,
      maxStack: 100,
      userOnly: true
    }
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    
    
    'color', 'background',
    
  ];

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={(content, delta, source, editor) => onChange(editor.getContents())}
      modules={modules}
      formats={formats}
      style={{ height: 'calc(100% - 42px)' }} // Adjust height to fit within parent Box
    />
  );
};

export default Editor;
