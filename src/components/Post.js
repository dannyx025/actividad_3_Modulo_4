import '../assets/css/Post.css'
import React,{useState} from 'react'
import {setLike} from '../services/apiCalls'


function Post({createdAt,author,text,image,likes,postId}) {
    
    const [likesCount, setLikeNumber] = useState(likes)

 

   const convertToShortDate = (date) => {

        var currentDate = new Date(date);
        return currentDate.toLocaleDateString('en-US');

    }

    const changeLikeNumber = (newLike) => {

        
        setLikeNumber(likesCount + newLike)
        //Lo deje asi, aunque que vi que esta request solo aumenta de likes
        setLike(postId)

    }


        return (
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center">
                <div className="card">
                    <img src={image} className="card-img-top" alt="Post" />
                    <div className="card-body">
                        <p className="ps-2 right">{convertToShortDate(createdAt)}</p>
                        <p className="author">@{author}</p>

                        <p className="card-text">{text}</p>
                        <div className="d-flex flex-row align-items-end likesContainer">

                            <a className="Noliked" onClick={(event) => {

                                switch (event.target.classList.contains('Noliked')) {

                                    case true:
                                        changeLikeNumber(1)
                                        event.target.classList.add('liked')
                                        event.target.classList.remove('Noliked')
                                        break;

                                    case false:
                                        changeLikeNumber(-1)
                                        event.target.classList.remove('liked')
                                        event.target.classList.add('Noliked')
                                        break;
                                    default:

                                }

                            }} />
                            <span className="ps-2 likes">{likesCount} likes</span>


                        </div>

                    </div>
                </div>
            </div>

        )

}

export default Post