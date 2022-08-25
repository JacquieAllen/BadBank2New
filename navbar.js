function NavBar(){
    return(

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">BigBadBank</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#/createaccount/" data-toggle="tooltip" data-placement="top" title="Create an account with us">CreateAccount<span class="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#/login/" data-toggle="tooltip" data-placement="bottom" title="Login to your account">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#/deposit/" data-toggle="tooltip" data-placement="top" title="Make a deposit">Deposit</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#/withdraw/" data-toggle="tooltip" data-placement="bottom" title="Make a withdraw">Withdraw</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#/alldata/" data-toggle="tooltip" data-placement="top" title="View All Data">All Data</a>
                    </li>
                </ul>
            </div>
        </nav>
        
);
}
