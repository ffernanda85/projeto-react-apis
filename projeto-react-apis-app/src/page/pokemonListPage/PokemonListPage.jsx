import * as s from './styledPokemonList'
import { PokemonCard } from '../../components/pokemonCard/PokemonCard'
import { Header } from '../../components/header/Header'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
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
            <Modal />
            <s.Container>
                <s.Title>Todos Pokémons</s.Title>
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