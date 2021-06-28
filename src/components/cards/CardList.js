import Card from "./Card";

const CardList = ({cards, className}) => {
    return (
        <div className={className}>
            {cards.map((card) => (
                <Card card={card} key={card.id} />  
            ))}
        </div>
    )
}

export default CardList;