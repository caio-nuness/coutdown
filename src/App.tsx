import { Container } from './components/Container';
import { Contentleft } from './components/ContentLeft';
import { ContentRight } from './components/ContentRight';



import './assets/styles/styles.css';

function App() {
  return (
    <Container>
      <div className='content-main'>
        <Contentleft/>
        <ContentRight/>
      </div>
    </Container>
  );
}

export default App;
