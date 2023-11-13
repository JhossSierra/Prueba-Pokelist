//@ts-check
import Routes from "./Routes";
import "./App.css";
import Text from "./components/Text";
import EnhancedTable from "./components/Table";
import Dialog from "./components/Dialog";
import React, { useEffect } from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";

function App() {
  const PokesUrl = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
  
  const [tableRows, setTableRows] = React.useState([]);
  const [pokemonTypesOptions, setPokemonTypesOptions] = React.useState([]);
  
  //JJ fetching de datos
  useEffect(() => {
    const getdata = async (url: string) => {
      try {
        let response = await axios.get(url);
        const data1 = response.data.results; // Hay que mejorar los nombres de las data

        const fetchedPokes = await Promise.all(
          data1.map(async (element) => {
            const response = await fetch(element.url);
            const data2 = await response.json();
            
           

            const pokeInfo = {
              name: element.name,
              id: data2.id,
              height: data2.height,
              weight: data2.weight,
              types: data2.types.map(type=>type.type.name),
              sprites: data2.sprites,
              comment:'',
              friends:'',
            };

            return pokeInfo;
          })
        );
        setTableRows(fetchedPokes);
      } catch (error) {
        console.log(error);
      }
    };

    getdata(PokesUrl);
  
    const getPokemonTypesOption =async(url)=>{
      try{
        
        let typeResp =await fetch(url);
        let typeData = await typeResp.json();
        const typeOptions=typeData.results.map(type=>type.name)
        setPokemonTypesOptions(typeOptions)


    }
    catch(err){console.log("Error al obtener tipos")}
      
    }
  
    getPokemonTypesOption('https://pokeapi.co/api/v2/type/')
  
  }, []);

  //JJ


  const handleUpdatePokemonRow = ({ id_pokemon, fields }) => {
    const { my_name, my_description, my_types, my_teammates, my_sprite } =
      fields;
  };

  return (
    <div className="App">
      <Routes
        tableRows={tableRows}
        pokemonTypesOptions={pokemonTypesOptions}
        handleUpdatePokemonRow={handleUpdatePokemonRow}
      />
      <Outlet />
    </div>
  );
}

export default App;
