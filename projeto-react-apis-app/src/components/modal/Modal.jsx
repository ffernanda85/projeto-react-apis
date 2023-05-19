import Gotcha from '../../assets/img/cards/delete_add/gotcha.svg'
import Oh_No from '../../assets/img/cards/delete_add/oh-no.svg'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import * as s from './styledModal'

export const Modal = () => {
  const context = useContext(GlobalContext)

  return (
    <s.ContainerModal onClick={() => context.setModal(false)} >
      <s.ModalBox >
          {context?.action === 'capture' && <s.ImgModal src={Gotcha} alt="capture" />}
          {context?.action === 'delete' && <s.ImgModal src={Oh_No} alt="delete" />}      
      </s.ModalBox>
    </s.ContainerModal>
  )  
}
