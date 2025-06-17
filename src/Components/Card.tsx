
interface Props  {
    name:string,
    price: number,
    brand: string,
    image: string
}

const Card = ({name,price,brand,image}: Props) => {

  return (
    <div className="mt-4">
        <div className="m-4 border-[1.5px] p-2 w-fit rounded-2xl border-blue-600 ">
            <img src={image} alt="Audi" className="w-70 h-50 object-cover"/>
            <b className="text-green-500">$ {price}</b>
            <h1 className="font-bold">{name}</h1>
            <b>{brand}</b>        
        </div>
    </div>
  )
}

export default Card
