import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import SearchFilter from "./SearchFilter";
import SnippetList from "./SnippetList";
import CodeEditor from "./CodeEditor";
import "./CodeSnippetManager.css";

const CodeSnippetManager = () => {
  const [snippets, setSnippets] = useState(() => {
    return JSON.parse(localStorage.getItem("snippets")) || [];
  });
  const [newSnippet, setNewSnippet] = useState({ title: "", code: "" });
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("snippets", JSON.stringify(snippets));
  }, [snippets]);

  useEffect(() => {
    Prism.highlightAll();
  }, [snippets]);

  const addSnippet = () => {
    if (newSnippet.title && newSnippet.code) {
      setSnippets([...snippets, newSnippet]);
      setNewSnippet({ title: "", code: "" });
    }
  };

  const deleteSnippet = (index) => {
    setSnippets(snippets.filter((_, i) => i !== index));
  };

  const filteredSnippets = snippets.filter((snippet) =>
    snippet.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="manager-container">
      <h1 className="header">Code Snippet Manager</h1>
      <SearchFilter search={search} setSearch={setSearch} />
      <CodeEditor
        newSnippet={newSnippet}
        setNewSnippet={setNewSnippet}
        addSnippet={addSnippet}
      />
      <SnippetList snippets={filteredSnippets} deleteSnippet={deleteSnippet} />
    </div>
  );
};

export default CodeSnippetManager;
