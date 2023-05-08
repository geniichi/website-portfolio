import './welcome.css';
import AboutMe from './AboutMe/AboutMe';
import KnowledgeAndSkills from './KnowledgeAndSkills/KnowledgeAndSkills';
import Introduction from './Introduction/Introduction';
import Aspire from './Aspire/Aspire';

const Welcome = () => {

  return (
    <main class="d-flex flex-column align-items-center">
        <Introduction/>
        <AboutMe/>
        <KnowledgeAndSkills/>
        <Aspire/>
    </main>

  )
}

export default Welcome
