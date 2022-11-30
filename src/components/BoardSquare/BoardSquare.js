import React from "react";
import {Square} from "../Square/Square";
import {Piece} from "../Piece/Piece";
import {useDrop} from "react-dnd";
import {move} from '../../Game';

import './BoardSquare.css';

export const BoardSquare = ({piece, black, location}) => {
    const [, drop] = useDrop({
        accept: 'piece',
        drop: (item) => {
            const {type, color, fromLocation} = item;
            move(fromLocation, location)

        }
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
                        location={location}
                    />
                }
            </Square>
        </div>
    )
}