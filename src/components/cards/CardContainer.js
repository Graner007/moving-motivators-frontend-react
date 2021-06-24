import CardList from "./CardList";
import { useState, useEffect } from "react";
import axios from "axios";

const CardContainer = () => {
    const [cards, setCards] = useState(); 

    useEffect(() => {
        axios.get("/cards")
            .then(res => setCards(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="card-container">
            <CardList cards={cards} />
        </div>
    )
}

export default CardContainer;