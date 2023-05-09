import { useState } from "react";

const Controlado = () => { 
    // inicializamos los campos
    // const [title, setTitle] = useState('');
    // const [description, setDescription] = useState('');
    // const [state, setState] = useState('pendiente');

    // inicializamos el state como un Objeto para optimizar
    const [todo, setTodo] = useState({
        title: 'Campo 1',
        description: 'Campo 2',
        state: 'pendiente',
        prioridad: false
    });

    const { title, description, state, prioridad } = todo;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log( title, description, title);
    } 
    
    const handleChange = (e) => {
        // console.log(e.target.value);
        // console.log(e.target.name);

        const {name, type, checked, value } = e.target
        setTodo({
            ...todo,
            [name]: type === 'checkbox' ? checked : value,
        });
        //[e.target.name]: e.target.value

    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                name="title" 
                value={title}
                type="text" 
                placeholder="Ingrese todo" 
                // onChange={ e => setTitle(e.target.value) }
                // onChange={(e)=> setTodo({ ...todo, title: e.target.value})}
                onChange={handleChange}
                className="form-control mb-2"/>

            <textarea 
                name="description" 
                value={description}
                className="form-control mb-2" 
                onChange={handleChange}
                placeholder="Ingrese descripción"
                ></textarea>

            <div className="form-check">    
                <input 
                    id="prioridadCheck"
                    type="checkbox"
                    className="form-check-input"
                    name="prioridad"
                    checked={ prioridad }
                    onChange={ handleChange }
                    // onChange={ (e) => 
                    //         setTodo({...todo, prioridad: e.target.checked}) 
                    //     }
                     />
                <label htmlFor="prioridadCheck">Prioridad</label>
            </div>


            <select 
                name="state" 
                value={state}
                onChange={handleChange}
                className="form-select mb-2">
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>

            <button type="submit" className="btn btn-primary">Procesar</button>

            
        </form>
    ) };

export default Controlado;