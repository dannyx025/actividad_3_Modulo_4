import '../assets/css/SearchBar.css'

function SearchBar({ onSearch }) {


    return (


        <ul className="container-fluid mt-5 d-flex align-items-center justify-content-center">
            <li className="col-1" >

                <i className="material-icons">search</i>

            </li>
            <li className="col-lg-6 col-md-8 col-sm-9 col-7">
                <input id="search" type="search" placeholder="¿Que desea buscar?" onChange={(event) => { onSearch(event.target.value) }} />
            </li>
            <li className="col-1" ></li>
        </ul>

    )
}

export default SearchBar