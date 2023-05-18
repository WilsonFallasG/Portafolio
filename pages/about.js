import Layout from "../components/Layout"
import { habilidades } from "../perfil"

const About = () =>
    <Layout>
        <div className="col-md-8">
            <div className="card bg-light text-black">
                <div className="card-body text-black">
                    <h1>Experencia personal</h1>
                    <ul>
                        <h3>Universidad de Costa Rica</h3>
                        <h5>Primer semestre del 2017</h5>
                        <p>Horas estudiante en el Recinto de Golfito del curso de Biología General impartido por el
                            profesor Alexander Castillo</p>

                    </ul>
                    <ul>
                        <h3>Deposito Libre Comercial de Golfito</h3>
                        <h5>2017-2018</h5>
                        <p>Trabajador casual del local 30 del Depósito libre comercial de golfito, como vendedor</p>

                    </ul>
                    <ul>
                        <h3>Universidad de Costa Rica</h3>
                        <h5>2018 a 2023</h5>
                        <p>Horas asistentes en la coordinación de docencia en la Universidad de Costa Rica en el
                            Recinto de Golfito con el profesor Luis Carlos Núñez Masís
                        </p>
                        <p>Horas estudiante en dirección de la Sede del Sur</p>
                    </ul>
                    <div className="text-black">
                    <h10>Visitar perfil </h10>
                        <img src="link.png"  width="40" height="20" />
                        

                        <a href="https://www.linkedin.com/in/wilson-fallas-gonzalez-033595276/">linke In</a>

                    </div>


                </div>
            </div>
        </div>
        <div className="row py-2">
            <div className="col-md-4">
                <div className="card bg-light text-black">
                    <div className="card-body">
                        <h1>Habilidades</h1>

                        {
                            habilidades.map(({ habilidad, percentage }, i) => (
                                <div className="py-3" key={i}>
                                    <h5>{habilidad}</h5>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: `${percentage}%` }}>
                                        </div>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </Layout>


export default About