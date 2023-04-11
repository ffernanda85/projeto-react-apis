import * as s from './styledPokemonList'
import { PokemonCard } from '../../components/pokemonCard/PokemonCard'
import { Header } from '../../components/header/Header'
import { useRequestData } from '../../hooks/useRequestData'

export function PokemonListPage() {
    const pokemons = useRequestData()
    
    return (
        <>
        <Header />
        <s.Container>
            <s.Title>Todos Pokémons</s.Title>
            <s.ContainerCard>
                {
                    pokemons.map((pokemon, index) => {
                        return <PokemonCard key={index} pokemon={ pokemon }/>
                    })
                }
            </s.ContainerCard>
        </s.Container>
        </>
    )
}