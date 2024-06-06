import "../../css/about.css"

export const Skills = () =>
{
    return (
        <div className="pt-20 mx-56">
             <div className="skills grid grid-cols-2">
                <div>
                    <SkillItem skill="Java" percentage={80} />
                    <SkillItem skill="Android" percentage={75} />
                    <SkillItem skill="SpringBoot" percentage={70} />
                </div>
                <div>
                    <SkillItem skill="Sql" percentage={70} />
                    <SkillItem skill="Dbms" percentage={70} />
                    <SkillItem skill="Project Managment" percentage={80} />
                </div>
            </div>
        </div>
    )
}

const SkillItem = ({ skill , percentage} : {skill : string , percentage : number}) => (
  <div className="skill-item">
    <p>{skill}</p>
    <div className="progress box-shadow-custom-xl">
      <div className="progress-bar" style={{ width: `calc(${percentage}% - 14px)` }}>
        <span>{percentage}%</span>
      </div>
    </div>
  </div>
);
