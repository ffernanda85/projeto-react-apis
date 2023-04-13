import styled from 'styled-components'

export const ContainerCard = styled.div`
    background: #729F92;
    border-radius: 12px;
    width: 440px;
    height: 210px;
    position: relative;
`
export const BackGroundImage = styled.img`
    position: absolute;
    right: 0;
    top: 0;
    width: 210.73px;
    height: 210.73px;
`
export const ImgPokemon = styled.img`
    position: absolute;
    right: 13px;
    bottom: 70px;
    width: 193px;
    height: 193px;
`
export const ContainerInformation = styled.div`
    display: flex;
    flex-direction: column;
    gap: .625rem;
    position: absolute;
    left: 23px;
`
export const ContainerNameId = styled.div`
    position: absolute;
    top: 25px;
`
export const Id = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
`
export const NamePokemon = styled.h3`
    font-family: 'Inter';
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.44rem;
    color: #FFFFFF;
    
    ::first-letter {
        text-transform: uppercase;
    }
`
export const ContainerAbility = styled.div`
    display: flex;
    gap: .5rem;
    position: absolute;
    top: 90px;
`
export const NameAbility = styled.p`
    font-family: 'Poppins';
    font-size: .875rem;
    line-height: 1.3125rem;
    color: #FFFFFF;
`
export const ImgAbility = styled.img`
    
`
export const AbilityOne = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #AD61AE;
    border: 1px dashed rgba(255, 255, 255, 0.47);
    border-radius: 8px;
    width: 99px;
    height: 31px;
`
export const AbilityTwo = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #70B873;
    border: 1px dashed rgba(255, 255, 255, 0.47);
    border-radius: 8px;
    width: 99px;
    height: 31px;
`
export const BtnCatch = styled.button`
    position: absolute;
    right: 22px;
    bottom: 13px;
    align-items: center;
    padding: 4px 10px;
    width: 146px;
    height: 38px;
    background-color: ${props => props.isOn ? '#FF6262' : '#FFFFFF'};
    color: ${props => props.isOn ? '#FFFFFF' : '#0F0F0F' } ;
    border-radius: 8px;
    border: none;
    font-family: 'Poppins';
    font-size: 1rem;
    line-height: 1.5rem;
    cursor: pointer;

    :hover {
        background-color: ${props => props.isOn ? '#FFFFFF' : '#0F0F0F'};
        color: ${ props => props.isOn ? '#FF6262' : '#FFFFFF' } ;
    }
`
export const Details = styled.p`
    position: absolute;
    left: 23px;
    bottom: 20px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5rem;
    text-decoration-line: underline;
    color: #FFFFFF;
    cursor: pointer;

    :hover {
        opacity: .5;
    }
`