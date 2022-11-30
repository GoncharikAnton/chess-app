import {Cell} from "../Cell/Cell";
import './Board.css'
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";


// export const Board = ({chess}) => {
//
//     const board = chess.board()
//     const readyBoard = [];
//
//     for (let i = 0; i < board.length; i++) {
//         const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
//         let num = 0;
//         for (let j = 0; j < board.length; j++) {
//             let color = 'white'
//             if (i % 2 !== j % 2) {
//                 color = 'gray'
//             }
//             readyBoard.push(<Cell
//                 key={`${i}${j}`}
//                 cell={board[i][j]}
//                 color={color}
//                 row={i}
//                 col={j}
//                 letter={letters[num]}
//                 location={`${letters[num]}${j}`}
//                 game={chess}
//             />)
//             num++;
//         }
//     }
//
//     return (
//         <DndProvider backend={HTML5Backend}>
//             <div className={'Board'}>
//                 {readyBoard.map(item => item)}
//             </div>
//         </DndProvider>
//     )
// }
export const Board = ({board}) => {

    return (
        <div className={'Board'}>
            {board.map((piece, i) => (
                <div
                key={i}
                className={'square'}
                >
                    <p>{JSON.stringify(piece)}</p>
                </div>
            ))}
        </div>
    )
    

}