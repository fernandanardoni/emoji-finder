import { arrayEmoji } from './emojiData.js';
import { Search } from '../Search/index.js';
import { CopyButton } from '../CopyButton/index.js'
import { useState } from 'react';
import './style.css'

export function EmojiList() {
   const [search, setSearch] = useState("");

    
    return (
        <>
            <Search value={search} event={(e) => setSearch(e.target.value)}/>
            <ul>
            {arrayEmoji
            .filter(emoji => emoji.keywords.includes(search))
            .map(emoji => 
                <li>{emoji.symbol + emoji.title}
                <CopyButton/>
                </li>
            )}    
            </ul>               
        </>
    )
}


