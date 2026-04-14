import { useState } from "react";

function Sample2() {

    const [value, setValue] = useState(0);
    
    function handleClick() {
        setValue(valor => valor + 1);
        setValue(valor => valor + 1);
        setValue(valor => valor + 1);
    }

return <button onClick={handleClick}>{value}</button>;
}

export default Sample2;