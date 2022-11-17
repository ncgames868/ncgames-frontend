<<<<<<< HEAD
import './Footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';


export const DefaultFooter=()=> {
  return (
    <footer>
      <nav className="Footer-nav">
       <ul className="Footer-links">
          <li><a href="#!"><FaFacebookF size='30px' /></a></li>
          <li><a href="#!"><BsTwitter size='30px' /></a></li>
          <li><a href="#!"><BsInstagram size='30px' /></a></li>
          
        </ul>
       </nav>
    </footer>
   
  );
}
=======
import { FooterContainer, FooterLinks, FooterSection } from './styles'
import './Footer.css'

import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

export const DefaultFooter = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <FooterLinks>
          <li>
            <a href="#!">
              <FaFacebookF size="30px" />
            </a>
          </li>
          <li>
            <a href="#!">
              <BsTwitter size="30px" />
            </a>
          </li>
          <li>
            <a href="#!">
              <BsInstagram size="30px" />
            </a>
          </li>
        </FooterLinks>
      </FooterSection>
    </FooterContainer>
  )
}
>>>>>>> Add: home, login and register