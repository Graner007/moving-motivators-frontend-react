import CardList from "./CardList";
import { useState, useEffect } from "react";
import axios from "axios";
import { DragDropContext } from 'react-beautiful-dnd';

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

    let onDragEnd = (result) => {
        if (!result.destination) {
          return;
        }

        let sourceIdx = parseInt(result.source.index)
        let destIdx = parseInt(result.destination.index)
        /* let draggedLink = toDo[0].list[sourceIdx]
        let newList = toDo[0].list.slice();
        newList.splice(sourceIdx, 1);
        newList.splice(destIdx, 0, draggedLink)
        toDo[0].list = newList;*/
    }

    return (
        <DragDropContext onDragEnd = {onDragEnd}>
            <div className="card-container">
                {loading && <CardList cards={cards} />}
            </div>
        </DragDropContext>
    )
}

export default CardContainer;