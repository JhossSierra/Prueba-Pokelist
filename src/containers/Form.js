import React, { useState } from "react";
import Text from "../components/Text";
import Select from "../components/Select";
import { useNavigate, useLocation } from "react-router-dom";
import { ImageList } from "@mui/material";

// * use spritesTitles to set the titles to Images

const spriteTitles = {
  back_default: "Macho posterior",
  back_female: "Hembra posterior",
  back_shiny: "Macho brillante posterior",
  back_shiny_female: "Hembra brillante posterior",
  front_default: "Macho frontal",
  front_female: "Hembra frontal",
  front_shiny: "Macho frontal brillante",
  front_shiny_female: "Hembra frontal brillante",
};

export default function Form(props) {
  const [types, setTypes] = useState([]);
  
  const location = useLocation();
  // * Use navigate to return root path
  const navigate = useNavigate();
  const rowdata = location.state; 


  
  
  const { pokemonTypesOptions, tableRows, handleUpdatePokemonRow } = props;
  
//console.log(rowdata)//lo que viene
//console.log(types)//tipos de lo que viene ya modificados desde el select
//tablerows = todos los pokes



const arreglosDePokemon = tableRows

const nombreEspecifico = "grass"; // Nombre específico a comparar
const pokemonesConTipoEspecifico = [];

for (let i = 0; i < arreglosDePokemon.length; i++) {
  const arregloDePokemon = arreglosDePokemon[i];

  for (let j = 0; j < arregloDePokemon.length; j++) {
    const pokemon = arregloDePokemon[j];
    const tipos = pokemon.types;
    console.log(tipos)

    tipos.forEach((tipo) => {

      if (tipo.type.name === nombreEspecifico) {
        pokemonesConTipoEspecifico.push(pokemon);
      }
    });
  }
}

/* console.log(pokemonesConTipoEspecifico); */

/* console.log(pokemonesConTiposEspecificos); */



  const onSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    handleUpdatePokemonRow({});
  };

  return (
    <form>
      <Text label={"New name"} defaultValue={rowdata.name} type={'name'} />
      <Text label={"comment"} defaultValue='' type={'comment'} />

      <Select label={"New type"} 
      defaultValue={rowdata.types.map(type=>type.type.name)} 
      options={pokemonTypesOptions} 
      callbk={(types)=> {setTypes(types)}} />
      
      <Select
        label={"Best teammate"}
        defaultValue={[]} //array
        options={tableRows.map(poke=>poke.name)}
      />

      <ImageList defaultValue='{foundPokemon.my_sprite}' />

      <button onSubmit={onSubmit}>Submit</button>
    </form>
  );
}
