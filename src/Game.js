import {Chess} from "chess.js";
import {BehaviorSubject} from 'rxjs'

let promotion = 'rnb2bnr/pppPkppp/8/4p3/7q/8/PPPP1PPP/RNBQKBNR w KQ - 1 5'

const chess = new Chess()

export const gameSubj = new BehaviorSubject({
    board: chess.board()
})

export const move = (from, to) => {
    const isLegalMove = chess.move({from, to})
    if(isLegalMove){
        gameSubj.next({board: chess.board()})
    }
    return false
}
