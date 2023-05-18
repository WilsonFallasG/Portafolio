import Layout from "../components/Layout"


const GitHub = ({user}) => {

    return(
    <Layout>
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <div className="card card-body text-center">
                    <h1>Mi GitHub</h1>

                    <h5>
                       Usuario= {user.login}
                    </h5>
                    <h5>
                        Repositorios= {user.public_repos}
                    </h5>                     

                    <img src={user.avatar_url} alt="" />
                    


                </div>

            </div>


        </div>

    </Layout>)
    }
export async function getServerSideProps()
{
   const res= await fetch('https://api.github.com/users/WilsonFallasG')
   
   const data= await res.json();

   

   return{
    props:{
        user:data

    }
   }
   
}

export default GitHub;