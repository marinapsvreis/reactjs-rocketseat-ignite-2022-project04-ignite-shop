import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import Image from "next/image"
import { useRouter } from "next/router"
export default function Product(){
    const { query } = useRouter()
    return (
        <ProductContainer>
            <ImageContainer>
                {/* <Image src={}></Image> */}
            </ImageContainer>

            <ProductDetails>
                <h1>Camiseta X</h1>
                <span>R$ 79,90</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quis, excepturi fugit blanditiis totam itaque, minima necessitatibus eaque doloremque tempora alias, repellendus magni consequatur ad nihil voluptate eligendi veritatis nisi.
                </p>

                <button>Comprar agora</button>
            </ProductDetails>
        </ProductContainer>
    )
}