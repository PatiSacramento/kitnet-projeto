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
import KitnetNavigationButton from '@/components/kitnet-navigation-button';

const contentMap: Record<string, { content: (args: any) => JSX.Element; name: string }> = {
  ['abadia-dos-dourados-1']: { content: Kit1, name: 'Kitnet Abadia dos Dourados 1' },
  ['abadia-dos-dourados-2']: { content: Kit2, name: 'Kitnet Abadia dos Dourados 2' },
  ['abadia-dos-dourados-3']: { content: Kit3, name: 'Kitnet Abadia dos Dourados 3' },
  ['loft-rua-corinto']: { content: Kit4, name: 'Loft Rua Corinto' },
};

const routeNames = Object.keys(contentMap);

export async function generateStaticParams() {
  return routeNames.map((routeName) => ({ routeName }));
}

export default async function Page({ params }: Params) {
  const { kitName: kitKey } = params;

  const images = [
    ...getImagesFromFolder(`images/imagens-kitnets/${kitKey}`),
    ...getImagesFromFolder(`images/imagens-kitnets/area-comum`),
  ];
  const ContentComponent = contentMap[kitKey].content;

  return (
    <>
      <KitnetNavigationButton kitKey={kitKey} allKits={contentMap} />

      <div className="flex flex-col w-[95%] mx-auto lg:w-[85%] items-center justify-between gap-8 px-4 py-12 md:flex-row md:px-16">
        <div className="text-left self-start ml-6 lg:ml-10 mt-6 lg:mt-20 md:w-1/2 md:text-left ml-10">
          <ContentComponent />
        </div>

        <div className="w-full md:w-1/2">
          <Carousel images={images} />
        </div>
      </div>
    </>
  );
}
