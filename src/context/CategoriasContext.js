import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
//crear el Context

export const CategoriasContext = createContext();

// Provaider es donde se encontrar las funciones y el state
//siempre es un arow funtion y se le pasan props
const CategoriasProvider = (props) =>{
   
    //crear el state del context
    const [categorias, guardarCategorias] = useState([]);

    //ejecutar el llamado a la api
    useEffect(()=> {
       const obtenerCategorias = async () => {
           const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
           const categorias = await axios.get(url);
           guardarCategorias(categorias.data.drinks);
       }
         obtenerCategorias();
    }, []);

    return (
<CategoriasContext.Provider
    value={{            //siempre como value de esta forma
        categorias

    }}
>
    {props.children}
</CategoriasContext.Provider>

    )

}

export default CategoriasProvider;