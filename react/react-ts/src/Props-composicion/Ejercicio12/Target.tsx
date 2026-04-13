interface TargetProps {
    title: string;
    description: string;
}

function Target({title, description}: TargetProps) {
    return (
        <div className="section">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default Target;