import { coreConcepts, examples } from './data.js';
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import Example from "./components/Example/Example.jsx";
import { useState } from 'react';
import TabContent from './components/TabContent/TabContent.jsx';

function App() {
  const [exampleIdx, setExampleIdx] = useState(0);
  const [activeBtnIdx, setActiveBtnIdx] = useState(0);

  function onTabSelect(i) {
    setActiveBtnIdx(i);
    setExampleIdx(i);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul> {
            Object.keys(coreConcepts).map(key => (
              <li key={key}>
                <CoreConcept {...coreConcepts[key]} />
              </li>
            ))
          } </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {
              examples.map((example, i) => (
                  <TabContent key={example + i} title={example.title} onSelect={() => onTabSelect(i)} activeBtnIdx={activeBtnIdx} tabIdx={i}></TabContent>            
              ))
            }
          </menu>
          <Example {...examples[exampleIdx]} />
        </section>
      </main>
    </div>
  );
}

export default App;