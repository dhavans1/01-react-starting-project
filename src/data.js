import componentsImg from './assets/components.png';
import jsxImg from './assets/jsx-ui.png';
import propsImg from './assets/config.png';
import stateMgmtImg from './assets/state-mgmt.png';

export const coreConcepts = {
  components: {
    title: "Components",
    content: "The core UI building block",
    img: componentsImg
  }, 
  jsx: {
    title: "JSX",
    content: "Return potentially dynamic HTML",
    img: jsxImg
  },
  props: {
    title: "Props",
    content: "Helps components communicate with each other",
    img: propsImg
  },
  state: {
    title: "State",
    content: "React managed data",
    img: stateMgmtImg
  }
};

export const examples = [
  {
    title: "Components",
    content: "Components accept arbitrary inputs called props. They are like function arguments.",
    code: "function Welcome(props) {\n\treturn <h1>Hello, {props.name}</h1>\n}"
  },
  {
    title: "JSX",
    content: "Components accept arbitrary inputs called props. They are like function arguments.",
    code: "function Welcome(props) {\n\treturn <h1>Hello, {props.name}</h1>\n}"
  },
  {
    title: "Props",
    content: "Components accept arbitrary inputs called props. They are like function arguments.",
    code: "function Welcome(props) {\n\treturn <h1>Hello, {props.name}</h1>\n}"
  },
  {
    title: "State",
    content: "Components accept arbitrary inputs called props. They are like function arguments.",
    code: "function Welcome(props) {\n\treturn <h1>Hello, {props.name}</h1>\n}"
  }
];