import "./Welcome.css";
import salad from "../../../../assets/salad.png";

const Welcome = () => {
    return (
        <section id="welcome-section">
            <div class="welcome-section__container">
                <figure class="welcome-section__left">
                    <img src={salad} alt="" />
                </figure>
                <div class="welcome-section__right">
                    <h2>
                        Welcome to <span>DeliziOso</span>
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sodales senectus dictum arcu sit tristique donec eget.
                    </p>
                    <button class="btn-large-orange">See Our Menu</button>
                </div>
            </div>
        </section>
    );
};

export { Welcome };
