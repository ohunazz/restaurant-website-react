const Hero = () => {
    return (
        <section id="hero-section">
            <div className="hero-section__container">
                <div className="hero-section__left">
                    <span>Restaurant</span>
                    <h1 className="hero-section__heading">Italian Cuisine</h1>
                    <p className="hero-section__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sodales senectus dictum arcu sit tristique donec eget.
                    </p>
                    <div className="hero-section__cta">
                        <button className="btn-large-orange">Order Now</button>
                        <button className="btn-large-green">Reservation</button>
                    </div>
                </div>

                <div className="hero-section__right">
                    <img
                        src="./assets/hero.png"
                        alt="Spaghetti"
                        className="hero-section__img"
                    />
                </div>
            </div>
        </section>
    );
};

export { Hero };
