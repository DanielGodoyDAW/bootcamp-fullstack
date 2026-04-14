import { useState } from "react";

function ItemCounter() {
    const [item, setItem] = useState({
        label: "Clicks registrados",
        count: 0
    });

    const updateItem = () => {
        setItem(prevItem => ({
            ...prevItem,
            count: prevItem.count + 1
        }));
    };

    return (
        <div>
            <h3>{item.label}</h3>
            <p>Total: {item.count}</p>
            <button onClick={updateItem}>Aumentar cuenta</button>
        </div>
    );
}

export default ItemCounter;