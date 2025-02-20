import Carousel from "@/components/ui/Carousel"
import { getImagesFromFolder } from "@/lib/getImagesFromFolder"
import { ReactNode } from "react"

export const metadata = {
  title: "Kitnets do Elio",
}

type Params = {
  params: { kitName: string }
  children: ReactNode
}

import Kit1 from "./content/abadia-dos-dourados-1.mdx"

const contentMap: Record<string, (args: any) => JSX.Element> = {
  ["abadia-dos-dourados-1"]: Kit1,
}

export async function generateStaticParams() {
  const routeNames = ["abadia-dos-dourados-1"] // Add all route names here
  return routeNames.map((routeName) => ({ routeName }))
}

export default async function Page({ params }: Params) {
  const { kitName } = params
  const images = [
    ...getImagesFromFolder(`images/imagens-kitnets/${kitName}`),
    ...getImagesFromFolder(`images/imagens-kitnets/area-comum`),
  ]
  const ContentComponent = contentMap[kitName]
  return (
    <div className="flex flex-col items-center justify-between gap-8 px-4 py-12 md:flex-row md:px-16">
      <div className="text-center md:w-1/2 md:text-left">
        <ContentComponent />
      </div>

      <div className="w-full md:w-1/2">
        <Carousel images={images} />
      </div>
    </div>
  )
}
