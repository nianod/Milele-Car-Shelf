import { FaInstagram, FaTwitter, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  const footerContents = [
    { label: "About Us", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "FAQ's", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Career", href: "#" },
  ]
  const brands = [
    { label: "Maserati" },
    { label: "Mercedez-GLM" },
    { label: "Ferrari" },
    { label: "QX-80" },
    { label: "Range-Rover-2025" },
    { label: "Mc-Laren" },
  ]
  const SocialMeadia = [
    { label: "Instagram", icon: <FaInstagram /> , href: "#" },
    { label: "Twitter", icon: <FaTwitter />, href: "#" },
    { label: "Facebook", icon: <FaFacebook />, href: "#" },
    { label: "Linkedin", icon: <FaLinkedin />, href: "#" },
    { label: "Youtube", icon: <FaYoutube />, href: "#" },
  ]
  return (
    <div className="flex justify-between p-3 bg-blue-950 text-gray-400 mt-10">
      <div className="gap-5">
        <p className="mb-2 font-bold text-xl">Useful links</p>
        {footerContents.map((item, index) => (
          <a key={index} href={item.href}
           className="flex flex-col"
          >
            {item.label}
          </a>
        ))}
      </div>
      <div className="max-w-md">
        <p className="font-bold text-xl mb-2">Top Brands</p>
        <div className="flex flex-wrap gap-2">
            {brands.map((item, index) => (
              <p key={index}>{item.label} |</p>
            ))}        
        </div>
      </div>
      <div className="flex flex-col">
        <p className="mb-2 font-bold text-xl">Get in Touch</p>
        <div className="flex gap-2 text-2xl">
          {SocialMeadia.map((item, index) => 
            <a key={index} href={item.href}>{item.icon}</a>
          )}      
        </div>
      </div>
    </div>
  )
}

export default Footer;
