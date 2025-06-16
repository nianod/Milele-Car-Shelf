

const Nav = () => {
 
  const head = {
    title: "Milele motors",
    imgUrl: "images.jpg"
}

  return (
    <div>
      <div className="flex gap-3 items-center">
        <img
         className="rounded-full w-15 h-15 fit-cover"
         src={head.imgUrl}
         alt="logo"
        />
        <h2>{head.title}</h2>
       </div>
    </div>
  );
};

export default Nav;  
