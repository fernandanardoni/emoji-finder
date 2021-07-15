import { useState } from 'react';

export function Todo() {
    const [list, setList] = useState([]);
    const [newItem, setNewItem] = useState("");

    function addItem() {
        const newList = [...list, newItem];

        setList(newList);
        setNewItem("");

        console.log(newList)
    }
    return (
        <div className="list-container">
            <input type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Digite um item para adicionar à lista" />
            <button onClick={addItem}>Adicionar</button>
            <ul>
                {list.map(item => 
                    <li>
                    <input type="checkbox" />
                    {item}
                    </li>
                )}
            </ul>
        </div>
    )
}