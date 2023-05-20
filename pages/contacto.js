import Layout from "../components/Layout"
const Contacto = () =>
  <Layout>
    <div className="container">
      <div className="card bg-light py-5 text-auto text-black">
        <div className="contactos">
          <h1>Contacto</h1>
          <p>Teléfono: 85604506</p>
          <p>Correo: wilsonfallasg@gmail.com</p>
        </div>
        <div className="redes-sociales text-black">
          <h1>Redes Sociales</h1>
          <ul>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100011850427176" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/wilson-fallas-gonzalez-033595276/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/wilsonfallasg/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>


export default Contacto