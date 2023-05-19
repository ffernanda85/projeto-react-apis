import { Header } from "../../components/header/Header";
import * as s from "./styledDetails"
import BG from "../../assets/img/cards/pngwing2.svg"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constant/constant";
import { abilities } from "../../types/abilities"
import { AbilityOne, ContainerAbility, NameAbility } from "../../components/pokemonCard/styledPokemonCard";

export function DetailsPage() {
    const params = useParams()

    const [imgFront, setImgFront] = useState("")
    const [imgBack, setImgBack] = useState("")
    const [imgPoke, setImgPoke] = useState("")
    const [id, setId] = useState("")
    const [move, setMove] = useState([])
    const [stats, setStats] = useState([])
    const [colorCardDetail, setColorCardDetail] = useState("")
    const [types, setTypes] = useState([])

    useEffect(() => {
        details(params.namePokemon)
    }, [])

    const details = async (namePokemon) => {
        const URL = BASE_URL + namePokemon
        try {
            const res = await axios.get(URL)
            const dataMove = res.data.moves.slice(0, 4)
            const selectedColorCard = abilities.find(e => e.type === res.data.types[0].type.name)

            setColorCardDetail(selectedColorCard.colorCard)
            setImgFront(res.data.sprites.front_default)
            setImgBack(res.data.sprites.back_default)
            setImgPoke(res.data.sprites.other["official-artwork"].front_default)
            setId(res.data.id)
            setMove(dataMove)
            setStats(res.data.stats)
            setTypes(res.data.types)

        } catch (error) {
            console.log(error.response)
        }
    }
    const TotalBaseStat = stats.reduce((acc, curr) => acc + curr.base_stat, 0)

    return (
        <>
            <Header pokemonName={params?.namePokemon} />
            <s.Container BG={BG}>
                <s.Title>Detalhes</s.Title>
                <s.ContainerCardDetail BG={BG} color={colorCardDetail}>
                    <s.ContainerBoxOne>
                        <s.ContainerImgPokemon>
                            <s.BoxImgFront> <s.ImgFront src={imgFront} alt="imgFront" /> </s.BoxImgFront>
                            <s.BoxImgBack> <s.ImgBack src={imgBack} alt="imgBack" /> </s.BoxImgBack>
                        </s.ContainerImgPokemon>
                        <s.ContainerBaseStats>
                            <s.TitleBaseStats>Base stats</s.TitleBaseStats>
                            <s.BoxStats>
                                {
                                    stats.map((item, index) => {
                                        return (
                                            <s.Stat key={index}>
                                                <s.TitleStat>{item.stat.name === 'special-attack' ? 'Sp.Atk' : item.stat.name === 'special-defense' ? 'Sp.Def' : item.stat.name}</s.TitleStat>
                                                <s.ValueStat>{item.base_stat}</s.ValueStat>
                                                <s.Table base={item.base_stat} ></s.Table>
                                            </s.Stat>
                                        )
                                    })
                                }
                                <s.Stat>
                                    <s.TitleStat>Total</s.TitleStat>
                                    <s.ValueStat>{TotalBaseStat}</s.ValueStat>
                                </s.Stat>
                            </s.BoxStats>
                        </s.ContainerBaseStats>
                        <s.ContainerBox>
                            <s.BoxAbilites>
                                <s.Id>#{id < 10 ? "0" + id : id}</s.Id>
                                <s.NamePokemon>{params.namePokemon}</s.NamePokemon>
                                <s.ContainerAbility>
                                    {!!types.length &&
                                        types.map((e) => {
                                            const ability = abilities.find(ability => ability.type === e?.type.name);
                                            return (
                                                <AbilityOne key={e.type.name} {...ability} >
                                                    <NameAbility>{e.type.name}</NameAbility>
                                                </AbilityOne>
                                            )
                                        })
                                    }
                                </s.ContainerAbility>
                            </s.BoxAbilites>
                            <s.BoxMoves>
                                <s.TitleMoves>Moves:</s.TitleMoves>
                                <s.ContainerBoxMove>
                                    {
                                        move.map((item, index) =>
                                            <s.BoxMove key={index}>
                                                {item.move.name}
                                            </s.BoxMove>
                                        )
                                    }
                                </s.ContainerBoxMove>
                            </s.BoxMoves>
                        </s.ContainerBox>
                    </s.ContainerBoxOne>
                    <s.ContainerPokemon>
                        <s.ImgPokemon src={imgPoke} alt="" />
                    </s.ContainerPokemon>
                </s.ContainerCardDetail>
            </s.Container>
        </>
    )
}