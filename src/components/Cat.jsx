import { useState } from 'react';

const Cat = () => {
    const [ cat, setCat] = useState({ name: "Mix", year: 2 });

    // eslint-disable-next-line no-unused-vars
    const handleClickX = () => {
        // tenemos dos opciones para asignarles el valor
        // setCat({ ...cat, year: cat.year +1 });    
        // aqui con una función de callback
        setCat( (prev) => ({ ...prev, year: cat.year + 1}));
    }

        return(
            <>
                <h3>Mostrando un Gato</h3>
                <h2>{cat.name} - { cat.year} </h2>
                <button onClick={ handleClickX } className='btn btn-dark mb-2'>
                    Actualizar año
                </button>
            </>
        )
}


export default Cat;