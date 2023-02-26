import { KitnetCard } from "../KitnetCard"
import { KitnetsContainer } from "./style"
import kit1 from '../../assets/imagens-kitnets/1/principal_1.jpg'
import kit2 from '../../assets/imagens-kitnets/2/principal_2.jpg'
import kit3 from '../../assets/imagens-kitnets/3/principal_3.jpg'
import loft from '../../assets/imagens-kitnets/loft_casa/principal_4.jpg'





export const Kitnets = () => {
    return (
        <KitnetsContainer>
            <h3 id='kitnets'>NOSSOS KITNETS</h3>
            <hr />

            <span> 
                <KitnetCard imgPrincipal={kit1} id="1" name="Kitnet Abadia dos Dourados"/>
                <KitnetCard imgPrincipal={kit2} id="2" name="Kitnet Abadia dos Dourados"/>
                <KitnetCard imgPrincipal={kit3} id="3" name="Kitnet Abadia dos Dourados"/>
                <KitnetCard imgPrincipal={loft} id="4" name="Loft Corinto"/>
            </span>

        </KitnetsContainer>
    )
}