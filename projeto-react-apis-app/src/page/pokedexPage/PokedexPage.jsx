import { Header } from "../../components/header/Header";
import { PokemonCard } from '../../components/pokemonCard/PokemonCard';
import * as s from './styledPokedex'
import { Title, Container, ContainerCard } from "../pokemonListPage/styledPokemonList"
import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";


export function PokedexPage() {
    const context = useContext(GlobalContext)

    return (
        <>
            <Header />
            <Container>
                <Title>Meus Pokémons</Title>
                <ContainerCard>
                    {
                        context.pokedex.map((pokemon, index) => {
                            return <PokemonCard key={index} pokemon={pokemon} />
                        })
                    }
                </ContainerCard>
            </Container>
        </>
    )
}