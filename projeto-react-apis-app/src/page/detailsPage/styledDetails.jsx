import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    margin: 0 auto;
    max-width: 1440px;
    padding: 60px 25px;
    background: url(${({ BG }) => BG}) no-repeat 35% center  ;
    background-size: 908.99px 908.99px;
`

export const Title = styled.h1`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 3rem;
    line-height: 4.5rem;
    color: #FFFFFF;
    padding-bottom: 3.5rem;
`
export const ContainerCardDetail = styled.div`
    background-color: #729F92;
    border-radius: 37.8857px;
    width: 1389px;
    height: 663px;
`
export const BackGroundImgContainer = styled.img`
    position: absolute;
    width: 908.99px;
    height: 908.99px;
    z-index: -1;
`
export const BackGroundImgCard = styled.img`
    
`