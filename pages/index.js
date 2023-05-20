import Layout from "../components/Layout";
import Projects from "./prueba";
import Contratacion from "./contratacion";
const Index = () => (

    <Layout>

        <header className="row">
            <div className="col-md-12" >
                <div className="card card-body  bg-light text-black">
                    <div className="row">
                        <div className="col-md-3">
                            <img src="Wilson.jpg" alt="" className="img img-fluid" />
                        </div>
                        <div className="col-md-7">
                            <h1>Wilson Fallas González</h1>
                            <br />
                            <h3>Informática Empresarial </h3>

                            <p>
                                Mi nombre es Wilson Fallas Gonzalez, soy estudiante de la Universidad de Costa Rica,
                                graduado de la carrera de Turismo Ecológico, actualmente curso la carrera de Informática empresarial
                            </p>
                            <div className="text-white">
                                <a href="/contratacion">Contratame</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </header>

        <header>

            <Projects />
        </header>


    </Layout>
)


export default Index;

