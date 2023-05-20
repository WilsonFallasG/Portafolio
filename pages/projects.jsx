import Layout from "../components/Layout";

export default function Projects({project}) {
    return (
        <Layout>
            <h1>Proyectos</h1>
            {
                project.map(({ id, name, full_name, avatar_url }) => (

                    <div key={id}>
                        <h3>{id} - {name}</h3>
                        <p>body</p>
                    </div>
                ))
            }

        </Layout>
    )

}

export async function getStaticProps() {
    try {
        const res = await fetch('https://api.github.com/users/WilsonFallasG/repos')
        const project = await res.json()
        return {
            props: { project }
        }

    } catch (error) {
        console.log(error)
    }


}
const ProjectsCarousel = () => {
    const project = useContext(GitHubContext);

    return (
        <div className="carousel">
            {project.map((project) => (
                <div key={project.id} className="project-container">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <a href={project.html_url} target="_blank" rel="noopener noreferrer">

                    </a>
                </div>
            ))}
        </div>
    );
};


 
