import './AboutMe.css';
import Sleekpfp from '../../../images/sleekpfp.png'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const AboutMe = () => {

  const {ref, inView} = useInView();
  const welcomeImageAnimation = useAnimation();
  const welcomeTextAnimation = useAnimation();


  useEffect(() => {
    console.log("use effect hook, inView = ", inView);
    if(inView){
      welcomeTextAnimation.start({
        opacity: 1,
        x: "0%",
        transition: {
          type: 'spring', duration: 1, bounce: 0.3
        }
      })
      welcomeImageAnimation.start({
        opacity: 1,
        x: "0%",
        transition: {
          type: 'spring', duration: 1, bounce: 0.3
        }
      })
    } else {
      welcomeTextAnimation.start({
        opacity: 0,
        x: "-100%",
        transition: {
          type: 'spring', duration: 0.5, bounce: 0.3
        }
      })
      welcomeImageAnimation.start({
        opacity: 0,
        x: "-100%",
        transition: {
          type: 'spring', duration: 0.5, bounce: 0.3, delay: 0.1
        }
      })
    }
  }, [inView]);

  return (
    <div id="aboutMe-container" class="d-flex justify-content-between align-items-center">
        <motion.img
          className=" mr-5"
          src={Sleekpfp}
          alt="Walter's picture"
          ref={ref}
          animate={welcomeImageAnimation}
          exit={{ x: window.innerWidth, transition: {duration: 0.7}}}
        />
        <div
          className="mb-0"
        >
          <motion.h3
            animate={welcomeTextAnimation}
            ref={ref}
          >About Me</motion.h3>
          <motion.p
            animate={welcomeTextAnimation}
            ref={ref}
          >
            Hi, I'm an aspiring web developer with a strong desire to learn and grow as a successful programmer.
            I've recently completed my education in the KodeGo bootcamp and have started my journey in the exciting
            world of software development. I have experience in programming languages such as Javascript, PHP, and
            a bit of Python, and I'm eager to expand my knowledge in other languages and frameworks. As a web developer,
            I'm enthusiastic about working on a variety of projects and gaining hands-on experience. I understand the
            importance of writing clean, efficient, and maintainable code, and I'm always striving to improve my skills
            and develop my expertise. I'm a good team player and believe in the importance of communication and collaboration
            in project development. I'm also comfortable working independently and taking ownership of my work. I'm open to
            feedback and guidance from more experienced developers and am eager to learn from their expertise. In my free
            time, I enjoy practicing coding challenges and learning new technologies. I'm excited about the endless
            possibilities that software development offers, and I'm eager to contribute my skills to develop innovative
            and impactful solutions.
          </motion.p>
        </div>
    </div>
  )
}

export default AboutMe
