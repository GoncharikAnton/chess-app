import React, {useEffect, useState} from "react";
import {Square} from "../Square/Square";
import {Piece} from "../Piece/Piece";
import {useDrop} from "react-dnd";
import {moveHandler} from '../../Game';
import {gameSubj} from '../../Game'


import './BoardSquare.css';
import {Promote} from "../Promote/Promote";

export const BoardSquare = ({piece, black, location}) => {

    const [promotion, setPromotion] = useState(null)
    const [, drop] = useDrop({
        accept: 'piece',
        drop: (item) => {
            const {type, color, fromLocation} = item;
            moveHandler(fromLocation, location)

        }
    })

    useEffect(() => {
        const subscribe = gameSubj.subscribe(
            ({waitingForPromotion}) => (
                waitingForPromotion && waitingForPromotion.to === location
                    ?
                    setPromotion(waitingForPromotion)
                    :
                    setPromotion(null)
            )
        )
        return () => subscribe.unsubscribe()
    }, [])

    return (
        <div
            className={'BoardSquare'}
            ref={drop}
        >
            <Square
                black={black}
            >
                {promotion ? (
                    <Promote
                        promotion={promotion}
                    />
                ) : piece ? (
                    <Piece
                        piece={piece}
                        location={location}
                    />) : null}
            </Square>
        </div>
    )
}