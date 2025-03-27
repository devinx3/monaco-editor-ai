import React from 'react';
import './App.css';
import AiCodeEditor from './components/CodeEditor';


const App = () => {
  const [code, setCode] = React.useState("")
  return <AiCodeEditor
    category="js"
    path="code.js"
    value={code}
    onChange={setCode}
    onExit={() => { window.close() }}
    beforeMount={() => { }}
  />
}

export default App;
