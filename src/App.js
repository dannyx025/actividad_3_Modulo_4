import Login from './screens/Login';
import Profile from './screens/Profile';
import React, { useEffect, useRef, useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import About from './screens/About';
import { getPosts, getUser } from './services/apiCalls'
import { Route, Switch } from 'react-router';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar'
import PostList from './components/PostList'

function App() {

  const loadingPosts = useRef()
  const avatarUser = useRef("")
  const currentUser = useRef("")
  const bio = useRef("")
  const nameUser = useRef("")
  const id = useRef(JSON.parse(localStorage.getItem('id')))
  const MySwal = useRef(withReactContent(Swal))
  const [posts, setPosts] = useState([])
  const login = useRef(false)
  const [search,setSearch] = useState('')


  const getPostsList = () => {

    setPosts([])
    loadingPosts.current = setTimeout(() => {


      getPosts()

        .then(response => {

          setPosts(response.data)

        })

    }, 3000);


  }


  useEffect(() => {

    if (login.current === true) {

      MySwal.current.fire({

        didOpen: () => {

          MySwal.current.clickConfirm()

        }

      }).then(() => {

        return MySwal.current.fire(
          <>

            <p>¡Hola de nuevo, {nameUser}!</p>
            <br></br>
            <p><i className="material-icons">insert_emoticon</i></p>

          </>)

      }).catch(err => (console.log(err)))
      getPostsList()
    }


  }, [])


  useEffect(() => {


    Swal.fire({
      title: 'Cargando...',
      html: 'Favor, espere un momento.',
      didOpen: () => Swal.showLoading(),
      preConfirm: getUser(id.current)
        .then(response => {


          avatarUser.current = response.data.avatar
          currentUser.current = response.data.username
          bio.current = response.data.bio
          nameUser.current = response.data.name
          login.current = true


          return response

        }).catch((error) => {


          if (window.location.pathname !== '/login') {

            Swal.close()
            login.current = false
            window.location.replace('/login')

          } else {

            login.current = false
         
          }


        })
    })

  }, [])



  return (
    <>

      <Switch>

        <Route path="/" exact>

          <NavBar name={nameUser.current} avatar={avatarUser.current} loadPostList={() => getPostsList()} />
          <SearchBar onSearch={(text) => setSearch(text)}></SearchBar>
          <PostList posts={posts} search={search}></PostList>

        </Route>

        <Route path="/login" component={Login} exact />
        <Route path="/profile" exact >

          <NavBar name={nameUser.current} avatar={avatarUser.current} />
          <Profile
            avatar={avatarUser.current}
            username={currentUser.current}
            bio={bio.current}
            changeStatePosts={(posts) => setPosts(posts)}>
          </Profile>

        </Route>
        <Route path="/about" component={About} exact />

      </Switch>

    </>

  )

}

export default App;
