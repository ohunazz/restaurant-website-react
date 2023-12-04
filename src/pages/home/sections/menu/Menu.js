import React from "react";
import "./Menu.css";
import { meals } from "./data.js";
import starFilled from "../../../../assets/star-filled.svg";
import starEmpty from "../../../../assets/star-empty.svg";
import { Button } from "../../../../design-system/Button";

const Star = (props) => {
    return (
        <img
            src={props.number ? starFilled : starEmpty}
            alt={props.number ? "Filled Star" : "Empty Star"}
        />
    );
};

const Meal = (props) => {
    return (
        <div className="card">
            <img src={props.image} alt={props.name} className="card__img" />
            <h3 className="card__title">{props.name}</h3>
            <div className="menu-section__stars">
                {props.rating.map((number, idx) => {
                    return <Star number={number} key={idx} />;
                })}
            </div>
            <p className="card__text">{props.description}</p>
            <div className="card__footer">
                <span className="menu-section__price">{props.price}</span>
                <Button size="md" color="orange">
                    Order Now
                </Button>
            </div>
        </div>
    );
};

class Menu extends React.Component {
    render() {
        return (
            <section id="menu-section">
                <div className="menu-section__container container">
                    <h2>Our Popular Menu</h2>
                    <div className="menu-section__filters">
                        <Button size="lg" color="black">
                            All Catagories
                        </Button>
                        <Button size="lg" color="gray">
                            Dinner
                        </Button>
                        <Button size="lg" color="gray">
                            Lunch
                        </Button>
                        <Button size="lg" color="gray">
                            Dessert
                        </Button>
                        <Button size="lg" color="gray">
                            Drinks
                        </Button>
                    </div>
                    <div className="menu-section__meals">
                        {meals.map((meal, idx) => {
                            return (
                                <Meal
                                    key={idx}
                                    name={meal.name}
                                    image={meal.image}
                                    price={meal.price}
                                    description={meal.description}
                                    rating={meal.rating}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

export { Menu };
