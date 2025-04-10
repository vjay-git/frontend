import { useState } from 'react';
import  {EXAMPLES}  from '../data.js';
import TabButton from './TabButton.jsx';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';
export default function Examples()
{
    const [selectedTopic, setSelectedTopic] = useState();
    
      function handleSelect(topic) {
        setSelectedTopic(topic);
      }
    
      const selectedExample = EXAMPLES[selectedTopic];
      let tabContent;

if (!selectedTopic) {
  tabContent = <p>Please select a topic!</p>;
} else {
  tabContent = (
    <div id="tab-content">
      <h3>{selectedExample.title}</h3>
      <p>{selectedExample.description}</p>
      <pre>
        <code>{selectedExample.code}</code>
      </pre>
    </div>
  );
}
    return (
        <Section title="Examples" id="examples">
            
            <Tabs buttonsContainer = "menu" buttons={<menu>
            
            <TabButton
              isSelected={selectedTopic === 'components'}
              onClick={() => handleSelect('components')}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onClick={() => handleSelect('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onClick={() => handleSelect('props')}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onClick={() => handleSelect('state')}
            >
              State
            </TabButton>
          </menu>
}>{tabContent}</Tabs>
          
         
        </Section>
    );
}