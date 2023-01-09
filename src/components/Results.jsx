import { useState, useMemo, useEffect } from "react";
import MarkedItem from "./MarkedItem";
import styled from 'styled-components';

const ResultsContainer = styled.div`
    position: absolute;
    width: 400px;
    background: var(--body-bg);
    border: solid 3px #8F3A84;
    border-top: solid 1px transparent;
    margin-top: -3px;
    box-sizing: border-box;
    border-radius: 0 0 5px 5px;
`;

export default function Results({ items, onItemSelected, query, onResultsCalculated }) {
    const [results, setResults] = useState([]);
    //usememo solo guardará los valores ingresados si éstos han cambiado
    const filteredItems = useMemo(() => findMatch(items, query), [items, query]);

    useEffect(() => {
        onResultsCalculated(results);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [results]);

    function findMatch(items, query) {
        const res = items.filter((i) => {
            return i.title.toLowerCase().indexOf(query) >= 0 && query.length > 0;
        });
        setResults(res);
        return res;
    }//mostrando resultados

    return <ResultsContainer>
        {query !== "" ? filteredItems.map((item) =>
            (<MarkedItem key={item.id} item={item} query={query} onClick={onItemSelected} />)
        ) : ""}
    </ResultsContainer>;
}