const Todo = ({ todo, deleteTodo }) => {
    const { title, description, state, prioridad, id } = todo;
    return (
        <li className="list-group-item">
            <div className="d-flex justify-content-between align-items-start">
                <div>
                    <h5 className={`${state && 'text-decoration-line-through'}`}>{title}</h5>
                    <p>{description}</p>
                    <div className="d-flex gap-2">
                        <button onClick={ () => deleteTodo(id) } className="btn btn-sm btn-danger">Eliminar</button>
                        <button className="btn btn-sm btn-warning">Actualizar</button>
                    </div>
                </div>
                <span className="badge text-white bg-primary">
                    { prioridad && "Prioritario" }
                </span>
            </div>
        </li>
    );
}
export default Todo;