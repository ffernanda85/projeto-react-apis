import { Header } from "../../components/header/Header";
import { Modal } from "../../components/modal/Modal";
import * as s from "./styledDetails"
import BG from "../../assets/img/cards/pngwing2.svg"
import Poke from "../../assets/img/cards/pokemon/poke1.svg"

export function DetailsPage() {
    return (
        <>
            <Header />
            <s.Container BG={BG}>
                <Modal />
                <s.Title>Detalhes</s.Title>

                <s.ContainerCardDetail >

                    <s.ContainerBoxOne>
                        <s.ContainerImgPokemon>
                            <s.BoxImgFront> <s.ImgFront src="" alt="" /> </s.BoxImgFront>
                            <s.BoxImgBack> <s.ImgBack src="" alt="" /> </s.BoxImgBack>
                        </s.ContainerImgPokemon>

                        <s.ContainerBaseStats>
                            <s.TitleBaseStats>Base stats</s.TitleBaseStats>
                            <s.BoxStats>
                                <p>HP</p>
                                <p>Attack</p>
                                <p>Defense</p>
                                <p>Sp. Atk</p>
                                <p>Sp. Def</p>
                                <p>Speed</p>
                                <p>Total</p>
                            </s.BoxStats>
                        </s.ContainerBaseStats>

                        <s.ContainerBox>
                            <s.BoxAbilites>
                                <s.Id>Id</s.Id>
                                <s.NamePokemon>Nome</s.NamePokemon>
                                <div></div>
                            </s.BoxAbilites>
                            <s.BoxMoves></s.BoxMoves>
                        </s.ContainerBox>

                    </s.ContainerBoxOne>


                    <s.ContainerPokemon>
                        <s.ImgPokemon src={Poke} alt="" />
                    </s.ContainerPokemon>

                </s.ContainerCardDetail>

            </s.Container>

        </>
    )
}