import React, { useState } from "react";
import Header from "./Header";
import Game from "./Game";
import Gameover from "./Gameover";
import Mario from '../img/Mario.png';
import Ash from '../img/Ash.png';
import Angel from '../img/Angel.png';
import Wario from '../img/Wario.png';
import Pacman from '../img/Pacman.png';
import Zelda from '../img/Zelda.png';


export default function GameBoard() {

    const cards = [
        { id: 0, img: Mario, text: 'Super Mario' },
        { id: 1, img: Ash, text: 'Ash Ketchu' },
        { id: 2, img: Angel, text: 'Angel' },
        { id: 3, img: Wario, text: 'Wario' },
        { id: 4, img: Pacman, text: 'Pacman' },
        { id: 5, img: Zelda, text: 'Zelda' }
    ]

    const maxScore = cards.length;
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    const initialState = Array(cards.length).fill(false);
    const [isClicked, setIsClicked] = useState(initialState);
    const [isWin, setIsWin] = useState(false);

    // increase score
    function handleIncreaseScore() {
        const newScore = score + 1;
        setScore(newScore);
        if (newScore > bestScore) {
            setBestScore(bestScore + 1);
        }
        if (newScore === maxScore) handleWin();
    }

    function handleWin() {
        setIsWin(true);
    }

    // reset score
    function handleResetScore() {
        setScore(0);
    }

    // play again (reset everything)
    function playAgain() {
        setScore(0);
        setIsClicked(initialState);
        setIsWin(false);
    }

    function cardStateToTrue(index) {
        const nextState = isClicked.map((val, i) => {
            if (i === index) {
                return true;
            } else {
                return val;
            }
        });
        setIsClicked(nextState);
    }

    function handleCardClick(index) {
        if (!isClicked[index]) {
            cardStateToTrue(index);
            handleIncreaseScore();
        } else {
            setIsClicked(initialState);
            handleResetScore();
        }
    }

    const randomizeCards = (cards) => {
        const randomCards = [];
        while (cards.length !== randomCards.length) {
            const randNum = Math.floor(Math.random() * cards.length);
            if (!randomCards.some((card) => card.id === cards[randNum].id)) {
                randomCards.push(cards[randNum]);
            }
        }
        return randomCards;
    }

    const randomCards = randomizeCards(cards);

    if (isWin) {
        return (
            <div>
                <Header 
                    score={score}
                    bestScore={bestScore}
                    onIncreaseScore={handleIncreaseScore}
                    onResetScore={handleResetScore}
                />
                <Gameover onPlayAgain={playAgain}/>
            </div>
        )
    }

    return (
        <div>
            <Header 
                score={score}
                bestScore={bestScore}
                onIncreaseScore={handleIncreaseScore}
                onResetScore={handleResetScore}
            />
            <Game 
                onCorrectAnswer={handleIncreaseScore}
                onWrongAnswer={handleResetScore}
                randomCards={randomCards}
                onCardClick={handleCardClick}
            />
        </div>
    )
}
