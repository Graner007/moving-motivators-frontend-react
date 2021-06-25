const Card = ({ card }) => {
    const mediaUrl = "/media/";

    return (
        <div className="card">
            <img src={mediaUrl + card.cardType.imageName} alt="" />
        </div>
    )
}

export default Card
