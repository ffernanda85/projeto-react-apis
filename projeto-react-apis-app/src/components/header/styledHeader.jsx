import styled from "styled-components";

export const HeaderContainer = styled.header`
    height: 25vh;
    width: 100%;
    background-color:  #FFFFFF;
`
export const LogoPokedex = styled.img`
    width: 307px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: relative;
`
export const BtnPokedex = styled.button`
    position: absolute;
    width: 270px;
    height: 70px;
    left: 64%;
    top: 15%;
    transform: translate(90%, -75%);
    background: #33A4F5;
    border-radius: 8px;
    border: none;
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2.25rem;
    color: #FFFFFF;
    cursor: pointer;
`