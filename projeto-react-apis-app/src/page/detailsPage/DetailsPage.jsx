import { Header } from "../../components/header/Header";
import { Modal } from "../../components/modal/Modal";
import * as s from "./styledDetails"
import BG from "../../assets/img/cards/pngwing2.svg"
import Poke from "../../assets/img/cards/pokemon/poke1.svg"
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import axios from "axios";
import { BASE_URL } from "../../constant/constant";

export function DetailsPage() {
    const params = useParams()
    const context = useContext(GlobalContext)
    const [imgFront, setImgFront] = useState("")
    const [imgBack, setImgBack] = useState("")
    const [imgPoke, setImgPoke] = useState("")
    const [id, setId] = useState("")
    const [move, setMove] = useState([])
    const [stats, setStats] = useState([])

    //console.log(params.namePokemon)

    const details = async (namePokemon) => {
        const URL = BASE_URL + namePokemon

        try {
            const res = await axios.get(URL)

            console.log(res.data)
            //console.log("stats:", res.data.stats)

            const dataMove = res.data.moves.slice(0, 4)

            setImgFront(res.data.sprites.front_default)
            setImgBack(res.data.sprites.back_default)
            setImgPoke(res.data.sprites.other["official-artwork"].front_default)
            setId(res.data.id)
            setMove(dataMove)
            setStats(res.data.stats)

        } catch (error) {
            console.log(error.response)
        }
    }

    useEffect(() => {
        details(params.namePokemon)
    }, [])

    console.log(stats)
    //const initialValue = 
    const TotalBaseStat = stats.reduce((acc, curr) => acc + curr.base_stat, 0)

    return (
        <>
            <Header />
            <s.Container BG={BG}>
                <Modal />
                <s.Title>Detalhes</s.Title>

                <s.ContainerCardDetail >

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
                                                <s.Table></s.Table>
                                            </s.Stat>
                                        )
                                    })
                                }
                                <s.TotalStatContainer>
                                    <s.TitleStat>Total</s.TitleStat>
                                    <s.ValueStat>{TotalBaseStat}</s.ValueStat>
                                </s.TotalStatContainer>

                            </s.BoxStats>
                        </s.ContainerBaseStats>

                        <s.ContainerBox>
                            <s.BoxAbilites>
                                <s.Id>#{id < 10 ? "0" + id : id}</s.Id>
                                <s.NamePokemon>{params.namePokemon}</s.NamePokemon>
                                <div></div>
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