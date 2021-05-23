import { IconContext } from "react-icons";
import { AiFillTwitterCircle } from "react-icons/ai";
import AddTweet from './AddTweet';

const Logo = AiFillTwitterCircle`
    height: 32px;
    width: 32px;
`;

// TODO: move login/logout button to navbar.
function UserAction() {
    if (AddTweet.isAuthenticated) {
        return <button type="button" className="btn btn-danger" onClick={async () => { await logout(); client.clearStore()}}>Logout</button>
    } else {
        return <button type="button" onClick={() => loginWithRedirect()}> Login </button>
    }
}

export default () => {
    return (
        <header className="p-3 mb-4 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none me-4">

                        <IconContext.Provider value={{ color: "#1DA1F2", className: "me-2", size: "32px" }}>
                            <AiFillTwitterCircle />
                        </IconContext.Provider>
                        <span className="logo-title">Workshop Challenge</span>
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
                    </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        {/* TODO: Implementar uma busca :) */}
                        <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
                    </form>

                    <div className="text-end">
                        {/* <UserAction /> */}
                    </div>
                </div>
            </div>
        </header>
    )
}