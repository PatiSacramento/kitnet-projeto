import { RegiaoCard } from "./RegiaoCard"
import { RegiaoContainer } from "./style"
// import gostoSim from "/images/regiao/gosto-sim.png"
// import quintalButanta from "/images/regiao/quintal-butanta.jpg"
// import churrascariaTordilho from "/images/regiao/churrascaria-tordilho.jpg"
// import inkaHouse from "/images/regiao/inka-house.jpg"
// import tresPescadores from "/images/regiao/tres-pescadores.jpg"
// import padariaCidadeUniversitaria from "/images/regiao/padaria-cidade-universitaria.jpg"
// import ultrafarma from "/images/regiao/ultrafarma.jpg"
// import supermercadoVioleta from "/images/regiao/supermercado-violeta.jpg"
// import villaVerdePizzas from "/images/regiao/villa-verde-pizzas.jpg"
// import kadaloraPizzaria from "/images/regiao/kadalora-pizzaria.jpg"
// import frutariaJardimRizzo from "/images/regiao/frutaria-jardim-rizzo.jpg"
// import academiaSmartFitCorifeu from "/images/regiao/smart-fit-corifeu.jpg"
// import portariaUsp from "/images/regiao/usp-logo-azul.jpg"

export const Regiao = () => {
  return (
    <RegiaoContainer>
      <h3 id="regiao">A REGIÃO</h3>
      <hr />

      <span>
        <RegiaoCard
          name="USP Portaria de Pedestres"
          imagem={"/images/regiao/gosto-sim.png"}
          linkMapa="https://goo.gl/maps/iHe1vrKaygaxom9A8"
        />
        <RegiaoCard
          name="Restaurante Gosto Sim"
          imagem={"/images/regiao/gosto-sim.png"}
          linkMapa="https://goo.gl/maps/JvB15cUMh9EGGa267"
        />
        <RegiaoCard
          name="Restaurante Quintal Butantã"
          imagem={"/images/regiao/gosto-sim.png"}
          linkMapa="https://goo.gl/maps/2xSvs9cd6wCiLfqn6"
        />
        <RegiaoCard
          name="Churrascaria Tordilho"
          imagem={"/images/regiao/gosto-sim.png"}
          linkMapa="https://goo.gl/maps/4AJfnTrePWtMA5Mj7"
        />
        <RegiaoCard
          name="InkaHouse Butantã"
          imagem={"/images/regiao/gosto-sim.png"}
          linkMapa="https://goo.gl/maps/qTr9h4noxwn2kV4J6"
        />
        <RegiaoCard
          name="Três Pescadores Butantã"
          imagem={"/images/regiao/gosto-sim.png"}
          linkMapa="https://goo.gl/maps/cetVR8Y7YBSqrjRt8"
        />
        <RegiaoCard
          name="Padaria Cidade Universitária"
          imagem={"/images/regiao/gosto-sim.png"}
          linkMapa="https://goo.gl/maps/AgEwFGAb9y8n5K8z6"
        />
        <RegiaoCard
          name="Ultrafarma Vila Indiana"
          imagem={"/images/regiao/gosto-sim.png"}
          linkMapa="https://goo.gl/maps/SHTXQXd2sbNgo2Ki6"
        />
        <RegiaoCard
          name="Supermercado Violeta"
          imagem={"/images/regiao/gosto-sim.png"}
          linkMapa="https://goo.gl/maps/hXMr9jusiJFgcYZYA"
        />
        <RegiaoCard
          name="Villa Verde Pizzas"
          imagem={"/images/regiao/gosto-sim.png"}
          linkMapa="https://goo.gl/maps/tYryRxx2Xwetenr28"
        />
        <RegiaoCard
          name="Kadalora Pizzaria"
          imagem={"/images/regiao/gosto-sim.png"}
          linkMapa="https://goo.gl/maps/W2tFxz2wu2XnyT6E7"
        />
        <RegiaoCard
          name="Frutaria Jardim Rizzo"
          imagem={"/images/regiao/gosto-sim.png"}
          linkMapa="https://goo.gl/maps/Jb3X3u5Gr3n3cypk8"
        />
        <RegiaoCard
          name="Academia Smart Fit Corifeu"
          imagem={"/images/regiao/gosto-sim.png"}
          linkMapa="https://goo.gl/maps/PUHpBiEQYgDXBMU66"
        />
      </span>
    </RegiaoContainer>
  )
}
