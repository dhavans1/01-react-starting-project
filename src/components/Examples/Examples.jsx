import { useState } from 'react';

import { examples } from '../../data.js';
import Example from './Example/Example.jsx';
import TabContent from './TabContent/TabContent.jsx';
import Section from '../section.jsx';

export default function Examples() {
    const [exampleIdx, setExampleIdx] = useState(0);
    const [activeBtnIdx, setActiveBtnIdx] = useState(0);

    function onTabSelect(i) {
        setActiveBtnIdx(i);
        setExampleIdx(i);
    }

    return (
        <Section 
            id="examples"
            title="Examples"
        >
          <menu>
            {examples.map((example, i) => (
                <TabContent
                    key={example + i}
                    title={example.title}
                    onClick={() => onTabSelect(i)}
                    activeBtnIdx={activeBtnIdx}
                    tabIdx={i}
                    ButtonsContainer="li">
                </TabContent>            
            ))}
          </menu>
          <Example {...examples[exampleIdx]} />
        </Section>
    );
}