import { Header } from "../../components/header/Header";
import { PokemonCard } from '../../components/pokemonCard/PokemonCard';
import * as s from './styledPokedex'
import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";
import { Modal } from "../../components/modal/Modal";


export function PokedexPage() {
    const context = useContext(GlobalContext)

    return (
        <>
            <Header />
            <s.Container>
                <s.Title>Meus Pokémons</s.Title>
                <Modal/>
                <s.ContainerCard>
                    {
                        context.pokemons.filter(pokemon => pokemon.isPokedex)
                            .map((pokemon) => {
                            return <PokemonCard key={pokemon.name} pokemon={pokemon} />
                        })
                    }
                </s.ContainerCard>
            </s.Container>
        </>
    )
}