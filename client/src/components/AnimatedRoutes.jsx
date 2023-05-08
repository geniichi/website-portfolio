import { Routes, Route, useLocation } from 'react-router-dom';
import Welcome from '../pages/welcome/welcome';
// import Sample from './components/sample';
import { AnimatePresence } from 'framer-motion'
import ContactMe from '../pages/contactMe/ContactMe';
import Project from '../pages/MyProjects/MyProject';

const AnimatedRoutes = () => {

    const location = useLocation();

  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Welcome/>}/>
            <Route path="/projects" element={<Project/>}/>
            <Route path="/contact" element={<ContactMe/>}/>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
