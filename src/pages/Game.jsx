const Game = () => {
    const pieces = {
        black: {
            rook: '/src/assets/images/pieces/black/rook.png',
            knight: '/src/assets/images/pieces/black/knight.png',
            bishop: '/src/assets/images/pieces/black/bishop.png',
            queen: '/src/assets/images/pieces/black/queen.png',
            king: '/src/assets/images/pieces/black/king.png',
            pawn: '/src/assets/images/pieces/black/pawn.png',
        },
        white: {
            rook: '/src/assets/images/pieces/white/rook.png',
            knight: '/src/assets/images/pieces/white/knight.png',
            bishop: '/src/assets/images/pieces/white/bishop.png',
            queen: '/src/assets/images/pieces/white/queen.png',
            king: '/src/assets/images/pieces/white/king.png',
            pawn: '/src/assets/images/pieces/white/pawn.png',
        },
    };

    const renderPiece = (type, color) => (
        <img src={pieces[color][type]} alt={`${type}-${color}`} className="chess-piece" />
    )

    return (
        <div className="chess-board">
            <div className="cell">{renderPiece('rook', 'black')}</div>
        </div>
    );
};

export default Game;
