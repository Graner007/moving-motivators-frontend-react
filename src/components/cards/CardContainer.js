import CardList from "./CardList";
import { useState, useEffect } from "react";
import axios from "axios";
import { DragDropContext } from "react-beautiful-dnd";
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
    axios
      .get("/cards/get", {
        params: {
          questionGroupName: groupName,
          questions: quesiton,
        },
      })
      .then((res) => {
        const cards = res.data;
        cards.forEach((card) => {
          // eslint-disable-next-line default-case
          switch (card.verticalStatusName) {
            case "NEUTRAL":
              setNeutralCards((neutralCards) => [...neutralCards, card]);
              //setPositiveCards(positiveCards => [...positiveCards, card]);
              break;
            case "NEGATIVE":
              setNegativeCards((negativeCards) => [...negativeCards, card]);
              break;
            case "POSITIVE":
              setPositiveCards((positiveCards) => [...positiveCards, card]);
              break;
          }
        });
        setLoading(true);
      })
      .catch((err) => console.log(err));
  }, [groupName, quesiton]);

  let onDragEnd = (result) => {
    console.log(result);

    if (!result.destination) {
      return;
    }

    // eslint-disable-next-line default-case
    switch (stage) {
      case 1:
        if (
          result.destination.droppableId === "neutral-cards" &&
          result.source.droppableId === "neutral-cards"
        ) {
          const oldIndex = result.source.index-1;
          const newOrder = [...neutralCards.slice(0, oldIndex),
                            ...neutralCards.slice(oldIndex+1),
                            neutralCards[oldIndex]];
          setNeutralCards(newOrder);

          const payload = {
              dragCardId: result.source.index,
              dropCardId: result.destination.index,
              questionGroupName: groupName,
              questionText: quesiton,
          };
          const config = {
            headers: {
              "Content-Type": "application/json",
            }
          };

          // axios
          //   .put("/cards/put", payload, config)
          //   .then((res) => console.log(res))
          //   .catch((err) => console.error(err));
        }
        break;
      case 2:
        break;
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="card-container">
        {loading && (
          <CardList
            cards={neutralCards}
            className="cards neutral-cards"
            droppableId="neutral-cards"
          />
        )}
      </div>
    </DragDropContext>
  );
};

export default CardContainer;
