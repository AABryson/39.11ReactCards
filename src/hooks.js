import React, {useState} from 'react'

function useFlip(initialState=true) {
    const [stateFacing, setStateFacing] = useState(initialState)
//#why not pass in stateFacing
    const flipCard = () => {
        setStateFacing(stateFacing => !stateFacing)
    }
    return [stateFacing, flipCard]

}

export default useFlip

// function PlayingCard({ front, back = backOfCard }) {
//     const [isFacingUp, setIsFacingUp] = useState(true);
//     const flipCard = () => {
//       setIsFacingUp(isUp => !isUp);
//     };
//     return (
//       <img
//         src={isFacingUp ? front : back}
//         alt="playing card"
//         onClick={flipCard}
//         className="PlayingCard Card"
//       />
//     );
//   }

  
//   function PokemonCard({ front, back, name, stats }) {
//     const [isFacingUp, setIsFacingUp] = useState(true);
//     const flipCard = () => {
//       setIsFacingUp(isUp => !isUp);
//     };
//     return (
//       <div onClick={flipCard} className="PokemonCard Card">
//         {isFacingUp ? (
//           <div className="PokemonCard-front">
//             <img src={front} alt={`{name} front`} />
//             <div>
//               <p className="PokemonCard-name">{name}</p>
//               <ul className="PokemonCard-stats">
//                 {stats.map(stat => (
//                   <li key={stat.name}>
//                     <em>{stat.name}</em>: {stat.value}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ) : (
//           <div className="PokemonCard-back">
//             <img src={back} alt={`{name} back`} />
//           </div>
//         )}
//       </div>
//     );
//   }