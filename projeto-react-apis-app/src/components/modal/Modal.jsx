import Gotcha from '../../assets/img/cards/delete_add/gotcha.svg'
import Oh_No from '../../assets/img/cards/delete_add/oh-no.svg'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { useLocation } from 'react-router-dom'
import * as s from './styledModal'

export const Modal = () => {
    const context = useContext(GlobalContext)
    const location = useLocation()

    return (
        <>

            {location.pathname === '/' ?

                <s.ModalContainer onClick={() => context.setModal(false)} >
                    <div>
                        {context.modal && context.action && context.action === 'capture' && <s.ImgModal src={Gotcha} alt="capture" />}
                    </div>
                </s.ModalContainer>
                :
                <s.ModalContainer onClick={() => context.setModal(false)} >
                    <div>
                        {context.modal && context.action && context.action === 'delete' && <s.ImgModal src={Oh_No} alt="delete" />}
                    </div>
                </s.ModalContainer>
            }
        </>
    )
}