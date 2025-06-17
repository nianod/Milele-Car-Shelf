
const Footer = () => {
    const footerContents = [
        {label: "About Us", href: "#"},
        {label: "Contact Us", href: "#"},
        {label: "FAQ's", href: "#"},
        {label: "Privacy Policy", href: "#"},
        {label: "Career", href: "#"}
    ]
  return (
    <div>
      <div>
        <p>Useful links</p>
        {footerContents.map((item, index) => 
        <a key={index} href={item.href}>{item.label}</a>
        )}
      </div>
    </div>
  )
}

export default Footer
