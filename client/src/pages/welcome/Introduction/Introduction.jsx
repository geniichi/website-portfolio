import './Introduction.css'
import Formalpfp from '../../../images/formalpfp.png';
import { motion } from 'framer-motion';

const Introduction = () => {
  return (
    <motion.div
          id="welcome-main-container"
          initial={{y: "-100%"}}
          animate={{y: "0%"}}
          transition={{type: 'spring', duration: 1, bounce: 0.3}}
          exit={{ x: window.innerWidth, transition: {duration: 0.7}}}
        >
          <div className="d-flex justify-content-between align-items-center">
            <div class="mr-5">
              <p id="welcome-caption">Hello everyone my name is:</p>
              <h1 id="welcome-title">Walter Arnold Janssen L. Caballero</h1>
              <ul className="list-unstyled d-flex justify-content-around">
                <li className="welcome-link">Artist</li>
                &bull;
                <li className="welcome-link">Programmer</li>
                &bull;
                <li className="welcome-link">Student</li>
              </ul>
            </div>

            <div className="rounded-circle" id="welcome-image-container">
              <div>
                <img src={Formalpfp} alt="formal profile picture"/>
              </div>
            </div>
          </div>
        </motion.div>
  )
}

export default Introduction
