import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ExperienceCard({name, date, content}) {
    return (
        <div className="experienceCard">
            <div className="nameDate">
                <FontAwesomeIcon className="icon" icon={faArrowRight}/>
                <h3 className="employerName">{name}</h3>
                <span className="date">{date}</span>
            </div>

            <p className="content">{content}</p>
        </div>
    )
}