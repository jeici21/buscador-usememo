import { useState } from "react";
import Results from "./Results";

export default function SearchBar({ items, onItemSelected }) {
    const [query, setQuery] = useState("ma");
    const [results, setResults] = useState([]);
    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
    }//recibiendo la búsqueda

    const handleResults = (items) => {
        setResults(items);
    }//recibiendo los resultados

    const handleItemSelected = () => {

    }

    return (
        <div>
            {results && <div>{results.length} results</div>}
            <input type="text" onChange={handleChange} value={query} />
            <Results items={items} onItemSelected={handleItemSelected}
                query={query} onResultsCalculated={handleResults}
            />
        </div>
    );
}