const Menu = () => {
    return (
        <section id="menu-section">
            <div class="menu-section__container">
                <h2>Our popular menu</h2>
                <div class="menu-section__filters">
                    <button class="btn-large-black">All Catagorie</button>
                    <button class="btn-large-grey">Dinner</button>
                    <button class="btn-large-grey">Lunch</button>
                    <button class="btn-large-grey">Dessert</button>
                    <button class="btn-large-grey">Drinks</button>
                </div>
                <div class="menu-section__meals">
                    <div class="card">
                        <img
                            src="./assets/menu-spaghetti.png"
                            alt="Spaghetti"
                            class="card__img"
                        />
                        <h3 class="card__title">Spaghetti</h3>
                        <div class="menu-section__stars">
                            <img src="./assets/star-filled.svg" alt="" />
                            <img src="./assets/star-filled.svg" alt="" />
                            <img src="./assets/star-filled.svg" alt="" />
                            <img src="./assets/star-filled.svg" alt="" />
                            <img src="./assets/star-filled.svg" alt="" />
                        </div>
                        <p class="card__text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Nam numquam aliquam ipsam.
                        </p>
                        <div class="card__footer">
                            <span class="menu-section__price"> $11.99</span>
                            <button class="btn-md-orange">Order Now</button>
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="./assets/menu-gnocchi.png"
                            alt="Spaghetti"
                            class="card__img"
                        />
                        <h3 class="card__title">Gnochchi</h3>
                        <div class="menu-section__stars">
                            <img src="./assets/star-filled.svg" alt="" />
                            <img src="./assets/star-filled.svg" alt="" />
                            <img src="./assets/star-filled.svg" alt="" />
                            <img src="./assets/star-filled.svg" alt="" />
                            <img src="./assets/star-filled.svg" alt="" />
                        </div>
                        <p class="card__text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Nam numquam aliquam ipsam.
                        </p>
                        <div class="card__footer">
                            <span class="menu-section__price"> $14.49</span>
                            <button class="btn-md-orange">Order Now</button>
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="./assets/menu-rovioli.png"
                            alt="Spaghetti"
                            class="card__img"
                        />
                        <h3 class="card__title">Rovioli</h3>
                        <div class="menu-section__stars">
                            <img src="./assets/star-filled.svg" alt="" />
                            <img src="./assets/star-filled.svg" alt="" />
                            <img src="./assets/star-filled.svg" alt="" />
                            <img src="./assets/star-filled.svg" alt="" />
                            <img src="./assets/star-filled.svg" alt="" />
                        </div>
                        <p class="card__text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Nam numquam aliquam ipsam.
                        </p>
                        <div class="card__footer">
                            <span class="menu-section__price"> $8.99</span>
                            <button class="btn-md-orange">Order Now</button>
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="./assets/menu-penne-alla-vodak.png"
                            alt="Spaghetti"
                            class="card__img"
                        />
                        <h3 class="card__title">Penne-All</h3>
                        <div class="menu-section__stars">
                            <img src="./assets/star-filled.svg" alt="" />
                            <img src="./assets/star-filled.svg" alt="" />
                            <img src="./assets/star-filled.svg" alt="" />
                            <img src="./assets/star-filled.svg" alt="" />
                            <img src="./assets/star-empty.svg" alt="" />
                        </div>
                        <p class="card__text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Nam numquam aliquam ipsam.
                        </p>
                        <div class="card__footer">
                            <span class="menu-section__price"> $6.99</span>
                            <button class="btn-md-orange">Order Now</button>
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="./assets/menu-risoto.png"
                            alt="Spaghetti"
                            class="card__img"
                        />
                        <h3 class="card__title">Risoto</h3>
                        <div class="menu-section__stars">
                            <img src="./assets/star-filled.svg" alt="" />
                            <img src="./assets/star-filled.svg" alt="" />
                            <img src="./assets/star-filled.svg" alt="" />
                            <img src="./assets/star-filled.svg" alt="" />
                            <img src="./assets/star-filled.svg" alt="" />
                        </div>
                        <p class="card__text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Nam numquam aliquam ipsam.
                        </p>
                        <div class="card__footer">
                            <span class="menu-section__price"> $9.99</span>
                            <button class="btn-md-orange">Order Now</button>
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="./assets/menu-splitza.png"
                            alt="Spaghetti"
                            class="card__img"
                        />
                        <h3 class="card__title">Splitza</h3>
                        <div class="menu-section__stars">
                            <img src="./assets/star-filled.svg" alt="" />
                            <img src="./assets/star-filled.svg" alt="" />
                            <img src="./assets/star-filled.svg" alt="" />
                            <img src="./assets/star-empty.svg" alt="" />
                            <img src="./assets/star-empty.svg" alt="" />
                        </div>
                        <p class="card__text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Nam numquam aliquam ipsam.
                        </p>
                        <div class="card__footer">
                            <span class="menu-section__price"> $17.99</span>
                            <button class="btn-md-orange">Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Menu };
