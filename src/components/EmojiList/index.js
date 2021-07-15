import { arrayEmoji } from './emojiData.js';
import { Search } from '../Search/index.js';
import { useState } from 'react';
import './style.css'

export function EmojiList() {
   
    // arrayEmoji.map(emoji => console.log("palavra chave", emoji.keywords))
    return (
        <>
            <Search/>
            <ul>
               {arrayEmoji.map(emoji => 
                   <li>{emoji.symbol + emoji.title}</li>
               )}
            </ul>
        </>
    )
}