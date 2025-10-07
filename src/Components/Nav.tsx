import Swal from 'sweetalert2'
import { FaShoppingCart, FaTags, FaUserTie } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const Nav = () => {
  const btns = [
    { label: "Buy", icon: <FaShoppingCart />, message: "You do not have enough Money to buy a Car" },
    { label: "Sell", icon: <FaTags />, message: "You do not have a Car to sell" },
    { label: "Hire", icon: <FaUserTie />, message: "You do not have enough Money to Hire a Car" }
  ];

  const handleClick = (label: string, message: string) => {
    Swal.fire({
      title: `${message} 😂`,
      text: `You cannot ${label}`,
      icon: 'warning',
      confirmButtonText: 'Okay',
      background: '#1e293b', 
      color: '#fff'  
    })
  }

  const head = {
    title: "Milele motors",
    imgUrl: "images.jpg"
  }

  const navigate = useNavigate()
  const hendlerror = () => {
    navigate ('/error')
  }

  return (
    <div className="flex gap-2 bg-blue-950 items-center p-2 justify-between fixed top-0 z-50 w-full">
      <div className="flex items-center gap-2">
        <img
          className="rounded-full w-10 h-10 object-cover"
          src={head.imgUrl}
          alt="logo"
        />
        <h2 className="text-white font-bold">{head.title}</h2>
      </div>

      <div className="gap-3 flex text-xl text-white font-bold">
        {btns.map((item, index) => (
          <span
            key={index}
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => handleClick(item.label, item.message)}
          >
            {item.icon}
            <span className="hover:border-b-2 border-amber-200 transition-all">
              {item.label}
            </span>
          </span>
        ))}
      </div>

      <div className="flex justify-center gap-2 items-center">
        <button onClick={hendlerror} className="p-2 bg-blue-500 rounded cursor-pointer hover:bg-blue-400 font-bold text-white">Sign Up</button>
        <button onClick={hendlerror} className="p-2 bg-red-500 rounded cursor-pointer hover:bg-red-400 font-bold text-white">Sign In</button>
      </div>
    </div>
  )
}

export default Nav;
