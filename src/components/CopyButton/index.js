import { useState } from 'react';
import './style.css';

export function CopyButton(props) {

    const [copyStatus, setCopyStatus] = useState('Copy to clipboard')

    return (
        <button onClick={props.event, () => setCopyStatus('Copied')} onMouseLeave={setCopyStatus('Copy to clipboard')}>{copyStatus}</button>
    )
}