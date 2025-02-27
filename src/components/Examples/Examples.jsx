import { useState } from 'react';

import { EXAMPLES } from "../../data";
import TabButton from "../TabButton/TabButton";
import Section from '../Section';
import Tabs from '../Tabs';

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState('');

  function handleSelect(selectedBtn) {
    // selectedBtn => 'components', 'jsx', 'props' or 'state'
    setSelectedTopic(selectedBtn);
  }
  return (
    <Section id="examples" title="Examples">
      <Tabs
        ButtonsContainer="menu"
        buttons={
          <>
            <li><TabButton isSelected={selectedTopic === 'components'}
              onClick={() => handleSelect('components')}>Components</TabButton></li>
            <li><TabButton isSelected={selectedTopic === 'jsx'}
              onClick={() => handleSelect('jsx')}>JSX</TabButton></li>
            <li><TabButton isSelected={selectedTopic === 'props'}
              onClick={() => handleSelect('props')}>Props</TabButton></li>
            <li><TabButton isSelected={selectedTopic === 'state'}
              onClick={() => handleSelect('state')}>State</TabButton></li>
          </>
        }>
        {!selectedTopic ? <p>Please select a topic.</p> : <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div>}
      </Tabs>

    </Section>
  )
}