import { useState } from "react";
import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';

export default function Header() {     
  const [paraWordIndex, setParaWordIndex] = useState(0);

  setTimeout(() => {
    setParaWordIndex((paraWordIndex + 1) % 3)
  }, 1000);

  const paraWords = ["Fundamental", "Core", "Advanced"];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {paraWords[paraWordIndex]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}