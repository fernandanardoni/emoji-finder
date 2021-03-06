import { useState } from 'react';
import './style.css';

export function CopyButton(props) {

    const [copyStatus, setCopyStatus] = useState('Copy to clipboard')

    return (
            <button 
            onClick={() => {
                navigator.clipboard.writeText(props.content)
                setCopyStatus('Copied')
            }}
            >{copyStatus}</button>
    )
}
