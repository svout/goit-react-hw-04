import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import "./SearchBar.css"
export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");

  function onFormSubmit(e) {
    e.preventDefault();
    if (query.trim() === "") {
      toast("Please,enter text to search for images");
    } else {
      onSubmit(query);
      setQuery("");
    }
  }

  return (
    <header className="search-bar">
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
        <Toaster />
      </form>
    </header>
  );
}