import {Header} from './components/Header/index.js';
import './App.css';
import { EmojiList } from './components/EmojiList/index.js';


function App() {
  
  return (
    <div className="App">
      <Header title="Emoji Finder" /> 
      <EmojiList />
  
    </div>
  );
}

export default App;
