
import { Link } from "react-router-dom"
import "./Footer.css"
export const Footer = () => {
  return (
<>  

    <footer className="footer">
    <div className="footer-section">
      <div className="logo">
        <img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1725456548/_97633562-b78e-4cc6-a85d-1c45f218205c_flj3xt.jpg" alt="Logo" />
      </div>
      <div className="contact-info">
        <p><i className="phoneContact"><img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1725471968/icons8-iphone14-pro-32_dmwr8j.png" alt="" /></i> 3442-606679 </p>
        <p><i className="fas fa-envelope"><img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1725472033/icons8-nuevo-post-32_ie5jzw.png" alt="" /></i> nhlfrancia@gmail.com</p>
       
      </div>
    </div>

    <div className="footer-section enlaces">
      <ul>
      <Link className="FooterLink" to="/home">
        Home
      </Link>
      <Link className="FooterLink" to="/marvel">
        Marvel
      </Link>
      <Link className="FooterLink" to="/dc">
        DC
      </Link>
     
      </ul>
    </div>

    <div className="footer-section social-media">
     <img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1725468614/icons8-facebook-48_1_yxullc.png" alt="" />
     <img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1725468626/icons8-instagram-48_1_om9um4.png" alt="" />
    <img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1725468643/icons8-twitterx-48_1_lvdd4m.png" alt="" />
    </div>

  
  </footer>
  <p className="copy">&copy; 2024 Comic World. All rights reserved.</p>   
</>
       
  )
}
