import * as s from './styledPokemonCard'
import BG from '../../assets/img/cards/pngwing2.svg'
import Poison from '../../assets/img/cards/ability/poison.svg'
import Grass from '../../assets/img/cards/ability/grass.svg'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToPage } from '../../routes/coordinator'

export function PokemonCard({pokemon}) {
    const { name, url } = pokemon
    const [id, setId] = useState("")
    const [image, setImage] = useState("")

    const navigate = useNavigate()
    
    const getDataPokemon = async () => {
        try {
            const res = await axios.get(url)
            setId(res.data.id)
            setImage(res.data.sprites.other["official-artwork"].front_default)

        } catch (error) {
            console.log(error.response)
        }
    }

    useEffect(() => {
        getDataPokemon()
    }, [])

   /*  const goToDetails = (page) => {
        navigate(`/page/${page}`)
    } */

    return (

        <s.ContainerCard>
            <s.ContainerInformation>
                <s.ContainerNameId>
                    <s.Id>#{id <= 9? '0'+id : id}</s.Id>
                    <s.NamePokemon>{name}</s.NamePokemon>
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
            <s.Details onClick={() => goToPage(navigate, '/page/details')} >Detalhes</s.Details>

            <s.BtnCatch>Capturar!</s.BtnCatch>

        </s.ContainerCard>
    )
}