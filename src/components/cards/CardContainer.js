import CardList from "./CardList";
import { useState, useEffect } from "react";
import axios from "axios";

const CardContainer = () => {
    const [cards, setCards] = useState();
    const [loading, setLoading] = useState(false); 

    useEffect(() => {
        axios.get("/cards")
            .then(res => {
                setCards(res.data);
                setLoading(true);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="card-container">
            {loading && <CardList cards={cards} />}
        </div>
    )
}

export default CardContainer;