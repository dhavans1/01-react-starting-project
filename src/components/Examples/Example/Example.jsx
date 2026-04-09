import './Example.css';

export default function Example(example) {
    return (
        <div id="tab-content">
            <h3>{example.title}</h3>
            <p>{example.description}</p>
            <pre><code>{example.code}</code></pre>
        </div>
    );
}