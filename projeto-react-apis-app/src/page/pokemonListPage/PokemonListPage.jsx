import * as s from './styledPokemonList'
import { PokemonCard } from '../../components/pokemonCard/PokemonCard'
import { Header } from '../../components/header/Header'
import { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { BASE_URL } from '../../constant/constant'
import axios from 'axios'
import { Modal } from '../../components/modal/Modal'

export function PokemonListPage() {
    const context = useContext(GlobalContext)

    /* const getAllPokemons = async () => {
        try {
            const res = await axios.get(BASE_URL)
            context.setPokemons(res.data.results)

        } catch (error) {
            console.log(error.response)
        }
    }

    useEffect(() => {
        getAllPokemons()
    }, []) */

    return (
        <>
            <Header />
            <s.Container>
                <s.Title>Todos Pokémons</s.Title>
                <Modal />
                <s.ContainerCard>
                    {//testar fazer um sort para ordenar os pokemons pelo seus Ids
                        context.pokemons.filter(pokemon => !pokemon.isPokedex)
                            .map((pokemon) => {
                                return <PokemonCard key={pokemon.name} pokemon={pokemon} />
                            })
                    }
                </s.ContainerCard>

            </s.Container>
        </>
    )
}