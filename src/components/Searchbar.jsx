import { useState } from "react";
import Results from "./Results";

export default function SearchBar({ items, onItemSelected }) {
    const [query, setQuery] = useState("ma");
    const [results, setResults] = useState([]);
    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
    }//recibiendo la búsqueda

    return (
        <div>
            <input type="text" onChange={handleChange} value={query} />
            <Results items={items} onItemSelected={() => { }}
                query={query} onResultsCalculated={() => { }}
            />
        </div>
    );
}