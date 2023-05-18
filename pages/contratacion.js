import Link from 'next/link';

const Contratacion= () => {
  return (
    <section className="call-to-action">
      <div className="container">
        <h2>¡Contrátame!</h2>
        <p>¿Tienes un proyecto interesante? ¡Contáctame y trabajemos juntos!</p>
        <Link href="/contacto">
         Contacto
        </Link>
      </div>
    </section>
  );
};

export default Contratacion;
