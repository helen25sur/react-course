import reactImage from './assets/react-core-concepts.png';
import {CORE_CONCEPTS} from './data';

const reactDescription = ['Fundamental', 'Crucial', 'Core'];
function genRandomUnt(max) {
    return Math.floor(Math.random() * (max +  1));
}

function Header() {
    const description = reactDescription[genRandomUnt(reactDescription.length-1)];
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
          {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}

function CoreComponent({title, description, image}) {
    return (
        <>
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </>
    )
}

function App() {
  return (
    <div>
      <Header />
      <main>
          <section id="core-concepts">
            <h2>Core Concepts</h2>
              <ul>
                  {CORE_CONCEPTS.map(item => <li><CoreComponent {...item} /></li>)}
              </ul>
          </section>
      </main>
    </div>
  );
}

export default App;
