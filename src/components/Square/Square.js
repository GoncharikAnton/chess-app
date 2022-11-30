import './Square.css'

export const Square = ({children, black}) => {

    const bgSquareColor = black ? 'squareBlack' : 'squareWhite'

    return (
        <div
            className={`${bgSquareColor} boardSquare`}
        >
            {children}
        </div>
    )
}