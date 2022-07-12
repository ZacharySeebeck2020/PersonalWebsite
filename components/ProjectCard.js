export default function ProjectCard({ title, description, color1, color2, href }) {
    return (
        <a href={href}>
            <div style={{ background: `linear-gradient(318deg, ${color1} 0%, ${color2} 100%)` }} className="projectCard">
                <div className="content">
                    <h3 className="title">{title}</h3>
                    <p className="description">{description}</p>
                </div>
            </div>
        </a>


    )
}