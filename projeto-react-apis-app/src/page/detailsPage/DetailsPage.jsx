import { Header } from "../../components/header/Header";
import { Modal } from "../../components/modal/Modal";
import * as s from "./styledDetails"
import BG from "../../assets/img/cards/pngwing2.svg"
import { Container } from "../../Container";

export function DetailsPage() {
    return (
        <>
            <Header />
            <s.Container BG={BG}>
                <Modal />
                <s.Title>Detalhes</s.Title>

                <s.ContainerCardDetail >

                    <div>
                        <div></div>
                        <div></div>
                    </div>

                    
                </s.ContainerCardDetail>

            </s.Container>

        </>
    )
}