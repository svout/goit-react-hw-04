import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");

  function onFormSubmit(e) {
    e.preventDefault();
    if (query.trim() === "") {
      toast("Please, enter text to search for images");
    } else {
      onSubmit(query);
      setQuery("");
    }
  }

  return (
    <header className="bg-blue-500 p-4 shadow-lg">
      <form onSubmit={onFormSubmit} className="flex items-center">
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow p-2 mr-2 border rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <button
          type="submit"
          className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Search
        </button>
        <Toaster />
      </form>
    </header>
  );
}
