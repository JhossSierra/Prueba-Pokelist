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
  
  const teamPokes = tableRows.filter(poke=> rowdata.type )


  const onSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    handleUpdatePokemonRow({});
  };

  return (
    <form>
      <Text label={"New name"} defaultValue='{foundPokemon.my_name}' type={'name'} />
      

      <Select label={"New type"} 
      defaultValue='{foundPokemon.my_types}' 
      options={pokemonTypesOptions} 
      callbk={(types)=> {setTypes(types)}} />
      
      <Select
        label={"Best teammate"}
        defaultValue='{foundPokemon.my_teammates}'
        options={types}
      />

      <ImageList defaultValue='{foundPokemon.my_sprite}' />

      <button onSubmit={onSubmit}>Submit</button>
    </form>
  );
}
