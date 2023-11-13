import React, { useState } from "react";
import Text from "../components/Text";
import Select from "../components/Select";
import { useNavigate, useLocation } from "react-router-dom";
import { ImageList, ratingClasses } from "@mui/material";
import { useForm } from "react-hook-form";
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

  const arreglosDePokemon = tableRows;
  console.log(arreglosDePokemon, "arreglosDePokemon");

  const { handleSubmit, register, setValue, getValues } = useForm( {
    defaultValues: {
      name: rowdata.name,
      comment: "",
      type: rowdata.type,
      teammate: "",
      image: "",
    },
  } );

  const pokemonesConTipoEspecifico = arreglosDePokemon
   .filter((pokemon) => {
     const pokemonTypes = pokemon.types;
     /* console.log(pokemonTypes) */
     return pokemonTypes.every((pokemonType) => types.includes(pokemonType));
   });
   console.log(pokemonesConTipoEspecifico)

  const onSubmit = (e) => {
    console.log(e, "event");
    e.stopPropagation();
    e.preventDefault();
    handleUpdatePokemonRow({});
  };

  return (
    <form onSubmit={onSubmit}>
      <Text label={"New name"} defaultValue={rowdata.name} type={"name"} />
      <Text label={"comment"} defaultValue="" type={"comment"} />

      <Select
        label={"New type"}
        defaultValue={getValues("type")}
        value={rowdata.types}
        options={pokemonTypesOptions}
        onChange={(types) => {
          console.log(types,'types');
          setTypes(types);
          setValue('type',types)
        }}
      />

      <Select
        label={"Best teammate"}
        defaultValue={[]} //array
        onChange={(e) => {
          console.log(e);
        }}
        options={pokemonesConTipoEspecifico.map((poke) => poke.name).sort()}
      />

      <ImageList defaultValue="{foundPokemon.my_sprite}" />

      <button>Submit</button>
    </form>
  );
}
