import { useLocation } from "react-router-dom";

const Details = () => {
  const { state } = useLocation();
  const { name, price, brand, image, description } = state || {}

  if (!state) return <p>No car data received.</p>

  return (
    <div className="p-4 mt-15">
      <h2 className="text-2xl font-bold">{name}</h2>
      <img src={image} alt={name} className="w-80 h-60 object-cover my-2 rounded" />
      <p className="text-lg"><strong>Price:</strong> ${price}</p>
      <p className="text-lg"><strong>Brand:</strong> {brand}</p>
      <span className="font-bold">Description :<i className="text-gray-500 font-normal"> {description} </i></span>
      <div className="flex justify-end gap-2">
        <button className="px-2 p-2 bg-emerald-600 rounded cursor-pointer text-white font-semibold hover:bg-green-800 transition duration-500">
          Purchase
        </button>
        <button className="px-2 p-2 bg-green-600 rounded cursor-pointer w-24 text-white font-semibold hover:bg-green-800 transition duration-500">
          Hire
        </button>  
      </div>
    </div>
  )
}

export default Details;
