import React from "react";
import "./Testimonials.css";
import customer2 from "../../../../assets/customer-2.png";
import customer1 from "../../../../assets/customer-1.png";
import customer3 from "../../../../assets/customer-3.png";

class Testimonials extends React.Component {
    render() {
        return (
            <section id="testimonials-section">
                <div class="testimonials-section__container">
                    <h2>What customers say</h2>
                    <div class="testimonials-section__testimonials">
                        <div class="testimonials-section__testimonial">
                            <img src={customer1} alt="" />
                            <h4>James Maden</h4>
                            <h5>Uber Driver</h5>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Iste, odit deserunt, obcaecati
                                perferendis rerum natus facilis, atque ab nam
                                voluptas a maxime? Aliquid magnam incidunt eum
                                vero, modi consequatur ad!
                            </p>
                        </div>
                        <div class="testimonials-section__testimonial">
                            <img src={customer2} alt="Starla Virgoun" />
                            <h4>Starla Virgoun</h4>
                            <h5>Financial Advisor</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Deleniti odio, doloremque
                                totam, ipsam perspiciatis maxime quibusdam
                                molestias doloribus voluptas commodi esse
                                consectetur quae nisi vel sed cupiditate
                                perferendis aperiam necessitatibus?
                            </p>
                        </div>
                        <div class="testimonials-section__testimonial">
                            <img src={customer3} alt="Tosh Mat" />
                            <h4>Tosh Mat</h4>
                            <h5>Teacher</h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Rerum cum libero a
                                reprehenderit? Sapiente, consequuntur commodi
                                repellendus similique modi natus soluta
                                architecto voluptates perferendis nam repellat
                                quod ad unde! Aut!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export { Testimonials };
