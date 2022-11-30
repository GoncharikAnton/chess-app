import './Promote.css'
import {Square} from "../Square/Square";
import {move} from '../../Game'

const promotePieces = ['r', 'n', 'b', 'q'];

export const Promote = ({promotion: {from, to, color}}) => {


    return (
        <div
            className={'promoteContainer'}
        >
            {promotePieces.map((p, i) => (
                <div
                    className={'promoteSquare'}
                    key={i}
                >
                    <Square
                        black={i % 3 === 0}
                    >
                        <div
                            className={'pieceContainer'}
                            onClick={() => move(from, to, p)}
                        >
                            <img
                                className={'pieceImg pointer'}
                                src={`./images/${color}${p.toUpperCase()}.png`} alt={`${color}${p.toUpperCase()}`}/>
                        </div>
                    </Square>
                </div>
            ))}
        </div>
    )
}