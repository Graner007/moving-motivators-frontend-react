import CardList from "./CardList";
import { useState, useEffect } from "react";
import axios from "axios";
import { DragDropContext } from 'react-beautiful-dnd';
import { useLocation } from "react-router-dom";

const CardContainer = () => {
    const [neutralCards, setNeutralCards] = useState([]);
    const [positiveCards, setPositiveCards] = useState([]);
    const [negativeCards, setNegativeCards] = useState([]);
    const [stage, setStage] = useState(1);
    const [loading, setLoading] = useState(false);
    const url = useLocation().pathname;
    const lst = url.split("/");
    const groupName = lst[1];
    const quesiton = lst[2];

    useEffect(() => {
        axios.get("/" + groupName + "/" + quesiton + "/cards")
            .then(res => {
                const cards = res.data;
                cards.forEach(card => {
                    switch (card.verticalStatusName) {
                        case "NEUTRAL":
                            setNeutralCards(neutralCards => [...neutralCards, card]);
                            //setPositiveCards(positiveCards => [...positiveCards, card]);
                            break;
                        case "NEGATIVE":
                            setNegativeCards(negativeCards => [...negativeCards, card]); 
                            break;
                        case "POSITIVE":
                            setPositiveCards(positiveCards => [...positiveCards, card]);
                            break;
                    }
                });
                setLoading(true);
            })
            .catch(err => console.log(err));
    }, []);

    let onDragEnd = (result) => {
        if (!result.destination) {
          return;
        }

        console.log(result);

        switch (stage) {
            case 1:
                if (result.destination.droppableId === "neutral-cards" && result.source.droppableId === "neutral-cards") {
                    const data = new FormData();
                    data.append("dragCardId", result.source.index);
                    data.append("dropCardId", result.destination.index);

                    const config = {
                        headers: {
                          "Content-Type": "application/json"
                        }
                    };

                    axios.put("/" + groupName + "/" + quesiton + "/cards", data, config)
                    .then(res => console.log(res))
                    .catch(err => console.error(err));
                }
                break;
            case 2:
                break;
        }
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
                <div className="card-container">
                    {loading && <CardList cards={positiveCards} className="cards positive-cards" droppableId="positive-cards" />}
                    {loading && <CardList cards={neutralCards} className="cards neutral-cards" droppableId="neutral-cards" />}
                    {loading && <CardList cards={negativeCards} className="cards negative-cards" droppableId="negative-cards" />}
                </div>
        </DragDropContext>
    )
}

export default CardContainer;