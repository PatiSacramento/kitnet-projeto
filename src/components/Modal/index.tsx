import { ContactButton } from '@/styles/detailsStyle'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { InputName, ModalDialog } from './style'

export const ModalContato = (props: { isModalOpen: boolean, openModal: any, kitnet: string} ) => {
    const [userName, setUserName] = useState("")

    const getName = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setUserName(event.target.value);
    }

    return (
            <Modal show={props.isModalOpen} onHide={props.openModal}
                size="sm"
                centered
                
            >
                <ModalDialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Contato</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <InputName placeholder="Nome" value={userName} onChange={getName} />
                    </Modal.Body>

                    <ContactButton>
                        <a href={`https://api.whatsapp.com/send?phone=5531999769422&text=Olá!%20Meu%20nome%20é%20${userName}.%20Tenho%20interesse%20na%20kitnet%20da%20${props.kitnet}.`} target="_blank" rel="noreferrer">
                            ENVIAR PELO WHATSAPP
                        </a>
                    </ContactButton>
                </ModalDialog>

            </Modal>
    )
}