import Layout from "../components/Layout"
import Link from 'next/link';

const Contratacion = () => {
    return (
        <Layout>
            <div className="container">
                <div className="card bg-secundary py-5 text-auto text-black">


                    <h2>Contrátame</h2>
                    <p>Estas buscando una persona que te ayuda a crear tus proyectos, pues estas con la persona indicada
                        ¡Contáctame y trabajemos juntos!</p>
                    <div className="text-light">
                        <Link href="/contacto ">
                        Contacto
                    </Link>
                    </div>
                </div>
                <div className="card bg-light py-5 text-black text-black">

                    <div className="col-md-4">
                        <div className="card card-body bg-primary text-righ text-dark">
                            <div className="row py-11">
                                <div className="contact_form">
                                    <div className="formulario">
                                        <h1 className="text-center text-dark">Contacteme</h1>
                                        <form action="submeter-formulario.php" method="post">
                                            <div className="form-group">
                                                <label htmlFor="nombre">
                                                    Nombre
                                                    <span className="obligatorio"></span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="introducir_nombre"
                                                    id="nombre"
                                                    required="obligatorio"
                                                    placeholder="Digite tu nombre"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">
                                                    Email
                                                    <span className="obligatorio"></span>
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="introducir_email"
                                                    id="email"
                                                    required="obligatorio"
                                                    placeholder="Escribe tu Email"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="telefone">Teléfono</label>
                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    name="introducir_telefono"
                                                    id="telefono"
                                                    placeholder="Escribe tu teléfono"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="asunto">
                                                    Asunto
                                                    <span className="obligatorio"></span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="introducir_asunto"
                                                    id="assunto"
                                                    required="obligatorio"
                                                    placeholder="Escribe un asunto"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="mensaje">
                                                    Mensaje
                                                    <span className="obligatorio"></span>
                                                </label>
                                                <textarea
                                                    name="introducir_mensaje"
                                                    className="form-control texto_mensaje"
                                                    id="mensaje"
                                                    required="obligatorio"
                                                    placeholder="Ingrese tu comentario..."
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <button type="submit" name="enviar_formulario" id="enviar" className="btn btn-primary">
                                                Enviar
                                            </button>
                                            <p className="aviso">
                                                <span className="Nota"></span>Pronto me pondre en contacto con usted
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>





        </Layout >

    );
};

export default Contratacion;
