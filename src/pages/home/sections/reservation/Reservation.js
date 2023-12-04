import React from "react";
import "./Reservation.css";
import reservation from "../../../../assets/reservation.png";

class Reservation extends React.Component {
    render() {
        return (
            <section id="reservation-section">
                <div class="reservation-section__container">
                    <div class="reservation-section__left">
                        <img
                            src={reservation}
                            alt="People gatherring for food"
                        />
                    </div>
                    <div class="reservation-section__right">
                        <h2>
                            Let's reserve <span>a table</span>
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                        <button class="btn-large-orange">Reservation</button>
                    </div>
                </div>
            </section>
        );
    }
}

export { Reservation };
