import React from "react";
import {Square} from "../Square/Square";
import {Piece} from "../Piece/Piece";

export const BoardSquare = ({piece}) => {
    return (
        <div>
            <Square>
                <Piece
                piece={piece}
                />
            </Square>
        </div>
    )
}