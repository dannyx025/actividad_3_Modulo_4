import axios from "axios";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const http = axios.create({

    baseURL: 'https://three-points.herokuapp.com/api',
    withCredentials: true,
  
})

http.interceptors.response.use(

    (response) => response,

    (error) => {
     

        var errorCode = "Error no handled on the script \n Possible CORS error"
        var message = ""

        if(error.response !== undefined){

          errorCode = error.response.status

          if (errorCode >= 400 && errorCode <= 499) {

            switch (errorCode) {

              case 400:
                message = "Usuario o Contraseña incorrectos, inténtelo nuevamente"
                break

              case 401:
                message = "Usuario no autorizado, inténtelo nuevamente"
                localStorage.removeItem('id')
                break

              case 404:
                message = "Uri no encontrada"
                break

              default:
                message = "Se generó un error en la solicitud"


            }


          } else if (errorCode >= 500 && errorCode <= 599) message = "Existe un problema con el servidor para procesar la solicitud"

        }


          MySwal.fire({

            didOpen: () => {

              MySwal.clickConfirm()

            }

          }).then(() => {

            return MySwal.fire(
              <>
                <h3>Ocurrió un error al procesar la solicitud</h3>
                <h4 id="errorCode">HTTP Error: {errorCode}</h4>
                <br></br>
                <p>{message}</p>
              </>
            )

          })


          if(!window.location === '/login'){

            window.location.replace('/login')

          }
         
        return error
        }


)


export const getUser = (id) => http.get(`/users/${id}`)
export const login = (username,password) => http.post('/login',{username,password})
export const logout = (username,password) => http.post('/logout',{username,password})
export const getPosts = _ => http.get('/posts')
export const setLike = (postId) => http.post(`/posts/${postId}/like`)