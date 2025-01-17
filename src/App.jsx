import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept/CoreConcept';
import TabButton from "./components/TabButton/TabButton";
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
          <section id="examples">
              <h2>Examples</h2>
              <menu>
                  <li><TabButton>Components</TabButton></li>
                  <li><TabButton>JSX</TabButton></li>
                  <li><TabButton>Props</TabButton></li>
                  <li><TabButton>State</TabButton></li>
              </menu>
          </section>
      </main>
    </div>
  );
}

export default App;
