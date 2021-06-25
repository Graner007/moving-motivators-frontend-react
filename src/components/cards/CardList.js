import Card from "./Card";

const CardList = ({cards}) => {
    return (
        <div className="cards">
            {cards.map((card) => (
              <Card card={card} key={card.id} />  
            ))}
        </div>
    )
}

export default CardList;