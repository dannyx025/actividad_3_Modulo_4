import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar'
import PostList from '../components/PostList'
import React,{useState} from 'react'


function Main({posts,name,avatar,loadPostList}){

    const [search,setSearch] = useState('')

return(


    <>

    <NavBar name={name} avatar={avatar} loadPostList={() => loadPostList()}/>
    <SearchBar onSearch={(text) => setSearch(text)}></SearchBar>
    <PostList posts={posts} search={search}></PostList>

  </>)

}


export default Main 