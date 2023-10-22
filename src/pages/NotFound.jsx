import { Section } from '../components/Section/Section';

const NotFound = () => {
  return (
    <Section>
      <div className="not-found">
        <span className="not-found--error">404</span>
        <h2>Page not found!</h2>
      </div>
    </Section>
  );
};

export default NotFound;
