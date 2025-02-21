import React from 'react';

import { HomepageCard } from '@/components/HomepageCard';
import { AppProps } from 'next/app';
import { FC } from 'react';

const MyApp: FC<AppProps> = () => {
  return (
    <main className="overflow-hidden w-[95%] mx-auto mt-[4rem] flex flex-col gap-4">
      <div id="nossas-kitnets" />
      <div className="flex flex-col h-[35rem] gap-4 overflow-x-auto pt-8">
        <h3 className="font-bold">Nossas Kitnets</h3>
        <hr className="w-full" />
        <HomepageCard
          items={[
            {
              name: 'abadia-dos-dourados-1',
              imagem: `/images/imagens-kitnets/abadia-dos-dourados-1/main.jpg`,
              url: `/kitnets/abadia-dos-dourados-1`,
            },
            {
              name: 'abadia-dos-dourados-2',
              imagem: `/images/imagens-kitnets/abadia-dos-dourados-2/main.jpg`,
              url: `/kitnets/abadia-dos-dourados-2`,
            },
            {
              name: 'abadia-dos-dourados-3',
              imagem: `/images/imagens-kitnets/abadia-dos-dourados-3/main.jpg`,
              url: `/kitnets/abadia-dos-dourados-3`,
            },
            {
              name: 'loft-rua-corinto',
              imagem: `/images/imagens-kitnets/loft-rua-corinto/main.jpg`,
              url: `/kitnets/loft-rua-corinto`,
            },
          ]}
        />
      </div>
      <div id="regiao" />
      <div className="flex flex-col h-[35rem] gap-4 overflow-x-auto pt-8">
        <h3 className="font-bold">A Região</h3>
        <hr className="w-full" />
        <HomepageCard
          items={[
            {
              name: 'USP Portaria de Pedestres',
              imagem: `/images/regiao/usp-logo-azul.jpg`,
              url: 'https://goo.gl/maps/iHe1vrKaygaxom9A8',
            },
            {
              name: 'Restaurante Gosto Sim',
              imagem: `/images/regiao/gosto-sim.png`,
              url: 'https://goo.gl/maps/JvB15cUMh9EGGa267',
            },
            {
              name: 'Restaurante Quintal Butantã',
              imagem: `/images/regiao/quintal-butanta.jpg`,
              url: 'https://goo.gl/maps/2xSvs9cd6wCiLfqn6',
            },
            {
              name: 'Churrascaria Tordilho',
              imagem: `/images/regiao/churrascaria-tordilho.jpg`,
              url: 'https://goo.gl/maps/4AJfnTrePWtMA5Mj7',
            },
            {
              name: 'InkaHouse Butantã',
              imagem: `/images/regiao/inka-house.jpg`,
              url: 'https://goo.gl/maps/qTr9h4noxwn2kV4J6',
            },
            {
              name: 'Três Pescadores Butantã',
              imagem: `/images/regiao/tres-pescadores.jpg`,
              url: 'https://goo.gl/maps/cetVR8Y7YBSqrjRt8',
            },
            {
              name: 'Padaria Cidade Universitária',
              imagem: `/images/regiao/padaria-cidade-universitaria.jpg`,
              url: 'https://goo.gl/maps/AgEwFGAb9y8n5K8z6',
            },
            {
              name: 'Ultrafarma Vila Indiana',
              imagem: `/images/regiao/ultrafarma.jpg`,
              url: 'https://goo.gl/maps/SHTXQXd2sbNgo2Ki6',
            },
            {
              name: 'Supermercado Violeta',
              imagem: `/images/regiao/supermercado-violeta.jpg`,
              url: 'https://goo.gl/maps/hXMr9jusiJFgcYZYA',
            },
            {
              name: 'Villa Verde Pizzas',
              imagem: `/images/regiao/villa-verde-pizzas.jpg`,
              url: 'https://goo.gl/maps/tYryRxx2Xwetenr28',
            },
            {
              name: 'Kadalora Pizzaria',
              imagem: `/images/regiao/kadalora-pizzaria.jpg`,
              url: 'https://goo.gl/maps/W2tFxz2wu2XnyT6E7',
            },
            {
              name: 'Frutaria Jardim Rizzo',
              imagem: `/images/regiao/frutaria-jardim-rizzo.jpg`,
              url: 'https://goo.gl/maps/Jb3X3u5Gr3n3cypk8',
            },
            {
              name: 'Academia Smart Fit Corifeu',
              imagem: `/images/regiao/smart-fit-corifeu.jpg`,
              url: 'https://goo.gl/maps/PUHpBiEQYgDXBMU66',
            },
          ]}
        />
      </div>
    </main>
  );
};

export default MyApp;
