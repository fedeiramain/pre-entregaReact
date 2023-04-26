const NavBar = () => {
    return (
        <nav>
            <div>
                <nav className="navbar navbar-light bg-secondary">
                    <form className="form-inline">
                        <button className="btn btn-outline-success" type="button">Todos</button>
                        <button className="btn btn-sm btn-outline-primary" type="button">Iphone</button>
                        <button className="btn btn-sm btn-outline-info" type="button">Ipad</button>
                        <button className="btn btn-sm btn-outline-warning" type="button">MacBook</button>
                    </form>
                </nav>
            </div>
        </nav>
    )
};

export default NavBar;