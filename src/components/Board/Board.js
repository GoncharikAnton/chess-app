import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import './Board.css';

import {BoardSquare} from "../BoardSquare/BoardSquare";


export const Board = ({board}) => {


    const getLocation = (i) => {
        const {x, y} = getXYLocation(i);
        const letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'][x];
        return `${letter}${y + 1}`
    }

    const getXYLocation = (i) => {
        const x = i % 8;
        const y = Math.abs(Math.floor(i / 8) - 7);
        return {x, y};
    }

    const isBlackSquare = (i) => {
        const {x, y} = getXYLocation(i);

        if((x + y) % 2 === 1){
            return true  // black
        }
        return false // white
    }

    return (
        <div className={'Board'}>
            {board.flat().map((piece, i) => (
                <div
                key={i}
                className={'square'}
                >
                    {<BoardSquare
                        piece={piece}
                        black={isBlackSquare(i)}
                        location={getLocation(i)}
                    />}
                </div>
            ))}
        </div>
    )
    

}