import { useNavigate } from "react-router-dom"
import { FaChevronLeft } from "react-icons/fa"

const Error = () => {

  const navigate = useNavigate()
  const handleBack = () => {
    navigate('/')
  }

  return (
    <>
      <div className='mt-25 flex flex-col justify-center items-center border-dotted border-2 p-5 w-fit m-auto'>
        <h1 className='font-bold text-black  flex items-center'>404 not found </h1>
        <p className="font-bold text-black  flex items-center">The page has no content 🙁</p>
      </div>
      <button
        onClick={handleBack}
        className="bg-blue-700 p-2 rounded text-white flex items-center m-auto mt-4 cursor-pointer hover:bg-blue-600 "
      >
        <FaChevronLeft /> 
        Back
      </button>
    </>  
  )
}

export default Error
