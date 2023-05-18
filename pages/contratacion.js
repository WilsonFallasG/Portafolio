import Layout from "../components/Layout"
import Link from 'next/link';

const Contratacion = () => {
    return (
        <Layout>
            <div className="container">
                <div className="card bg-light py-5 text-auto text-black"></div>


                <h2>Contrátame</h2>
                <p>Estas buscando una persona que te ayuda a crear tus proyectos, pues estas con la persona indicada
                    ¡Contáctame y trabajemos juntos!</p>
                <Link href="/contacto">
                    Contacto
                </Link>
            </div>

       
                
        </Layout >

    );
};

export default Contratacion;
