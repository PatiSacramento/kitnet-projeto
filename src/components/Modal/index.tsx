import { ContactButton } from '@/styles/detailsStyle';
import React, { ChangeEvent, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { ModalDialog } from './style';

export const ModalContato = (props: {
  isModalOpen: boolean;
  openModal: any;
  kitnet: string;
}) => {
  const [userName, setUserName] = useState('');

  const getName = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setUserName(event.target.value);
  };

  return (
    <Modal show={props.isModalOpen} onHide={props.openModal} size="sm" centered>
      <ModalDialog>
        <Modal.Header closeButton>
          <Modal.Title>Contato</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Olá! Tenho interesse na kitnet da {props.kitnet}
        </Modal.Body>

        <ContactButton>
          <a
            href={`https://api.whatsapp.com/send?phone=5511944531303&text=Olá!%20Tenho%20interesse%20na%20kitnet%20da%20${props.kitnet}.`}
            target="_blank"
            rel="noreferrer"
          >
            ENVIAR PELO WHATSAPP
          </a>
        </ContactButton>
      </ModalDialog>
    </Modal>
  );
};
