// import Controlado from './components/Controlado';
import { useState } from 'react';
import Formulario from './components/Formulario';
import Todos from './components/Todos';
// import Cat from './components/Cat';

const initialStateTodos = [
  {
    id: 1,
    title: 'tarea #1',
    description: 'leer',
    state: true,
    prioridad: true
  },
  {
    id: 2,
    title: 'tarea #2',
    description: 'jugar',
    state: false,
    prioridad: false
  },
  {
    id: 3,
    title: 'tarea #3',
    description: 'Correr',
    state: true,
    prioridad: true
  },
];

const App = () => {

  const [todos, setTodos] = useState(initialStateTodos);


  return (
    <div className='container'>
      <h1>Formularios</h1>
      <Formulario />
      <Todos todos={ todos }/>
    </div>
  )
};

export default App;
