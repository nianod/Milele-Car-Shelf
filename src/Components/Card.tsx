import { useNavigate } from "react-router-dom"

interface Props  {
    name:string,
    price: number,
    brand: string,
    image: string,
    description: string
}

const Card = ({name,price,brand,image, description}: Props) => {

    const navigate = useNavigate()

    const seeDetails = (e: React.FormEvent) => {
        e.preventDefault()
        navigate('/details', {state: { name, price, brand, image, description } })
    }

  return (
    <div className="mt-4">
        <div className="m-2 border-[1.5px] p-2 w-fit rounded-2xl border-gray-400">
            <img src={image} alt="Audi" className="w-70 h-40 object-cover"/>
            <b className="text-green-500">$ {price}</b>
            <h1 className="font-bold">{name}</h1>
            <span className="flex justify-between">
                <b><span className="text-gray-500">Brand: </span>{brand}</b>
                <button onClick={seeDetails} className="bg-blue-800 text-white rounded-xl cursor-pointer p-[1.5px] hover:bg-blue-700">View Details</button>
            </span>
        </div>
    </div>
  )
}

export default Card
