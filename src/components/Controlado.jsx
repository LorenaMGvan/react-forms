import { useState } from "react";

const Controlado = () => { 
    // inicializamos los campos
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [state, setState] = useState('pendiente');

    // lo de arriba lo vamos a optimizar , ya que si tuvieramos muchos campos  podemos hacerlo de esta manera:


    const handleSubmit = (e) => {
        e.preventDefault();
    }   

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                name="title" 
                value={title}
                type="text" 
                placeholder="Ingrese todo" 
                onChange={ e => setTitle(e.target.value) }
                className="form-control mb-2"/>

            <textarea 
                name="description" 
                value={description}
                className="form-control mb-2" 
                onChange={ e => setDescription(e.target.value)}
                placeholder="Ingrese descripción"
                ></textarea>

            <select 
                name="state" 
                value={state}
                onChange={ e=> setState(e.target.value)}
                className="form-select mb-2">
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>

            <button type="submit" className="btn btn-primary">Procesar</button>

            
        </form>
    ) };

export default Controlado;