import { Section } from '../components/Section/Section';
import banner from '../images/phonebook.jpg';

const Home = () => {
  return (
    <Section title="Contacts application welcome page">
      <div className="banner">
        <img src={banner} alt="phonebook" />
      </div>
    </Section>
  );
};

export default Home;
