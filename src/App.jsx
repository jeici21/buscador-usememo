import { useState } from 'react';
import './App.css';
import SearchBar from './components/Searchbar';
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: var(--body-bg);
  color: var(--body-color);
  border: solid 1px #ccc;
  cursor: pointer;
  font-family: 'Samsung Sans Regular';

  &:hover {
    background-color: #efefef;
    color: black;
  }
`;//al usarlos como tags se aplican los estilos escritos aquí
const people = [
  {
    id: "people-01",
    title: 'Juan Pérez'
  },
  {
    id: "people-02",
    title: 'Marcos Rivas'
  },
  {
    id: "people-03",
    title: 'Sergio Martínez'
  },
  {
    id: "people-04",
    title: 'Laura Jiménez'
  },
  {
    id: "people-05",
    title: 'Horacio Martínez'
  }
];

const calendar = [
  {
    id: "calendar-01",
    title: 'Sesión de seguimiento'
  },
  {
    id: "calendar-02",
    title: 'Revisión de propuestas'
  },
  {
    id: "calendar-03",
    title: 'Evento para donar juguetes'
  },
  {
    id: "calendar-04",
    title: 'Junta semanal de equipo'
  },
  {
    id: "calendar-05",
    title: 'Revisión de pendientes con cliente'
  }
];
const emails = [
  {
    id: "email-01",
    title: 'Reporte de resultados'
  },
  {
    id: "email-02",
    title: 'Requisitos para cambio'
  },
  {
    id: "email-03",
    title: 'Estatus de funcionalidad'
  },
  {
    id: "email-04",
    title: 'Próximos eventos'
  },
  {
    id: "email-05",
    title: 'Participa en la encuesta'
  }//creando registros de pruba
];
function App() {
  const [data, setData] = useState([...people, ...calendar, ...emails]);
  const [selection, setSelection] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [currentOption, setCurrentOption] = useState('all');
  // const [count, setCount] = useState(0);

  const handleClick = (e) => {
    const op = e.target.name;
    switch (op) {//realizando filtros por categoría
      case "all":
        setData([...people, ...calendar, ...emails]);
        setCurrentOption("all");
        break;
      case "people":
        setData([...people]);
        setCurrentOption("people");
        break;
      case "calendar":
        setData([...calendar]);
        setCurrentOption("calendar");
        break;
      case "emails":
        setData([...emails]);
        setCurrentOption("emails");
        break;

      default:
    }
  }

  const handleItemSelected = (item) => {
    setSelection(item);
  }

  return (
    <div className='App'>
      <h1>Buscador</h1>
      <Button onClick={handleClick} name="all">All</Button>
      <Button onClick={handleClick} name="people">People</Button>
      <Button onClick={handleClick} name="calendar">Calendar</Button>
      <Button onClick={handleClick} name="emails">Emails</Button>
      {/* <button onClick={() => setCount(count + 1)}>{count}</button> */}
      {selection ? <div>You selected: {selection.title}</div> : ""}
      <SearchBar items={data} onItemSelected={handleItemSelected} />
    </div>
  );
}

export default App;
