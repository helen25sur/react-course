import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept/CoreConcept';
import {CORE_CONCEPTS} from './data';

function App() {
  return (
    <div>
      <Header />
      <main>
          <section id="core-concepts">
            <h2>Core Concepts</h2>
              <ul>
                  {CORE_CONCEPTS.map(item => <li><CoreConcept {...item} /></li>)}
              </ul>
          </section>
      </main>
    </div>
  );
}

export default App;
