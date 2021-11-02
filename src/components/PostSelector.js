import '../assets/css/PostSelector.css'

function PostSelector() {


    return (

        <div className="container-fluid ">

            <div className="row">

                <div className="col-xs-0 col-sm-0 col-lg-1"></div>

                <div className="col-xs-12 col-sm-12 col-lg-10">
                    <ul className="tabs tabsMain tabs-fixed-width tab-demo z-depth-2 mt-2">

                        <li className="tab"><a className="tabsAnchor activeTab" href="#test2" id="muro">MURO</a></li>
                        <li className="tab"><a className="tabsAnchor" href="#test2" id="myPosts">MIS POSTS</a></li>
                        <li className="tab"><a className="tabsAnchor" href="#test3" id="amigos">AMIGOS</a></li>

                    </ul>
                </div>

                <div className="col-xs-0 col-sm-0 col-lg-1"></div>

            </div>

        </div>


    );



}

export default PostSelector