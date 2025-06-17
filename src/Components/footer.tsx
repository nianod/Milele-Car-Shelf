
const Footer = () => {
    const footerContents = [
        {label: "About Us", href: "#"},
        {label: "Contact Us", href: "#"},
        {label: "FAQ's", href: "#"},
        {label: "Privacy Policy", href: "#"},
        {label: "Career", href: "#"}
    ]
    const brands = [
        {label: "Maserati"},
        {label: "Mercedez-GLM"},
        {label: "Ferrari"},
        {label: "QX-80"},
        {label: "Range-Rover-2025"},
        {label: "Mc-Laren"}
    ]
  return (
    <div>
      <div>
        <p>Useful links</p>
        {footerContents.map((item, index) => 
        <a key={index} href={item.href}>{item.label}</a>
        )}
      </div>
      <div>
        {brands.map((item, index) => 
         <p key={index}>{item.label}|</p>
        )}
      </div>
    </div>
  )
}

export default Footer
