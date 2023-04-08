import * as s from './styledPokemonList'
import { PokemonCard } from '../../components/pokemonCard/PokemonCard'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

export function PokemonListPage() {
    const [pokemons, setPokemons] = useState([])

    const getAllPokemons = async () => {

        try {
            const res = await axios.get('https://pokeapi.co/api/v2/pokemon/')
            setPokemons(res.data.results)

        } catch (error) {
            console.log(error.response)
        }
    }

    useEffect(() => {
        getAllPokemons()
    }, [])

    return (
        <s.Container>
            <s.Title>Todos Pokémons</s.Title>
            <s.ContainerCard>
                {
                    pokemons.map(pokemon => {
                        return <PokemonCard key={pokemon.name} pokemon={ pokemon }/>
                    })
                }
            </s.ContainerCard>
        </s.Container>
    )
}