import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Card from "./Card";

const StyledContainer = styled.div``;

const CardList = ({cards, className, droppableId}) => {

    return (
        <Droppable droppableId={droppableId}>
            {provided => (
                <StyledContainer ref={provided.innerRef} {...provided.droppableProps}>
                    <div className={className}>
                        {cards.map((card) => (
                            <Card card={card} key={card.id} />  
                        ))}
                    </div>
                    {provided.placeholder} 
                </StyledContainer>
            )}
        </Droppable>
    )
}

export default CardList;