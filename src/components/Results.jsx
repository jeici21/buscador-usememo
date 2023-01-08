import { useState, useMemo } from "react";

export default function Results({ items, onItemSelected, query, onResultsCalculated }) {
    const [results, setResults] = useState([]);
    //usememo solo guardará los valores ingresados si éstos han cambiado
    const filteredItems = useMemo(() => findMatch(items, query), [items, query]);
    function findMatch(items, query) {
        const res = items.filter((i) => {
            return i.title.toLowerCase().indexOf(query) >= 0 && query.length > 0;
        });
        setResults(res);
        return res;
    }//mostrando resultados

    return <div>
        {query !== "" ? filteredItems.map((item) => <div key={item.id}>{item.title}</div>) : ""}
    </div>;
}