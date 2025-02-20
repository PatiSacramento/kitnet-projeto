import "bootstrap/dist/css/bootstrap.css"
import { Regiao } from "@/components"
import { Kitnets } from "@/components/Kitnets"
import { Sobre } from "@/components/Sobre"
import Image from "next/image"

import { AppProps } from "next/app"
import { Card } from "@/components/ui/Card"

const MyApp: React.FC<AppProps> = () => {
  return (
    <main className="flex flex-col overflow-hidden">
      <div className="">
        <h3 className="">Nossas Kitnets</h3>
        <div className="">
          {[
            "abadia-dos-dourados-1",
            "abadia-dos-dourados-2",
            "abadia-dos-dourados-3",
            "loft-rua-corinto",
          ].map((kit, idx) => (
            <a href={`/kitnets/${kit}`} key={idx}>
              <Card>
                <Image
                  src={`/images/imagens-kitnets/${kit}/main.jpg`}
                  alt=""
                  width={250}
                  height={250}
                />
                Test
              </Card>
            </a>
          ))}
        </div>
      </div>
      {/* <Regiao />
      <Sobre /> */}
    </main>
  )
}

export default MyApp
