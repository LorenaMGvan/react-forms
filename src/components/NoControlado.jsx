import { useRef, useState } from "react";

const NoControlado = () => { 

    const form = useRef(null); 
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        const dataF = new FormData(form.current); 
        const { title, description, state } = Object.fromEntries([...dataF.entries()]);
        console.log( title, description, state );
        //validar los campos
        if ( !title.trim()) return setError("llena este campo");
    }   

    return (
        <form onSubmit={ handleSubmit } ref={form}>
            <input 
                name="title" 
                type="text" 
                placeholder="Ingrese todo" 
                className="form-control mb-2"
                defaultValue="campo A "/>

            <textarea 
                name="description" 
                className="form-control mb-2" 
                placeholder="Ingrese descripción"
                defaultValue="campo B"
                ></textarea>

            <select 
                name="state" 
                id="" 
                className="form-select mb-2"
                defaultValue="completado">
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>

            <button type="submit" className="btn btn-primary">Procesar</button>

            <p>
                { error !=="" && error}
            </p>
        </form>
    ) };

export default NoControlado;