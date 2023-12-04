import React from "react";
import "./Chefs.css";
import chef1 from "../../../../assets/betran.png";
import chef2 from "../../../../assets/ferry.png";
import chef3 from "../../../../assets/iswan.png";

const Chef = (props) => {
    return (
        <div className="chefs-section__chef">
            <img src={props.img} alt="Betran Chef" />
            <h4>{props.name}</h4>
            <p>{props.title}</p>
        </div>
    );
};

class Chefs extends React.Component {
    render() {
        return (
            <section id="chefs-section">
                <div class="chefs-section__container">
                    <h2>
                        Our Greatest <span>Chefs</span>
                    </h2>
                    <div class="chefs-section__chefs">
                        <Chef
                            img={chef1}
                            name={"Betran Komar"}
                            title="Head Chef"
                        />
                        <Chef img={chef2} name={"Ferry Sauwi"} title="Chef" />
                        <Chef img={chef3} name={"Iswan Dracho"} title="Chef" />
                    </div>
                    <button class="btn-large-orange">View All</button>
                </div>
            </section>
        );
    }
}

export { Chefs };
