import * as s from './styledPokemonCard'
import BG from '../../assets/img/cards/pngwing2.svg'
import Poison from '../../assets/img/cards/ability/poison.svg'
import Grass from '../../assets/img/cards/ability/grass.svg'
import axios from 'axios'
import { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToPage } from '../../routes/coordinator'
import { GlobalContext } from '../../context/GlobalContext'
import { useLocation } from 'react-router-dom'


export function PokemonCard(props) {
    const { pokemon } = props
    const [id, setId] = useState("")
    const [image, setImage] = useState("")
    const [isOn, setIsOn] = useState(false)

    const context = useContext(GlobalContext)
    const navigate = useNavigate()

    const getDataPokemon = async () => {
        try {
            const res = await axios.get(pokemon.url)
            setId(res.data.id)
            setImage(res.data.sprites.other["official-artwork"].front_default)

        } catch (error) {
            console.log(error.response)
        }
    }

    useEffect(() => {
        getDataPokemon()
    }, [])

   
    return (
        <>
            <s.ContainerCard>
                <s.ContainerInformation>
                    <s.ContainerNameId>
                        <s.Id>#{id <= 9 ? '0' + id : id}</s.Id>
                        <s.NamePokemon>{pokemon.name}</s.NamePokemon>
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
                <s.ImgPokemon src={image} alt="image pokemon" />
                <s.Details onClick={() => goToPage(navigate, '/page/details')}>Detalhes</s.Details>
                {
                    location.pathname === '/'?
                        <s.BtnCatch isOn={false} onClick={() => { context.capture(pokemon) }} > Capturar!</s.BtnCatch>
                        :
                        <s.BtnCatch isOn={true} color={'#FF6262'} colorText={'#FFFFFF'} onClick={() => { context.delete(pokemon) }} > Excluir</s.BtnCatch>
}
            </s.ContainerCard>
        </>
    )
}