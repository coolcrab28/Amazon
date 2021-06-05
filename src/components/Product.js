import Image from "next/image";
import { useState } from "react";
import {StarIcon} from "@heroicons/react/solid";
import Currency from "react-currency-formatter"

function Product({ id, title, price, description,category, image}) {
    const [rating] = useState(
        Math.floor(Math.random() * 5)
    );
    return (
        <div className="relative flex flex-col m-5 bg-white z-30">
            <p>{id}</p>
            <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
            <Image src={image} height={200} width={200} objectFit="contain" />
            <h4>{title}</h4>
            <div className="flex">
                {Array(rating)
                .fill()
                .map((_,i)=>(
                    <StarIcon className="h-5" />
))}
            </div>
            <p>{description}</p>
            <button>Add to Basket</button>
        </div>
    )
}

export default Product