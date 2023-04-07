import * as s from './styledHome'
import { PokemonCard } from '../../pokemonCard/PokemonCard'

export function Home() {
    return (
        <s.Container>
            <s.Title>Todos Pokémons</s.Title>
            <s.ContainerCard>
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
            </s.ContainerCard>
        </s.Container>
    )
}