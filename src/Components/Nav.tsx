

const Nav = () => {
 
  const head = {
    title: "Milele motors",
    imgUrl: "images.jpg"
}

  return (
    <div className="flex gap-2 bg-blue-950 items-center p-2 justify-between fixed top-0 z-50 w-full">
      <div className="flex items-center gap-2">
        <img
         className="rounded-full w-10 h-10 fit-cover"
         src={head.imgUrl}
         alt="logo"
        />
        <h2 className="text-white font-bold">{head.title}</h2>
       </div>
       <div className="flex justify-center gap-2 items-center">
        <button className="p-2 bg-blue-500 rounded cursor-pointer hover:bg-blue-400 font-bold text-white">Sign Up</button>
        <button className="p-2 bg-red-500 rounded cursor-pointer hover:bg-red-400 font-bold text-white">Sign In</button>
       </div>
    </div>
  )
}

export default Nav;  
