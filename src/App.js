import {Header} from './components/Header/index.js';
import {Search} from './components/Search/index.js';
import './App.css';
import { EmojiList } from './components/EmojiList/index.js';


function App() {
  
  return (
    <div className="App">
      <Header title="Emoji Finder" /> 
      <Search />
      <EmojiList />
  
    </div>
  );
}

export default App;
