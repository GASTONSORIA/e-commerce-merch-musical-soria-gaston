import CartWidget from "../cartwidget/CartWidget";
import ItemListContainer from "../itemlistcontainer/ItemListContainer"


const NavBar = () => {
    return (
        
        <header className="navbar navbar-expand-lg navbar-dark bg-dark">
        
        <nav className="container-fluid">
            
            {/* BRAND */}
            <a className="navbar-brand" href="#">Ton Soria</a>
            
            {/* Menu Button */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            {/* SECCIONES */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
                <li><a className="nav-link active" aria-current="page" href="#">Inicio</a></li>
                <li><a className="nav-link" href="#">Quiero apoyar al proyecto!</a></li>
                <li><a className="nav-link" href="#">Música y videos</a></li>
            </ul>
        </div>
        
        </nav>

        
        
        <CartWidget/>
        
        </header>

        
       
    )
}

export default NavBar;