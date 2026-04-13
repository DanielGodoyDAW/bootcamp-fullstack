function SectionBlock({title,children}){
    return (
        <section className="section-bloc">
            <h2>{title}</h2>
            {children}
        </section>
    );
}
export default SectionBlock;