import {useState} from 'react';

import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept/CoreConcept';
import TabButton from './components/TabButton/TabButton';
import {CORE_CONCEPTS, EXAMPLES} from './data';

function App() {
    const [selectedTopic, setSelectedTopic] = useState('');

    function handleSelect(selectedBtn) {
        // selectedBtn => 'components', 'jsx', 'props' or 'state'
        setSelectedTopic(selectedBtn);
    }

    return (
        <>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {CORE_CONCEPTS.map((item, idx) => <li key={idx}><CoreConcept {...item} /></li>)}
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <li><TabButton isSelected={selectedTopic === 'components'}
                                       onSelect={() => handleSelect('components')}>Components</TabButton></li>
                        <li><TabButton isSelected={selectedTopic === 'jsx'}
                                       onSelect={() => handleSelect('jsx')}>JSX</TabButton></li>
                        <li><TabButton isSelected={selectedTopic === 'props'}
                                       onSelect={() => handleSelect('props')}>Props</TabButton></li>
                        <li><TabButton isSelected={selectedTopic === 'state'}
                                       onSelect={() => handleSelect('state')}>State</TabButton></li>
                    </menu>
                    {!selectedTopic ? <p>Please select a topic.</p> : <div id="tab-content">
                        <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>
                      <code>
                         {EXAMPLES[selectedTopic].code}
                      </code>
                  </pre>
                    </div>}

                </section>
            </main>
        </>
    );
}

export default App;
