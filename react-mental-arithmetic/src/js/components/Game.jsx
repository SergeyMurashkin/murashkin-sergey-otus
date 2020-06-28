import React from 'react';
import {Link} from 'react-router-dom';

class Game extends React.Component{

    render() {

        return (
            <div>
                <div className="game">
                    <Link to='/'>Х ОТМЕНА</Link>

                    <div>Timer</div>
                </div>
                <div>
                    Уравнение
                </div>
                <div>
                    <div>
                        numbers
                    </div>
                    <div>
                        symbols
                    </div>
                </div>
            </div>
        );
    }
}  

export default Game;