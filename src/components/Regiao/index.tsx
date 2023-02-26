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

export const Regiao = () => {
    return(
        <RegiaoContainer>
            <h3 id='regiao'>A REGIÃO</h3>
            <hr />

            <span>
                <RegiaoCard name="Restaurante Gosto Sim" imagem={gostoSim} linkMapa="https://goo.gl/maps/AgqTz5Jpbkq3itcu6"/>
                <RegiaoCard name="Restaurante Quintal Butantã" imagem={quintalButanta} linkMapa="https://goo.gl/maps/q2fW5KTYUYV9Bt1JA"/>
                <RegiaoCard name="Churrascaria Tordilho" imagem={churrascariaTordilho} linkMapa="https://goo.gl/maps/f8anEj3Vfs71g64X9"/>
                <RegiaoCard name="InkaHouse Butantã" imagem={inkaHouse} linkMapa="https://goo.gl/maps/7djBJH3mXtqo1bUn6"/>
                <RegiaoCard name="Três Pescadores Butantã" imagem={tresPescadores} linkMapa="https://goo.gl/maps/ZfccDxsPJzwZ1NUH9"/>
                <RegiaoCard name="Padaria Cidade Universitária" imagem={padariaCidadeUniversitaria} linkMapa="https://goo.gl/maps/t8khbzCb8Z4ZWcHa6"/>
                <RegiaoCard name="Ultrafarma Vila Indiana" imagem={ultrafarma} linkMapa="https://goo.gl/maps/QcN1hkk9XBMpsb1c8"/>
                <RegiaoCard name="Supermercado Violeta" imagem={supermercadoVioleta} linkMapa="https://goo.gl/maps/2w3Rh4obiBpHN42x7"/>
                <RegiaoCard name="Villa Verde Pizzas" imagem={villaVerdePizzas} linkMapa="https://goo.gl/maps/9eFTm1eqE7GWWJMr6"/>
                <RegiaoCard name="Kadalora Pizzaria" imagem={kadaloraPizzaria} linkMapa="https://goo.gl/maps/dDqFuRZdUdAx9WA8A"/>
                <RegiaoCard name="Frutaria Jardim Rizzo" imagem={frutariaJardimRizzo} linkMapa="https://goo.gl/maps/7Jn5ND85J7Js4qn77"/>
                <RegiaoCard name="Academia Smart Fit Corifeu" imagem={academiaSmartFitCorifeu} linkMapa="https://goo.gl/maps/pH81DptJyZfTcE4fA"/>
            </span>
        </RegiaoContainer>
    )
}