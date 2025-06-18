import { FaSearch } from "react-icons/fa";
import Footer from "../Components/footer";
import { useState } from "react"
import Card from "../Components/Card";
import { cardDetails } from '../Components/Carlist'

const Home = () => {

  //const [searchTerm, setSearchTerm] = useState('')
  const [warning, setWarning] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const handleApi = (e: React.FormEvent) => {
    e.preventDefault()

    if(inputValue.trim() === "") {
      setWarning(true)
      setTimeout(() => {
        setWarning(false)
      }, 4000);
      return
    }
    setWarning(false)
    // getCars()
  }
  
    // const getCars = async () => {
    //   try {
    //     const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${searchTerm}?format=json`)
    //       if(!response.ok) {
    //         throw new Error ("Not found")
    //       }
    //       const data = await response.json()
    //       console.log(data.results)
    //   } catch(err) {
    //     console.log("there was an error fetching the data")
    //   }
    // }    


  return (
    <div className="mt-15">
      <h2 className="font-bold text-xl m-2">Cars for Hire & Sale</h2>
      <div className="border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded w-[50%] flex justify-between m-auto p-1">
        <input
          className="outline-none w-full"
          type="text"
          placeholder="Search A Car By Brand or Model"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={handleApi}
          className="p-2 bg-gray-400 rounded cursor-pointer flex items-center gap-2 text-white transition-all duration-300 ease-in-out hover:bg-amber-500"
        >
          <FaSearch />
          Search
        </button>
      </div>
      {warning && (
        <p className="text-red-500 text-center">Please enter a car brand</p>
      )}
      <div className="flex flex-wrap justify-center w-full ">
        {cardDetails.map((car, index) => (
          <Card 
            key={index}
            name={car.name}
            price={car.price}
            brand={car.brand}
            image={car.image}    
            description= {car.description}        
          />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Home;
