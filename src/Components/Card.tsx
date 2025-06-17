

const Card = () => {
    interface card  {
        name:string,
        price: number,
        brand: string,
        image: string
    }
    const cardDetails = {
        name: "Audi",
        Price: 76,
        brand: "Toyota",
        image: "https://images.unsplash.com/photo-1540066019607-e5f69323a8dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXVkaXxlbnwwfHwwfHx8MA%3D%3D"
     }
  return (
    <div>
        <img src={cardDetails.image} alt="Audi" />
        <h1>{cardDetails.name}</h1>
        <b>{cardDetails.Price}</b>
        <p>{cardDetails.brand}</p>
    </div>
  )
}

export default Card
