import { useState } from "react";
export const SearchBar = ({ query, setQuery, setSearchQuery }) => {
    const handleSearch = (e) => {
        e.preventDefault();
        setSearchQuery(query);
    }
    return (
        <header className="searchbar">
            <form className="form" onSubmit={handleSearch}>
                <button type="submit" className="button">Search
                </button>

                <input
                    className="input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </form>
        </header>
    )
}