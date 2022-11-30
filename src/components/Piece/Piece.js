import {DragPreviewImage, useDrag} from 'react-dnd'


import './Piece.css'

export const Piece = ({piece: {type, color}}) => {

    const [{isDragging}, drag, preview] = useDrag({
        type: 'piece',
        item: () => {
            return {
                id: `${color}${type.toUpperCase()}`,
            }
        },
        collect: (monitor) => {
            return {isDragging: !!monitor.isDragging()}
        }
    })

    const imgSrc = `./images/${color}${type.toUpperCase()}.png`
    return (
        <>
            <DragPreviewImage connect={preview} src={imgSrc}/>
            <div
                className={'pieceContainer'}
                ref={drag}
                style={{opacity: isDragging ? 0.2 : 1}}
            >
                <img
                    className={'pieceImg'}
                    src={imgSrc}
                    alt={`${color}${type.toUpperCase()}`}/>
            </div>
        </>
    )
}