import '../assets/css/Profile.css'

function Profile({ avatar, username, bio, changeStatePosts }) {


    const exit = () => {

        changeStatePosts([])
        localStorage.removeItem('id')
        window.location.replace('/login')

    }

    return (
        <>


            <div className="container-fluid d-flex flex-column justify-content-center align-items-center profile h-100">
                <img src={avatar} className="avatar" alt="avatar" />
                <h5>@{username}</h5>
                <h4>{bio}</h4>
                <div className="d-flex">
                    <a onClick={() => { window.location.replace('/') }} className="exit"><i className="large material-icons exitIcon">keyboard_capslock</i></a>
                    <a onClick={exit} className="exit"><i className="large material-icons exitIcon">exit_to_app</i></a>
                </div>


            </div>

        </>

    )
}


export default Profile