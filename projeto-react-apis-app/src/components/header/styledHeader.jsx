import styled from "styled-components";

export const HeaderContainer = styled.header`
    height: 25vh;
    max-width: 100vw;
    background-color:  #FFFFFF;
    position: relative;
`
export const LogoPokedex = styled.img`
    width: 307px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    cursor: pointer;
`
export const BtnPokedex = styled.button`
    position: absolute;
    top: 41px;
    right: 41px;
    width: 270px;
    height: 70px;
    transform: translatey(25%);
    background: ${({isOn})=> isOn ? '#FF6262' : '#33A4F5'};
    border-radius: 8px;
    border: none;
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 1.265rem;
    line-height: 2.25rem;
    color: #FFFFFF;
    cursor: pointer;
`
export const TitlePokedexPage = styled.h2`
    position: absolute;
    top: 62px;
    left: 100px;
    transform: translatey(50%);
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2.25rem;
    text-decoration-line: underline;
    color: #1A1A1A;
    cursor: pointer;

    ::before {
        content: "< ";
        color: #1A1A1A;
    }
`
/* export const BtnDeletePokemon = styled.button`
    position: absolute;
    top: 51px;
    right: 40px;
    transform: translatey(35%);
    width: 226px;
    height: 57px;
    background: #FF6262;
    border-radius: 8px;
    border: none;
    font-family: 'Poppins';
    font-size: 1rem;
    line-height: 1.5rem;
    color: #FFFFFF;
    cursor: pointer;
` */