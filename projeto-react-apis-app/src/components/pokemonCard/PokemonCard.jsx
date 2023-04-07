import * as s from './styledPokemonCard'
import BG from '../../../public/img/cards/pngwing2.svg'
import Poison from '../../../public/img/cards/ability/poison.svg'
import Grass from '../../../public/img/cards/ability/grass.svg'
import PokeTest from '../../../public/img/cards/pokemon/poke1.svg'

export function PokemonCard() {

    return (

        <s.ContainerCard>
            <s.ContainerInformation>
                <s.ContainerNameId>
                    <s.Id>#01</s.Id>
                    <s.NamePokemon>Bulbasaur</s.NamePokemon>
                </s.ContainerNameId>
                <s.ContainerAbility>
                    <s.AbilityOne>
                        <s.ImgAbility src={Poison} alt="ability" />
                        <s.NameAbility>Poison</s.NameAbility>
                    </s.AbilityOne>
                    <s.AbilityTwo>
                        <s.ImgAbility src={Grass} alt="ability" />
                        <s.NameAbility>Grass</s.NameAbility>
                    </s.AbilityTwo>
                </s.ContainerAbility>
            </s.ContainerInformation>
            <s.BackGroundImage src={BG} alt="" />
            <s.ImgPokemon src={PokeTest} alt="image pokemon" />
            <s.Details>Detalhes</s.Details>

            <s.BtnCatch>Capturar!</s.BtnCatch>

        </s.ContainerCard>
    )
}