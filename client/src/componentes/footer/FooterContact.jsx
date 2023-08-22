import "./FooterContact.css";
import WhatsAppIcon from "../.././assets/images/Whatsapp.png";
import FacebookIcon from "../.././assets/images/face.png";
import InstagramIcon from "../.././assets/images/Insta.png";
import Newsletter from "../newsletter/newsletter";
import { useDispatch, useSelector } from "react-redux";
import { getAllInformation } from "../../redux/Actions";
import { useEffect } from "react";

const FooterContact = () => {
  const information = useSelector((state) => state.information);
  const dispatch=useDispatch()
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getAllInformation());
      } catch (error) {
        
        console.error("Error al obtener la información:", error);
      }
    };
  
    fetchData(); 
  }, [dispatch]);

 

  return (
    <footer className="footerC">
      <div className="moving-background"></div>
      <div className="brand-info-contact">
        <h3 className="contact-us">Contactanos</h3>
        <p>Email: {information.email}</p>
        <p>Teléfono: {information.phone}</p>
        <div className="social-icons">
          <a
            href={information.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={WhatsAppIcon} alt="WhatsApp" />
          </a>
          <a
            href={information.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={FacebookIcon} alt="Facebook" />
          </a>
          <a
            href={information.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={InstagramIcon} alt="Instagram" />
          </a>
        </div>
        <Newsletter />
      </div>
    </footer>
  );
};

export default FooterContact;
