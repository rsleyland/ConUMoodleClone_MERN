import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom'


const TopNav = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => ({...state}));

    const toggleMenu = () => {
        let items = document.getElementsByClassName('menu-item');
        if (document.getElementById('left-container').classList.contains('dissolve-left')) {
            document.getElementById('left-container').classList.remove('dissolve-left');
            setTimeout(() => {
                for (let i in items) {
                    if (items[i].classList) items[i].classList.remove('hide');
                }
            }, 400);
        }
        else {
            for (let i in items) {
                if (items[i].classList) items[i].classList.add('hide');
            }
            document.getElementById('left-container').classList.add('dissolve-left');
        }
    };

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('course');
        localStorage.removeItem('courselist');
        dispatch({type: "LOGGED_IN_USER"});
        dispatch({type: "REMOVE_COURSELIST"});
        dispatch({type: "REMOVE_COURSE"});
        window.location.reload();
        
    };

    return (
        <div id="navbar-top">
            <div id="navbar-top-left">
                <div id="navbar-top-menu-toggle">
                    <a id="burger-toggle" onClick={toggleMenu}><i className="fa fa-bars" aria-hidden="true"></i></a>
                </div>
                <div id="navbar-top-logo">
                    <Link to="/"><img src="/img/Concordia-logo.png" alt="" /></Link>
                </div>
                <div id="navbar-top-links">
                    <a href="#">Courses</a>
                    <div className="dropdown">
                        <button className="dropbtn">Academic Integrity <i className="fa fa-caret-down"></i></button>
                        <div id='academic-dropdown' className="dropdown-content">
                            <a href="#">Academic Assessment Tool</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">English (en) <i className="fa fa-caret-down"></i></button>
                        <div id="language-dropdown" className="dropdown-content">
                            <a href="#">Deutsch (de)</a>
                            <a href="#">English (en)</a>
                            <a href="#">Español - Internacional (es)</a>
                            <a href="#">Français (Canada) (fr_ca)</a>
                            <a href="#">Français (fr)</a>
                            <a href="#">Italiano (it)</a>
                            <a href="#">لعربية (ar)</a>
                        </div>
                    </div>
                </div>
            </div>
            { user.data ? <>
                <div id="navbar-top-right">

                    <a id="navbar-top-bell" href=""><i className="fa fa-bell" aria-hidden="true"></i></a>
                    <a id="navbar-top-message" href=""><i className="fa fa-comment" aria-hidden="true"></i></a>

                    <div id="navbar-top-right-menu" className="dropdown">
                        <button className="dropbtn">
                            <div id="navbar-top-user">
                                <div id="navbar-top-user-name">
                                    <h4>Ryan Leyland</h4>
                                </div>
                                <div id="navbar-top-user-avatar">
                                    <i className="fa fa-user-circle" aria-hidden="true"></i>
                                </div>
                                <i className="fa fa-caret-down"></i>
                            </div>
                        </button>
                        <div id="navbar-top-right-menu-toggle" className="dropdown-content">
                            <a href="#"><i className="fa fa-tachometer" aria-hidden="true"></i> Dashboard</a>
                            <a href="#"><i className="fa fa-user" aria-hidden="true"></i> Profile</a>
                            <a href="#"><i className="fa fa-table" aria-hidden="true"></i> Grades</a>
                            <a href="#"><i className="fa fa-comment" aria-hidden="true"></i> Messages</a>
                            <a href="#"><i className="fa fa-wrench" aria-hidden="true"></i> Preferences</a>
                            <a href="#" onClick={logout}><i className="fa fa-sign-out" aria-hidden="true"></i> Logout</a>
                        </div>
                    </div>
                </div>
            </> :
            <h4 id="not-logged-in-msg">You are not logged in. (<a id='login-link' href={"/login"}>Log in</a>)</h4> 
            }
            
        </div>
    )
}

export default TopNav;