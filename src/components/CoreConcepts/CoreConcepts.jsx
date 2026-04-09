import { coreConcepts } from '../../data.js';
import Section from '../section.jsx';

import CoreConcept from './CoreConcept/CoreConcept.jsx';

export default function CoreConcepts() {
    return (
        <Section
            id="core-concepts"
            title="Core Concepts"
        >
            <ul> {Object.keys(coreConcepts).map(key => (
                <li key={key}>
                <CoreConcept {...coreConcepts[key]} />
                </li>
            ))} 
            </ul>
        </Section>
    );
}