import { useState } from "react";

function SampleAccess() {
    const [email, setEmail] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        alert(`Dato enviado: ${email}`);
        setEmail("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email </label>
            <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            />
            <button>Enviar</button>
        </form>
    );
}

export default SampleAccess;