import spaghetti from "../../../../assets/menu-spaghetti.png";
import gnocchi from "../../../../assets/menu-gnocchi.png";
import roviolli from "../../../../assets/menu-rovioli.png";
import penneAllVodak from "../../../../assets/menu-penne-alla-vodak.png";
import risoto from "../../../../assets/menu-risoto.png";
import splitza from "../../../../assets/menu-splitza.png";
import "./Menu.css";

export const meals = [
    {
        name: "Spaghetti",
        image: spaghetti,
        description:
            "Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
        rating: [1, 1, 1, 1, 1],
        price: "$11.99"
    },
    {
        name: "Gnocchi",
        image: gnocchi,
        description:
            "Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
        rating: [1, 1, 1, 1, 1],
        price: "$17.49"
    },
    {
        name: "Roviolli",
        image: roviolli,
        description:
            "Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
        rating: [1, 1, 1, 1, 0],
        price: "$8.99"
    },
    {
        name: "Penne-Alla-Vodak",
        image: penneAllVodak,
        description:
            "Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
        rating: [1, 1, 1, 1, 0],
        price: "$6.99"
    },
    {
        name: "Risoto",
        image: risoto,
        description:
            "Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
        rating: [1, 1, 1, 1, 0],
        price: "$9.99"
    },
    {
        name: "Splitza Signature",
        image: splitza,
        description:
            "Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
        rating: [1, 1, 1, 0, 0],
        price: "4.99"
    }
];
