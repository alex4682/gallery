import { GalleryItem } from "./components/GalleryItem";
import { SearchBar } from "./components/SearchBar";
import { useState, useEffect, useMemo } from "react";
export const App = () => {
  const [perPage, setPerPage] = useState(12);
  const [query, setQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const api = useMemo(() => `https://pixabay.com/api/?key=52507954-bca6ba319c77b4e167a13f2e7&page=1&image_type=photo&orientation=horizontal&per_page=${perPage}${searchQuery ? `&q=${searchQuery}` : ''}`, [perPage, searchQuery]);
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch(api)
      .then(response => response.json())
      .then(data => {
        setImages(data.hits)
        console.log(data)
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [perPage, searchQuery, api]);
  return (
    <>
      <SearchBar query={query} setQuery={setQuery} setSearchQuery={setSearchQuery}></SearchBar>
      <ul>
        {useMemo(() => images.map(({ id, webformatURL, tags }) => (
          <li key={id}>
            <GalleryItem image={webformatURL} name={tags} />
          </li>
        )), [images])}
      </ul>
      <footer><button onClick={() => setPerPage(perPage + 12)} className="load">Load More</button></footer>
    </>
  )
}