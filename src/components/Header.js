import React from "react";
import '../styles/Header.css'

export default function Header({ score, bestScore }) {
    return (
        <div className="header-container">
            <h1 className="title">Memory Card Game</h1>
            <div className="score-tab">
                <h3>Score: {score}</h3>
                <h3>Best core: {bestScore}</h3>
            </div>
            <p className="game-rules">Get points by clicking on an image but don't click on any more than once!</p>
        </div>
    )
}