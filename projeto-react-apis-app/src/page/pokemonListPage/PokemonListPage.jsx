import * as s from './styledPokemonList'
import { PokemonCard } from '../../components/pokemonCard/PokemonCard'
import { Header } from '../../components/header/Header'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import Next from "../../assets/img/arrow/next.gif"
import Back from "../../assets/img/arrow/back.gif"

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
                <s.ImgArrowNext src={Next} alt="seta-next" onClick={context.nextPage()} />
                <s.ImgArrowBack src={Back} alt="seta-back" onClick={context.backPage()}/>
            </s.Container>
        </>
    )
}