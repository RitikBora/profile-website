import "../../css/about.css"

export const Skills = () =>
{
    return (
        <div className="pt-20 mx-56">
             <div className="skills grid grid-cols-2">
                <div>
                    <SkillItem skill="ReactJs" percentage={80} />
                    <SkillItem skill="Nodejs" percentage={75} />
                    <SkillItem skill="Nextjs" percentage={60} />
                </div>
                <div>
                    <SkillItem skill="Java" percentage={75} />
                    <SkillItem skill="Sql" percentage={70} />
                    <SkillItem skill="Aws" percentage={50} />
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
