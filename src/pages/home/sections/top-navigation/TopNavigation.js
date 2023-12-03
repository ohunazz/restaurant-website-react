import "./TopNavigation.css";
import cartIcon from "../../../../assets/cart.svg";
import logo from "../../../../assets/logo-white.svg";

const TopNavigation = () => {
    return (
        <header className="header">
            <nav className="navigation">
                <img src={logo} alt="DeliziOso" className="logo-white" />
                <ul className="navigation__links">
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Menu</a>
                    </li>
                    <li>
                        <a href="">About Us</a>
                    </li>
                    <li>
                        <a href="">Reservation</a>
                    </li>
                    <li>
                        <a href="">Contact Us</a>
                    </li>
                    <li>
                        <a href="./branding.html">Branding</a>
                    </li>
                </ul>
                <div className="navigation__actions">
                    <figure>
                        <img src={cartIcon} alt="Shopping Cart" />
                    </figure>
                    <button className="btn-small-green">Log In</button>
                </div>
            </nav>
        </header>
    );
};

export { TopNavigation };
