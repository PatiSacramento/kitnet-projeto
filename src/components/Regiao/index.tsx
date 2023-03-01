import { RegiaoCard } from "../RegiaoCard"
import { RegiaoContainer } from "./style"
import gostoSim from '../../assets/regiao/gosto-sim.png'
import quintalButanta from '../../assets/regiao/quintal-butanta.jpg';
import churrascariaTordilho from '../../assets/regiao/churrascaria-tordilho.jpg';
import inkaHouse from '../../assets/regiao/inka-house.jpg';
import tresPescadores from '../../assets/regiao/tres-pescadores.jpg';
import padariaCidadeUniversitaria from '../../assets/regiao/padaria-cidade-universitaria.jpg';
import ultrafarma from '../../assets/regiao/ultrafarma.jpg';
import supermercadoVioleta from '../../assets/regiao/supermercado-violeta.jpg';
import villaVerdePizzas from '../../assets/regiao/villa-verde-pizzas.jpg';
import kadaloraPizzaria from '../../assets/regiao/kadalora-pizzaria.jpg';
import frutariaJardimRizzo from '../../assets/regiao/frutaria-jardim-rizzo.jpg';
import academiaSmartFitCorifeu from '../../assets/regiao/smart-fit-corifeu.jpg';
import portariaUsp from '../../assets/regiao/usp-logo-azul.jpg';

export const Regiao = () => {
    return(
        <RegiaoContainer>
            <h3 id='regiao'>A REGIÃO</h3>
            <hr />

            <span>
                <RegiaoCard name="USP Portaria de Pedestres" imagem={portariaUsp} linkMapa="https://goo.gl/maps/iHe1vrKaygaxom9A8"/>
                <RegiaoCard name="Restaurante Gosto Sim" imagem={gostoSim} linkMapa="https://goo.gl/maps/JvB15cUMh9EGGa267"/>
                <RegiaoCard name="Restaurante Quintal Butantã" imagem={quintalButanta} linkMapa="https://goo.gl/maps/2xSvs9cd6wCiLfqn6"/>
                <RegiaoCard name="Churrascaria Tordilho" imagem={churrascariaTordilho} linkMapa="https://goo.gl/maps/4AJfnTrePWtMA5Mj7"/>
                <RegiaoCard name="InkaHouse Butantã" imagem={inkaHouse} linkMapa="https://goo.gl/maps/qTr9h4noxwn2kV4J6"/>
                <RegiaoCard name="Três Pescadores Butantã" imagem={tresPescadores} linkMapa="https://goo.gl/maps/cetVR8Y7YBSqrjRt8"/>
                <RegiaoCard name="Padaria Cidade Universitária" imagem={padariaCidadeUniversitaria} linkMapa="https://goo.gl/maps/AgEwFGAb9y8n5K8z6"/>
                <RegiaoCard name="Ultrafarma Vila Indiana" imagem={ultrafarma} linkMapa="https://goo.gl/maps/SHTXQXd2sbNgo2Ki6"/>
                <RegiaoCard name="Supermercado Violeta" imagem={supermercadoVioleta} linkMapa="https://goo.gl/maps/hXMr9jusiJFgcYZYA"/>
                <RegiaoCard name="Villa Verde Pizzas" imagem={villaVerdePizzas} linkMapa="https://goo.gl/maps/tYryRxx2Xwetenr28"/>
                <RegiaoCard name="Kadalora Pizzaria" imagem={kadaloraPizzaria} linkMapa="https://goo.gl/maps/W2tFxz2wu2XnyT6E7"/>
                <RegiaoCard name="Frutaria Jardim Rizzo" imagem={frutariaJardimRizzo} linkMapa="https://goo.gl/maps/Jb3X3u5Gr3n3cypk8"/>
                <RegiaoCard name="Academia Smart Fit Corifeu" imagem={academiaSmartFitCorifeu} linkMapa="https://goo.gl/maps/PUHpBiEQYgDXBMU66"/>
            </span>
        </RegiaoContainer>
    )
}