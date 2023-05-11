import Todo from "./Todo";

/* eslint-disable react/prop-types */
const Todos = ({ todos, deleteTodo, updateTodo }) => {
return (
    <div className="mt-5">
        <h2 className="text-center mt-5">Todos</h2>
        <ul className="list-group">
            {
                todos.map( todoX => (
                    <Todo key={ todoX.id }   
                         todo={ todoX } 
                         deleteTodo={ deleteTodo }
                         updateTodo={ updateTodo }
                         />
                ))
            }
            {
                todos.length === 0 && <li className="list-group-item text-center">Sin Tareas</li>
            }
        </ul>
    </div>
);
}

export default Todos;
