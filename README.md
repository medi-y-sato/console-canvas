# Console Canvas

Console Canvas is a web application that allows you to create richly formatted text in a WYSIWYG editor and convert it into `console.log()` statements with inline styling, ready to be executed in your browser's developer console.

## Features

- **Rich Text Editing:** Create and style text using a familiar rich text editor interface.
- **Live `console.log()` Conversion:** See your styled text instantly converted into executable JavaScript `console.log()` code.
- **Debounced Preview:** The live preview updates intelligently after a brief pause in typing, ensuring a smooth editing experience.
- **Copy to Clipboard:** Easily copy the generated `console.log()` code to your clipboard for immediate use.
- **Save/Load Functionality:** Save your editor content to local storage and load it back later.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm (or yarn/pnpm) installed on your system.

### Installation

1.  Clone this repository:

    ```bash
    git clone <repository-url>
    cd console-canvas
    ```

2.  Install the dependencies:

    ```bash
    npm install
    # or yarn install
    # or pnpm install
    ```

### Running the Application

To start the development server:

```bash
npm run dev
# or yarn dev
# or pnpm dev
```

This will typically open the application in your browser at `http://localhost:5173` (or another available port).

## Usage

1.  **Edit Text:** Use the rich text editor on the left to type and style your text. Experiment with bold, italics, colors, and more.
2.  **View Generated Code:** As you type, the right panel will automatically update with the corresponding `console.log()` JavaScript code.
3.  **Live Preview:** Open your browser's developer console (usually by pressing `F12` or `Ctrl+Shift+I` / `Cmd+Option+I`) to see the live output of your styled text.
4.  **Copy Code:** Click the "Copy to Clipboard" button to grab the generated code.
5.  **Save/Load:** Use the "Save" button to store your current editor content in your browser's local storage. Click "Load" to retrieve it.

## Project Structure

- `src/App.jsx`: The main application component, handling state, conversion logic, and layout.
- `src/Editor.jsx`: Wraps the `react-quill` component for rich text editing.
- `src/CodeOutput.jsx`: Displays the generated `console.log()` code and provides a copy button.
- `src/main.jsx`: Entry point for the React application.
- `src/index.css`: Global styles for the application.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool for modern web projects.
- **Quill.js (via `react-quill`):** A powerful rich text editor.
- **MUI (Material-UI):** A comprehensive React UI library for beautiful and responsive designs.

## Deployment

This application is designed to be deployed as a static site, for example, on GitHub Pages. To build the application for production:

```bash
npm run build
# or yarn build
# or pnpm build
```

The build output will be located in the `dist/` directory.