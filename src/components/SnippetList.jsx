import React from "react";

const SnippetList = ({ snippets, deleteSnippet }) => {
  return (
    <div className="snippet-list">
      {snippets.length > 0 ? (
        snippets.map((snippet, index) => (
          <div key={index} className="snippet">
            <div className="snippet-header">
              <h3>{snippet.title}</h3>
              <button
                className="delete-button"
                onClick={() => deleteSnippet(index)}
              >
                Delete
              </button>
            </div>
            <pre>
              <code className="language-js">{snippet.code}</code>
            </pre>
          </div>
        ))
      ) : (
        <p className="no-snippets">No snippets found.</p>
      )}
    </div>
  );
};

export default SnippetList;
