import "../assets/css/About.css"
import logo from '../assets/img/logo.png'
import { Link } from 'react-router-dom'
function About() {



    return (

        <div className="container-fluid d-flex flex-column align-items-center justify-content-center about">

            <img src={logo} className="logo" alt="logo" />
            <h1>Actividad 3</h1>
            <h2>Módulo 4 - Front-end Frameworks</h2>
            <h3>Profesor: Julio García</h3>
            <h3>Alumno: Danny Barrantes Moya</h3>
            <Link to='/' className="exit"><i className="large material-icons exitIcon">keyboard_capslock</i></Link>

        </div>

    )

}

export default About
