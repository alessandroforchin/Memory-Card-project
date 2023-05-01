import Card from "./Card";
import '../styles/Game.css'

const Game = ({ randomCards, onCardClick }) => {
    return (
        <div className="gameboard-container">
            {randomCards.map((card) => (
                <Card 
                    key={card.id}
                    img={card.img}
                    text={card.text}
                    onCardClick={() => onCardClick(card.id)}
                />
            ))}
        </div>
    )
}

export default Game;