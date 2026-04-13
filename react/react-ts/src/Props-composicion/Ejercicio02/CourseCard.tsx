interface tiposCourseCard{
    title:string;
    level:string;
    duration:string;
    textButton:string;
}

function CourseCard({title, level, duration, textButton}:tiposCourseCard) {
    return (
    <article className="course-card">
        <h2>{title}</h2>
        <p>Nivel: {level}</p>
        <p>Duración: {duration}</p>
        <button>{textButton}</button>
    </article>
    );
}
export default CourseCard;