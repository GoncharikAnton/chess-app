import { Chess } from 'chess.js'
import {Board} from "../../../components/Board/Board";
import {useEffect, useState} from "react";
import {gameSubj} from "../../../Game";
import './GamePage.css'


export const GamePage = () => {

    const [board, setBoard] = useState([])
    useEffect(() => {
        const subscribe = gameSubj.subscribe(game => {
            setBoard(game.board)
        })
        return () => subscribe.unsubscribe()
    }, [])

    return(
        <div className={'GamePage'}>
            <div className={'boardContainer'}>
                <Board
                    board={board}
                />
            </div>

        </div>
    )
}