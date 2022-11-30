import {Chess} from "chess.js";
import {BehaviorSubject} from 'rxjs'
import {logDOM} from "@testing-library/react";

// let promotion = 'rnb2bnr/pppPkppp/8/4p3/7q/8/PPPP1PPP/RNBQKBNR w KQ - 1 5'
// let draw_stalemate = '4k3/4P3/4K3/8/8/8/8/8 b - - 0 78'
let checkmate = 'rnb1kbnr/pppp1ppp/8/4p3/5PPq/8/PPPPP2P/RNBQKBNR w KQkq - 1 3'

const chess = new Chess()

export const gameSubj = new BehaviorSubject()

export const initGame = () => {
    updateGame()
}
export const moveHandler = (from, to) => {
    const promotions = chess.moves({verbose: true}).filter(m => m.promotion)
    if (promotions.some(p => `${p.from}:${p.to}` === `${from}:${to}`)) {
        const waitingForPromotion = {from, to, color: promotions[0].color}
        updateGame(waitingForPromotion);
    }

    const {waitingForPromotion} = gameSubj.getValue()

    if (!waitingForPromotion) {
        move(from, to);
    }

}
export const move = (from, to, promotion) => {
    let tmpMove = {from, to};
    if (promotion) {
        tmpMove.promotion = promotion;
    }

    const isLegalMove = chess.move(tmpMove);
    if (isLegalMove) {
        updateGame();
    }
    return false;
}

const updateGame = (waitingForPromotion) => {
    const newGame = {
        board: chess.board(),
        waitingForPromotion,
        history: chess.history({verbose: true}),
        turn: chess.turn(),
        isDraw: chess.isDraw(),
        isCheck: chess.isCheck(),
        isCheckMate: chess.isCheckmate()
    }
    gameSubj.next(newGame);
}