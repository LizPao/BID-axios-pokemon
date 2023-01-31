import React, { useState } from 'react'
import axios from 'axios'

const PokemonAxios = () => {
    const [pokemons, setPokemons] = useState([]);
    const buscarDatos = () =>{
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807').then(response=>{
            setPokemons(response.data.results.map((pokemon)=>pokemon.name));
        })
    }
    return (
        <>
            <button className='btn-pokemon' onClick={buscarDatos}>Fetch pokemon</button>
            <ol className='lista-pokemon'>
                {
                    pokemons.map((pokemon, index)=><li key={index}>{pokemon}</li>)
                }
            </ol>
        </>
    )
}

export default PokemonAxios