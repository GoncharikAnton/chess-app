import {Chess} from "chess.js";
import {BehaviorSubject} from 'rxjs'

const chess = new Chess()

export const gameSubj = new BehaviorSubject({
    board: chess.board()
})


