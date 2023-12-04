import React from "react";
import "./Footer.css";
import logoDark from "../../../../assets/logo-dark.svg";
import twitter from "../../../../assets/twitter.svg";
import instagram from "../../../../assets/instagram.svg";
import facebook from "../../../../assets/facebook.svg";

const footerLinks = [
    { text: "About Us", link: "https://google.com" },
    { text: "Testimonial", link: "https://www.facebook.com/home.php" },
    { text: "Event ", link: "https://www.linkedin.com/feed/" },
    { text: "Catering", link: "https://www.youtube.com/" },
    { text: "Reservation", link: "https://mail.google.com/mail/u/1/#inbox" }
];

class Footer extends React.Component {
    render() {
        return (
            <footer id="footer">
                <div class="footer__container">
                    <div class="footer__content">
                        <div class="footer__brand">
                            <img src={logoDark} alt="" class="footer__logo" />
                            <p class="footer__text">
                                Viverra gravida morbi egestas facilisis tortor
                                netus non duis tempor
                            </p>
                            <div class="footer__social-icons">
                                <img src={twitter} alt="Twitter" />
                                <img src={instagram} alt="Instagram" />
                                <img src={facebook} alt="Facebook" />
                            </div>
                        </div>
                        <div class="footer__pages">
                            <h4 class="footer__heading">Page</h4>
                            <a href="" class="footer__text">
                                Home
                            </a>
                            <a href="" class="footer__text">
                                Menu
                            </a>
                            <a href="" class="footer__text">
                                Order Online
                            </a>
                            <a href="" class="footer__text">
                                Catering
                            </a>
                            <a href="" class="footer__text">
                                Reservation
                            </a>
                        </div>
                        <div class="footer__about">
                            <h4 class="footer__heading">Information</h4>
                            {footerLinks.map((link, idx) => {
                                return (
                                    <a
                                        href={link.link}
                                        className="footer__text"
                                        key={idx}
                                    >
                                        {link.text}
                                    </a>
                                );
                            })}
                        </div>
                        <div class="footer__contact">
                            <h4 class="footer__heading">Get in touch</h4>
                            <p class="footer__text">
                                3247 Johnson Ave,
                                <br />
                                Bronx, NY 10463
                            </p>
                            <a
                                href="mailto: delizioso@gmail.com"
                                class="footer__text"
                            >
                                delizioso@gmail.com
                            </a>
                            <a href="tel:347-567-2828" class="footer__text">
                                234-567-8901
                            </a>
                        </div>
                    </div>
                    <p class="footer__text text-center">
                        Copyright &copy; 2023 Delizioso
                    </p>
                </div>
            </footer>
        );
    }
}

export { Footer };
