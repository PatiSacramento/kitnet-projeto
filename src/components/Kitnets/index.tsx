import { Card } from "@/components/ui/Card"
import Image from "next/image"

export const Kitnets = () => {
  return (
    <div className="">
      <h3 className="">Nossas Kitnets</h3>
      <div className="">
        {["1", "2", "3", "loft_casa"].map((kit, idx) => (
          <Card key={idx}>
            <Image
              src={`/images/imagens-kitnets/${kit}/main.jpg`}
              alt=""
              width={250}
              height={250}
            />
            Test
          </Card>
        ))}
      </div>
    </div>
  )
}
