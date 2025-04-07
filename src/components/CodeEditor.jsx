import React from "react";

const CodeEditor = ({ newSnippet, setNewSnippet, addSnippet }) => {
  return (
    <div className="editor">
      <input
        type="text"
        placeholder="Snippet title"
        className="editor-input"
        value={newSnippet.title}
        onChange={(e) =>
          setNewSnippet({ ...newSnippet, title: e.target.value })
        }
      />
      <textarea
        placeholder="Enter code here..."
        className="editor-textarea"
        value={newSnippet.code}
        onChange={(e) =>
          setNewSnippet({ ...newSnippet, code: e.target.value })
        }
      />
      <button className="editor-button" onClick={addSnippet}>
        Add Snippet
      </button>
    </div>
  );
};

export default CodeEditor;
