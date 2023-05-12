import * as s from './styledPokemonList'
import { PokemonCard } from '../../components/pokemonCard/PokemonCard'
import { Header } from '../../components/header/Header'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

export function PokemonListPage() {
    const context = useContext(GlobalContext)

    return (
        <>
            <Header />
            <s.Container>
                <s.Title>Todos Pokémons</s.Title>
                <s.ContainerCard>
                    {
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