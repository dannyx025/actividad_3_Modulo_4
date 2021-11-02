import Post from './Post'
import '../assets/css/PostList.css'
import PostSelector from './PostSelector'


function PostList({ posts, search }) {


    switch (posts.length) {

        case 0:

            return (<>
                <PostSelector></PostSelector>

                <div className="container-fluid d-flex align-items-center justify-content-center" id="main-container">

                    <div className="row">
                        <div className="col-12">
                            <h4>Cargando posts...</h4>
                        </div>
                    </div>
                </div>
            </>)




        default:

            return <>

                <div className="container-fluid " id="main-container">
                    <PostSelector></PostSelector>
                    <div className="row">

                        {posts.filter((post) => (post.text.toLowerCase().includes(search.toLowerCase()))).map((post, index) => (

                            <Post key={index}
                                author={post.author.username}
                                createdAt={post.createdAt}
                                text={post.text}
                                comments={post.comments.length}
                                image={post.image}
                                likes={post.likes}
                                postId={post.id} />

                        ))}

                    </div>
                </div>

            </>

    }
}



export default PostList