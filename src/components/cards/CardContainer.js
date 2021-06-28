import CardList from "./CardList";
import { useState, useEffect } from "react";
import axios from "axios";
import { DragDropContext } from 'react-beautiful-dnd';
import uuid from 'react-uuid';

const CardContainer = () => {
    const [neutralCards, setNeutralCards] = useState([]);
    const [positiveCards, setPositiveCards] = useState([]);
    const [negativeCards, setNegativeCards] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const creatEmtpyCard = () => {
        return {
            id: uuid(),
            cardType: {
                imageName: "default-image.png"
            },
            verticalStatusName: ''
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
                            setNegativeCards(negativeCards => [...negativeCards, creatEmtpyCard()]);
                            setPositiveCards(positiveCards => [...positiveCards, creatEmtpyCard()]);
                            break;
                        case "negative":
                            setNegativeCards(negativeCards => [...negativeCards, card]);
                            setNeutralCards(neutralCards => [...neutralCards, creatEmtpyCard()]);
                            setPositiveCards(positiveCards => [...positiveCards, creatEmtpyCard()]);
                            break;
                        case "positive":
                            setPositiveCards(positiveCards => [...positiveCards, card]);
                            setNeutralCards(neutralCards => [...neutralCards, creatEmtpyCard()]);
                            setNegativeCards(negativeCards => [...negativeCards, creatEmtpyCard()]);
                            break;
                        default:
                            setNeutralCards(neutralCards => [...neutralCards, creatEmtpyCard()]);
                            setNegativeCards(negativeCards => [...negativeCards, creatEmtpyCard()]);
                            setPositiveCards(positiveCards => [...positiveCards, creatEmtpyCard()]);
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
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
                <div className="card-container">
                    {loading && <CardList cards={positiveCards} className="cards positive-cards" droppableId={uuid()} />}
                    {loading && <CardList cards={neutralCards} className="cards neutral-cards" droppableId={uuid()} />}
                    {loading && <CardList cards={negativeCards} className="cards negative-cards" droppableId={uuid()} />}
                </div>
        </DragDropContext>
    )
}

export default CardContainer;