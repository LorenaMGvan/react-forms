// import Controlado from './components/Controlado';
import { useEffect, useState } from 'react';
import Formulario from './components/Formulario';
import Todos from './components/Todos';
// import Cat from './components/Cat';

// const initialStateTodos = [
//   {
//     id: 1,
//     title: 'tarea #1',
//     description: 'leer',
//     state: true,
//     prioridad: true
//   },
//   {
//     id: 2,
//     title: 'tarea #2',
//     description: 'jugar',
//     state: false,
//     prioridad: false
//   },
//   {
//     id: 3,
//     title: 'tarea #3',
//     description: 'Correr',
//     state: true,
//     prioridad: true
//   },
// ];
const initialStateTodos = JSON.parse(localStorage.getItem('todos')) || [];

const App = () => {   

  const [todos, setTodos] = useState(initialStateTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log("useEfect");
  }, [todos]);
    // cada que cambian los todos, se renderiza, o ejecuta el còdigo del useEfect 
      // con los corchetes vacìos para que se ejecute "Solo una vez"

  const addTodo = todo => {
    setTodos([...todos, todo]);
   // setTodos( (prev) => [...prev, todo]);
  }    

  const deleteTodo = id => {
    const itemsTodos = todos.filter(todo => todo.id != id);
    setTodos(itemsTodos);
  }

  const updateTodo = id => {
    const itemUpdate = todos.map( todo => {
      if (todo.id === id) {
        todo.state =!todo.state;
      }
      return todo;
    });

    setTodos(itemUpdate);
  }

  const orderTodo = itemsTodos => {
    return itemsTodos.sort((a, b) =>{
      if (a.prioridad === b.prioridad) return 0
      if (a.prioridad) return -1
      if (!a.prioridad) return 1
    });
  } 

  return (
    <div className='container'>
      <h1>Formularios</h1>
      <Formulario addTodo={ addTodo }/>
      <Todos 
        todos={orderTodo(todos)} 
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}/>
    </div>
  )
};

export default App;
