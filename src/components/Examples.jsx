import { useState } from 'react';
import  {EXAMPLES}  from '../data.js';
import TabButton from './TabButton.jsx';
import Section from './Section.jsx';
export default function Examples()
{
    const [selectedTopic, setSelectedTopic] = useState();
    
      function handleSelect(topic) {
        setSelectedTopic(topic);
      }
    
      const selectedExample = EXAMPLES[selectedTopic];
    return (
        <Section title="Examples" id="examples">
          <menu>
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

          {!selectedTopic ? (
            <p>Please select a topic!</p>
          ) : (
            <div id="tab-content">
              <h3>{selectedExample.title}</h3>
              <p>{selectedExample.description}</p>
              <pre>
                <code>{selectedExample.code}</code>
              </pre>
            </div>
          )}
        </Section>
    );
}