function NavBar() {
    return (
        
        <header class="navbar navbar-expand-lg navbar-dark bg-dark">
        
        <nav class="container-fluid">
            
            {/* BRAND */}
            <a class="navbar-brand" href="#">Ton Soria</a>
            
            {/* Menu Button */}
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            {/* SECCIONES */}
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul class="navbar-nav">
                <li><a class="nav-link active" aria-current="page" href="#">Inicio</a></li>
                <li><a class="nav-link" href="#">Quiero apoyar al proyecto!</a></li>
                <li><a class="nav-link" href="#">Música y videos</a></li>
            </ul>
        </div>
        </nav>
        </header>

       
    )
}

export default NavBar