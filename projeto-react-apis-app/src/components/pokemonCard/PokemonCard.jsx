import * as s from './styledPokemonCard'
import BG from '../../assets/img/cards/pngwing2.svg'
import axios from 'axios'
import { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToPage } from '../../routes/coordinator'
import { GlobalContext } from '../../context/GlobalContext'
import { useLocation } from 'react-router-dom'
import { abilities } from '../../types/abilities'


export function PokemonCard(props) {
    const { pokemon } = props
    const [id, setId] = useState("")
    const [image, setImage] = useState("")
    const [types, setTypes] = useState([])
    const [color, setColor] = useState('')

    const context = useContext(GlobalContext)
    const navigate = useNavigate()
    const location = useLocation()

    const getDataPokemon = async () => {
        try {
            const res = await axios.get(pokemon.url)
            setId(res.data.id)
            setImage(res.data.sprites.other["official-artwork"].front_default)
            setTypes(res.data.types)

            const abilitiesColorCard = abilities.find(e => e.type === res.data.types[0].type.name)
            setColor(abilitiesColorCard.colorCard)

        } catch (error) {
            console.log(error.response)
        }
    }

    useEffect(() => {
        getDataPokemon()
    }, [context.pokedex, props])

    return (
        <>
            <s.ContainerCard color={color} >
                <s.ContainerInformation>
                    <s.ContainerNameId>
                        <s.Id>#{id <= 9 ? '0' + id : id}</s.Id>
                        <s.NamePokemon>{pokemon.name}</s.NamePokemon>
                    </s.ContainerNameId>
                    <s.ContainerAbility>
                        {!!types.length &&
                            types.map((e) => {
                                const ability = abilities.find(
                                    (ability) => ability.type === e.type.name
                                );
                            return (
                                <s.AbilityOne key={e.type.name} {...ability} >
                                    <s.NameAbility>{ e.type.name }</s.NameAbility>
                                </s.AbilityOne>
                            )})
                        }
                    </s.ContainerAbility>
                </s.ContainerInformation>
                <s.BackGroundImage src={BG} alt="" />
                <s.ImgPokemon src={image} alt="image pokemon" />
                <s.Details onClick={() => goToPage(navigate, `/details/${pokemon.name}`)}>Detalhes</s.Details>
                {
                    location.pathname === '/' ?
                        <s.BtnCatch isOn={false} onClick={() => { context.capture(pokemon) }} > Capturar!</s.BtnCatch>
                        :
                        <s.BtnCatch isOn={true} onClick={() => { context.del(pokemon) }} > Excluir</s.BtnCatch>
                }
            </s.ContainerCard>
        </>
    )
}