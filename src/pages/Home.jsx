import { Section } from '../components/Section/Section';
import banner from '../images/phonebook.jpg';

const Home = () => {
  return (
    <Section title="CONTACTS APP WELCOME PAGE">
      <div className="banner">
        <img src={banner} alt="phonebook" />
      </div>
    </Section>
  );
};

export default Home;
