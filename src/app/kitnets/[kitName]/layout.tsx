import Carousel from '@/components/ui/Carousel';
import { getImagesFromFolder } from '@/lib/getImagesFromFolder';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Kitnets do Elio',
};

type Params = {
  params: { kitName: string };
  children: ReactNode;
};

import Kit1 from './content/abadia-dos-dourados-1.mdx';
import Kit2 from './content/abadia-dos-dourados-2.mdx';
import Kit3 from './content/abadia-dos-dourados-3.mdx';
import Kit4 from './content/loft-rua-corinto.mdx';
import KitnetNavigationButton from '@/components/KitnetNavigationButton';

const contentMap: Record<string, (args: any) => JSX.Element> = {
  ['abadia-dos-dourados-1']: Kit1,
  ['abadia-dos-dourados-2']: Kit2,
  ['abadia-dos-dourados-3']: Kit3,
  ['loft-rua-corinto']: Kit4,
};
const routeNames = [
  'abadia-dos-dourados-1',
  'abadia-dos-dourados-2',
  'abadia-dos-dourados-3',
  'loft-rua-corinto',
];
export async function generateStaticParams() {
  return routeNames.map((routeName) => ({ routeName }));
}

export default async function Page({ params }: Params) {
  const { kitName } = params;

  const images = [
    ...getImagesFromFolder(`images/imagens-kitnets/${kitName}`),
    ...getImagesFromFolder(`images/imagens-kitnets/area-comum`),
  ];
  const ContentComponent = contentMap[kitName];

  return (
    <>
      <KitnetNavigationButton kitName={kitName} routeNames={routeNames} />

      <div className="flex flex-col w-[95%] mx-auto lg:w-[85%] items-center justify-between gap-8 px-4 py-12 md:flex-row md:px-16">
        <div className="text-left self-start ml-20 mt-20 md:w-1/2 md:text-left ml-10">
          <ContentComponent />
        </div>

        <div className="w-full md:w-1/2">
          <Carousel images={images} />
        </div>
      </div>
    </>
  );
}
