import {Draggable} from 'react-beautiful-dnd';
import styled from "styled-components";

const Card = ({ card }) => {
    const mediaUrl = "/media/";

    const StyledContainer = styled.div`
    cursor: ${card => 
               (card.isDragging ? 'grab;' : 'pointer;')}
  `;

    return (
        card.cardType.imageName !== "default-image" ? 
        <Draggable draggableId={`${card.id}`} index={card.id}>
    {(provided, snapshot) => (
      <StyledContainer
        id = 'styled-cont'
        ref = {provided.innerRef}
        isDragging = {snapshot.isDragging}
        {...provided.draggableProps}
        {...provided.dragHandleProps}>
          <div className="card">
            <img src={mediaUrl + card.cardType.imageName} alt="" />
        </div>
       </StyledContainer>
     )}
        </Draggable> :
        <div className="card">
            <img src={mediaUrl + card.cardType.imageName} alt="" />
        </div>
    )
}

export default Card;