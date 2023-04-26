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
    display: flex;
    //justify-content: center;
    position: relative;
    //gap: 2rem;
`
export const ContainerBoxOne = styled.div`
    width: 50%;
    display: flex;
    gap: 2rem;
    //justify-content: flex-start;
`
export const ContainerImgPokemon = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   align-items: center;
   gap: 1.2rem;
`
export const BoxImgFront = styled.div`
    width: 282px;
    height: 282px;
    border-radius: 8px;
    background-color: #ffff;
`
export const BoxImgBack = styled.div`
    width: 282px;
    height: 282px;
    border-radius: 8px;
    background-color: #ffff;
`
export const ImgFront = styled.img`
    
`
export const ImgBack = styled.img`
    
`
export const ContainerBoxTwo = styled.div`
    width: 50%;
    display: flex;
    gap: 2rem;
    //justify-content: space-evenly;
`
export const ContainerBaseStats = styled.div`
    width: 343px;
    height: 613px;
    background: #FFFFFF;
    border-radius: 12px;
    align-self: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.1875rem;
`
export const TitleBaseStats = styled.h3`
    font-family: 'Inter';
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 1.8125rem;
    color: #000000;
`
export const BoxStats = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;
    font-family: 'Inter';
`
export const ContainerBox = styled.div`
    //width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 1.2rem;
`
export const BoxMoves = styled.div`
    width: 292px;
    height: 453px;
    background: #FFFFFF;
    border-radius: 8px;
`
export const Id = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.1875rem;
    color: #FFFFFF;
`
export const NamePokemon = styled.h2`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 3rem;
    line-height: 3.625rem;
    color: #FFFFFF;
`
export const BoxAbilites = styled.div`
    
`
export const ContainerPokemon = styled.div`
   
    
`
export const ImgPokemon = styled.img`
    position: absolute;
    right: 35.14px;
    bottom: 520px;
    width: 270px;
`