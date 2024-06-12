export const Portfolio =  () =>
{

    const projects = [
  { name: 'Video meet platform', link: 'https://ritikboradev.com/zoom' , status: "Click to view more details"},
  { name: 'Blog website', link: 'https://ritikboradev.com/medium' , status: "Click to view more details"},
  { name: 'Paytm clone', link: 'https://ritikboradev.com/paytm' , status: "Click to view more details" },
  { name: 'Coursera clone', link: 'https://ritikboradev.com/coursera/users'  , status: "Click to view more details"},
  { name: 'Chess multiplayer', link: '' , status: "Comming soon!" },
  { name: 'Chatting portal', link: '' ,status: "Comming soon!" },


];

    return (
        <div className="flex justify-center items-center mx-20 my-10">
            <div className="max-w-4xl mx-auto  ">
                <h1 className="text-2xl font-bold text-center mb-2" style={{color : "#ec9412"}}>PORTFOLIO</h1>
                <h1 className="text-4xl font-bold text-center mb-8">Latest work</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-20">
                    {projects.map((project, index) => (
                    <a
                        key={index}
                        href={project.link}
                        className={`block p-6 ${project.link === "" ? "bg-neutral-200" : "bg-neutral-300"} rounded-lg shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className="text-2xl font-semibold text-gray-900 mb-2">{project.name}</h2>
                        <p className="text-gray-600">{project.status}</p>
                    </a>
                    ))}
                </div>
            </div>
        </div>
    )
}