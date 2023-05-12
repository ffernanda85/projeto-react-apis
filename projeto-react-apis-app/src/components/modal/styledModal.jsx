import styled from 'styled-components'

export const ModalContainer = styled.div`
    min-height: 100%;
    position: absolute;
`
export const ImgModal = styled.img`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
`
export const ContainerModal=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
    position: fixed;
    top:0;
    left: 0;
    background-color: rgba(0,0,0,0.3);
    z-index: 999;
`;
export const ModalBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    background-color: #f1f1f1;
    img{
        width: 40%;
     } 
`;