export default function Gameover({ onPlayAgain }) {
    return (
        <div className="game-over">
            <h1>Congratulations!</h1>
            <h3>You get maximum scores!</h3>
            <button className="play-again" onClick={onPlayAgain}>Play again</button>
        </div>
    )
}