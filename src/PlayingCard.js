import React from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import useFlip from './hooks.js'

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  //#############array destructuring; not same as useState but is a stateful custom hook
  const [isFacingUp, flipCard] = useFlip(true);
  // const flipCard = () => {
  //   setIsFacingUp(isUp => !isUp);

  //##################Don't need handClick; add flipCard directly to jsx
  // const handleClick = () => {
  //   flipCard()
  // }
  


  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={flipCard}
      className="PlayingCard Card"
    />
  );

}
export default PlayingCard;
