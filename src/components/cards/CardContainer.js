import CardList from "./CardList";
import { useState, useEffect } from "react";
import axios from "axios";
import { DragDropContext } from 'react-beautiful-dnd';

const CardContainer = () => {
    const [neutralCards, setNeutralCards] = useState([]);
    const [positiveCards, setPositiveCards] = useState([]);
    const [negativeCards, setNegativeCards] = useState([]);
    const [stage, setStage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios.get("/cards")
            .then(res => {
                const cards = res.data;
                cards.forEach(card => {
                    switch (card.verticalStatusName) {
                        case "neutral":
                            setNeutralCards(neutralCards => [...neutralCards, card]);
                            break;
                        case "negative":
                            setNegativeCards(negativeCards => [...negativeCards, card]); 
                            break;
                        case "positive":
                            setPositiveCards(positiveCards => [...positiveCards, card]);
                            break;
                        case "default-image":
                            if (card.description.includes("neutral")) {
                                setNeutralCards(neutralCards => [...neutralCards, card]);
                            }
                            else if (card.description.includes("positive")) {
                                setPositiveCards(positiveCards => [...positiveCards, card]);
                            }
                            else {
                                setNegativeCards(negativeCards => [...negativeCards, card]); 
                            }
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