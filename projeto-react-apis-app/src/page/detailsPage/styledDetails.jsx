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
    background-color: ${({color})=> color};
    background-image: url(${({ BG }) => BG});
    background-repeat: no-repeat;
    background-position: top -370px left 660px;
    background-size: 730px 1500px;
    border-radius: 37.8857px;
    width: 1389px;
    height: 663px;
    display: flex;
    position: relative;
    padding: 1.625rem 2.8125rem;
`
export const ContainerBoxOne = styled.div`
    display: flex;
    gap: 2.125rem;
`
export const ContainerImgPokemon = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`
export const BoxImgFront = styled.div`
    width: 282px;
    height: 282px;
    border-radius: 8px;
    background-color: #ffff;
    display: flex;
    justify-content: center;
`
export const ImgFront = styled.img`
    width: 250px;
    &:hover{
        transform: scale(1.1);
    }
`
export const BoxImgBack = styled.div`
    width: 282px;
    height: 282px;
    border-radius: 8px;
    background-color: #ffff;
    display: flex;
    justify-content: center;
`
export const ImgBack = styled.img`
    width: 250px;
    &:hover{
        transform: scale(1.1);
    }
`
export const ContainerBaseStats = styled.div`
    width: 400px;
    height: 613px;
    background: rgb(255, 255, 255);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.18rem;
`
export const TitleBaseStats = styled.h3`
    font-family: 'Inter';
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 1.8125rem;
    color: #000000;
`
export const BoxStats = styled.div`
    font-family: 'Inter';
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    padding: 1rem;
`
export const Stat = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    grid-template-rows: auto;
    gap: .5rem;
`
export const TitleStat = styled.div`
    text-align: right;
    ::first-letter {
            text-transform: uppercase;
        }
`
export const ValueStat = styled.div`
    text-align: right;
    margin-right: 1rem;
`
export const Table = styled.div`
    text-align: left;
    width: ${({ base }) => base}px;
    height: 12px;
    border-radius: 12px;
    background-color: ${({base})=> base <= 50 ? '#ff7c2e' : '#ffdd69' } ;
`
export const ContainerBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 2.125rem;
`
export const BoxAbilites = styled.div`
    
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
        ::first-letter {
            text-transform: uppercase;
        }
`
export const ContainerAbility = styled.div`
    display: flex;
    gap: 18px;
    margin-top: 9px;
`
export const BoxMoves = styled.div`
    width: 292px;
    height: 453px;
    background: #FFFFFF;
    border-radius: 8px;
    padding: 1.125rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
`
export const TitleMoves = styled.h3`
    font-family: 'Inter';
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 1.8125rem;
    color: #000000;
`
export const ContainerBoxMove = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
`
export const BoxMove = styled.div`
    background: #ECECEC;
    display: inline-block;
    max-width: 100%;
    height: 37px;
    padding: .625rem;
    border: 1px dashed rgba(0, 0, 0, 0.14);
    border-radius: 12px;
    font-family: 'Montserrat';
    font-size: .875rem;
    color: #000000;
`
export const ContainerPokemon = styled.div`
    
`
export const ImgPokemon = styled.img`
    position: absolute;
    right: 30px;
    bottom: 520px;
    width: 270px;
    &:hover{
        transform: scale(1.1);
    }
`
