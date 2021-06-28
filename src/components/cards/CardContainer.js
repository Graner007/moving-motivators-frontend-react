import CardList from "./CardList";
import { useState, useEffect } from "react";
import axios from "axios";
import { DragDropContext } from 'react-beautiful-dnd';

const CardContainer = () => {
    const [neutralCards, setNeutralCards] = useState([]);
    const [positiveCards, setPositiveCards] = useState([]);
    const [negativeCards, setNegativeCards] = useState([]);
    const [loading, setLoading] = useState(false); 
    const emptyCard = {
        cardType: {
            imageName: "dafault-image"
        }
    }

    useEffect(() => {
        axios.get("/cards")
            .then(res => {
                const cards = res.data;
                cards.forEach(card => {
                    switch (card.verticalStatusName) {
                        case "neutral":
                            setNeutralCards(neutralCards => [...neutralCards, card]);
                            setNegativeCards(negativeCards => [...negativeCards, emptyCard]);
                            setPositiveCards(positiveCards => [...positiveCards, emptyCard]);
                            break;
                        case "negative":
                            setNegativeCards(negativeCards => [...negativeCards, card]);
                            setNeutralCards(neutralCards => [...neutralCards, emptyCard]);
                            setPositiveCards(positiveCards => [...positiveCards, emptyCard]);
                            break;
                        case "positive":
                            setPositiveCards(positiveCards => [...positiveCards, card]);
                            setNeutralCards(neutralCards => [...neutralCards, emptyCard]);
                            setNegativeCards(negativeCards => [...negativeCards, emptyCard]);
                            break;
                        default:
                            setNeutralCards(neutralCards => [...neutralCards, emptyCard]);
                            setNegativeCards(negativeCards => [...negativeCards, emptyCard]);
                            setPositiveCards(positiveCards => [...positiveCards, card]);
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

        //let sourceIdx = parseInt(result.source.index)
        //let destIdx = parseInt(result.destination.index)
    }

    return (
        <DragDropContext onDragEnd = {onDragEnd}>
            <div className="card-container">
                {loading && <CardList cards={positiveCards} className="cards positive-cards" />}
                {loading && <CardList cards={neutralCards} className="cards neutral-cards" />}
                {loading && <CardList cards={negativeCards} className="cards negative-cards" />}
            </div>
        </DragDropContext>
    )
}

export default CardContainer;