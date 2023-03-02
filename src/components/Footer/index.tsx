import { FooterContainer } from "./style"





export const Footer = () => {
    return(
        <FooterContainer>
            <h4>TELEFONES PARA CONTATO: </h4>

            <span>
                <a href="tel:+5511944531303">(11) 94453-1303</a>
                <p>/</p>
                <a href="tel:+5511973623344">(11) 97362-3344</a>
                
            </span>
            <span className="whatsapp">
                <p>Whatsapp: </p>
                <a href="https://api.whatsapp.com/send?phone=5531999769422&text=Olá!%20Tenho%20interesse%20nas%20kitnet." target="_blank" rel="noreferrer">(31) 99976-9422</a>
            </span>

            
            
        </FooterContainer>
    )
}