import { Header } from "../../components/header/Header";
import { PokemonCard } from '../../components/pokemonCard/PokemonCard';
import { useRequestData } from '../../assets/hooks/useRequestData'
import * as s from './styledPokedex'
import { Title, Container, ContainerCard } from "../pokemonListPage/styledPokemonList"

export function PokedexPage() {
    const pokemons = useRequestData()

    return (
        <>
            <Header />
            <Container>
                <Title>Meus Pokémons</Title>
                <ContainerCard>
                    {
                        pokemons.map(pokemon => {
                            return <PokemonCard key={pokemon.name} pokemon={pokemon} />
                        })
                    }
                </ContainerCard>
            </Container>
        </>
    )
}