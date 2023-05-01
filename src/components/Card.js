import '../styles/Card.css'

export default function Card({ cardId, img, text, onCardClick }) {
    return (
        <div className="card" data-id={cardId} onClick={onCardClick}>
            <div className="image-container">
                <img src={img} alt={text} />
            </div>
            <p>{text}</p>
        </div>
    )
}