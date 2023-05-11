import Todo from "./Todo";

/* eslint-disable react/prop-types */
const Todos = ({ todos }) => {
return (
    <div className="mt-5">
        <h2 className="text-center">Todos</h2>
        <ul className="list-group">
            {
                todos.map( todoX => (
                    <Todo key={todoX.id} todo={todoX}/>
                ))
            }
        </ul>
    </div>
);
}

export default Todos;
