import './CoreConcept.css';

export default function CoreConcept(props) {
  return (
    <div>
      <img src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}

// function CoreConcepts() {
//   const data = {
//     components: {
//       title: "Components",
//       content: "The core UI building block",
//       img: componentsImg
//     }, 
//     jsx: {
//       title: "JSX",
//       content: "Return potentially dynamic HTML",
//       img: jsxImg
//     },
//     props: {
//       title: "Props",
//       content: "Helps components communicate with each other",
//       img: propsImg
//     },
//     state: {
//       title: "State",
//       content: "React managed data",
//       img: stateMgmtImg
//     }
//   };

//   return (
//     <div className="core-concept-container" id="core-concepts">
//       <h2>Core Concepts</h2>
//       <ul>
//         { Object.keys(data).map(key => (
//           <li key={key}>
//             <img src={data[key].img} alt={data[key].title} />
//             <h3>{data[key].title}</h3>
//             <p>{data[key].content}</p>
//           </li>
//         )) }
//       </ul>
//     </div>
//   )
// }

// function CoreConcepts() {
//   const data = [
//     {
//       title: "Components",
//       content: "The core UI building block",
//       img: componentsImg
//     },
//     {
//       title: "JSX",
//       content: "Return potentially dynamic HTML",
//       img: jsxImg
//     },
//     {
//       title: "Props",
//       content: "Helps components communicate with each other",
//       img: propsImg
//     },
//     {
//       title: "State",
//       content: "React managed data",
//       img: stateMgmtImg
//     }
//   ];

//   return (
//     <div className="core-concept-container" id="core-concepts">
//       <h2>Core Concepts</h2>
//       <ul>
//         { data.map(v => (
//           <li>
//             <img src={v.img} alt={v.title} />
//             <h3>{v.title}</h3>
//             <p>{v.content}</p>
//           </li>
//         )) }
//       </ul>
//     </div>
//   )
// }