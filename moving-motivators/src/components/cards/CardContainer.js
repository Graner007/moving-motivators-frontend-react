import CardList from "./CardList";
import { useState } from "react";

const CardContainer = () => {
    const [cards, setCards] = useState([
        {
            id: 1,
            src: "https://picsum.photos/200"
        },
        {
            id: 2,
            src: "https://picsum.photos/200"
        },
        {
            id: 3,
            src: "https://picsum.photos/200"
        }
    ]);


    return (
        <div className="card-container">
            <CardList cards={cards} />
        </div>
    )
}

export default CardContainer;