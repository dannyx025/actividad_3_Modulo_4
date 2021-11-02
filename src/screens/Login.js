import '../assets/css/Login.css'
import logo from '../assets/img/logo.png'
import { login } from '../services/apiCalls'

function Login() {



    const loginProcess = (event) => {

        event.preventDefault()



        const username = document.getElementById('inputUsername')
        const pass = document.getElementById('inputPass')

        switch (username.value) {

            case "":

                if (!username.classList.contains('is-invalid')) username.classList.add('is-invalid')

                break;

            default:

                if (username.classList.contains('is-invalid')) username.classList.remove('is-invalid')

        }

        switch (pass.value) {

            case "":

                if (!pass.classList.contains('is-invalid')) pass.classList.add('is-invalid')

                break;

            default:

                if (pass.classList.contains('is-invalid')) pass.classList.remove('is-invalid')

        }

        if ((pass.value) && (username.value)) {



            login(username.value, pass.value)

                .then(response => {



                    if (response.status >= 200 && response.status <= 299) {

                        localStorage.setItem('id', JSON.stringify(response.data.id))
                        window.location.replace('/')
                    }

                }).catch(err => (console.log(err)))


        }

        document.getElementById('inputUsername').value = ""
        document.getElementById('inputPass').value = ""

    }

    return (

        <div className="container-fluid m-0 p-0 d-flex v-100 h-100 flex-column flex-md-column flex-lg-row flex-xl-row align-items-center justify-content-center" >

            <div className="divLogo d-flex align-items-center justify-content-center">
                <img src={logo} className="logo" alt="logo" />
            </div>

            <div className="divLogin d-flex align-items-center justify-content-center">
                <form id="formLogin" onSubmit={loginProcess}>
                    <div className="container-fluid">
                        <div className="col-12 ">
                            <div className="input-group mb-2">
                                <input type="text" className="form-control ps-2" id="inputUsername" placeholder="USUARIO" name="username" />
                            </div>
                        </div>
                        <div className="col-12">
                            <input type="password" className="form-control mb-2 ps-2" id="inputPass" placeholder="CONTRASEÑA" />
                        </div>

                        <div className="col-12 mt-4">
                            <button type="submit" className="btn btn-primary mt-1">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )








}


export default Login