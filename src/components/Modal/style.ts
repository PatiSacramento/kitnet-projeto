import styled from "styled-components";
import Modal from 'react-bootstrap/Modal'

export const ModalDialog = styled(Modal.Dialog)`
    padding: 0.5rem;

    .modal-content {
        border: none;
    }
   
`
interface Props extends React.AnchorHTMLAttributes<HTMLInputElement> {}

export const InputName = styled.input<Props>`
    border: none;
    border-radius: 0.3rem;

    :focus {
        outline-color: #84B026;
    }
`