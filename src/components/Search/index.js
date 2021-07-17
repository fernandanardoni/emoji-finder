import { arrayEmoji } from '../EmojiList/emojiData.js';
import './style.css';


export function Search(props) {
    return (
        <input value={props.value} onChange={props.event} className="search" type="search" placeholder="Search emoji" />
    )
}