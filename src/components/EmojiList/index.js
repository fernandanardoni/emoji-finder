import { arrayEmoji } from './emojiData.js';
import './style.css'

export function EmojiList() {
    return (
        <ul>
            {arrayEmoji.map(emoji => 
                <li>{emoji.symbol + emoji.title}</li>
            )}
        </ul>
    )
}