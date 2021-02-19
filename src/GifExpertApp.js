import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GrifGrid from './components/GrifGrid';

export const GifExpertApp = () => {

    //const categoria = ['Categoria 1','Categoria 1','Categoria 1'];
    const [categorias, setCategorias] = useState( ['One Punch']);
    
   /*  const handleAdd = ()=>{
        //setcategorias(['CategoriaNueva',...categorias]);
        setcategorias(cats => [...cats,'NuevaCategoria'])
    }
 */
    return (
        <>
          <h2>GidExpertApp</h2>  
          <AddCategory setCategorias ={ setCategorias } />
          <hr/>

          

          {
              categorias.map(category => (
                  <GrifGrid 
                    key = {category}
                    category={ category } 
                  />
              ))
          }
        </>
    )
}
