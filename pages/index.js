import Layout from "../components/Layout";
import GitHub from "./github";
import { habilidades } from "../perfil";
import Link from 'next/link';
import Contratacion from "./contratacion";
const Index = () => (

    <Layout>

        <header className="row">
            <div className="col-md-12" >
                <div className="card card-body bg-primary text-black">
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
            <div className="row">
                <div className="col-md-12">
                    <div className="card.card-bady bg-secundary text-black">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="text-center">  Seccion de Proyectos Github</h1>

                            

                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <img src="Patrones_diseno.jpg" alt="" className="img img-fluid" />
                                    <div className="card-body">
                                        <a href=""></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    </Layout>
)


export default Index;

