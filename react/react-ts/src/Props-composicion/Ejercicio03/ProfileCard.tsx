interface TypesProfileCard{
    name:string;
    role:string;
    city:string;
}

function ProfileCard({ name, role, city }: TypesProfileCard) {
    return (
        <section className="profile-card">
            <h2>{name}</h2>
            <p>{role}</p>
            <p>{city}</p>
        </section>
    );
}

export default ProfileCard;