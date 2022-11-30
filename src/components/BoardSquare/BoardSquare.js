import React from "react";
import {Square} from "../Square/Square";
import {Piece} from "../Piece/Piece";
import './BoardSquare.css';
import {useDrop} from "react-dnd";

export const BoardSquare = ({piece, black}) => {
    const [, drop] = useDrop({
        accept: 'piece',
        drop: (item) => console.log(item)
    })
    return (
        <div
            className={'BoardSquare'}
            ref={drop}
        >
            <Square
                black={black}
            >
                {
                    piece && <Piece
                        piece={piece}
                    />
                }
            </Square>
        </div>
    )
}