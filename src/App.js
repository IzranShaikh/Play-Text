import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import { useState } from 'react';
//https://www.youtube.com/watch?v=x9p-4QGh-OI&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&index=22
function App() {

  const [mode, setMode] = useState('light') //dark mode false by default

  const toggleMode = () => {
    (mode === 'light') ? setMode('dark') : setMode('light');
    (mode === 'light') ? document.body.style.backgroundColor = 'black' : document.body.style.backgroundColor = 'white';
    setInterval(() => {
      document.title = 'PLAY'
    }, 1500);
    setInterval(() => {
      document.title = 'TEXT'
    }, 2000);
  }

  return (
    <>
      <Navbar title="PLAY-TEXT" mode={mode} toggleMode={toggleMode}/>
      <TextArea label="Enter your text below" mode={mode}/>
    </>
  );
}

export default App;
