import React from 'react';
import {Link} from 'react-router-dom';

class Menu extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            dayOfRegistration:  new Date('12-09-2019'),
            duration: 1,
            complexity: 1
        };

        this.changeDuration = this.changeDuration.bind(this);
        this.changeСomplexity = this.changeСomplexity.bind(this);
    }

    changeDuration(e) {
        this.setState({
            duration: e.currentTarget.value
        });
    }

    changeСomplexity(e) {
        this.setState({
            complexity: e.currentTarget.value
        });
    }

    render() {
        let daysCount = Math.ceil(Math.abs( new Date().getTime() - this.state.dayOfRegistration.getTime()) / (1000 * 3600 * 24));
        let duration = this.state.duration;
        let complexity = this.state.complexity;

        return (
            <div className="menu">
                
                <h1>Привет!</h1>
                <p>Добро пожаловать на {daysCount} тренировочный день</p>
                <p>Ваш последний результат - решено {} из {}.</p>
                <p>Общая точность {}%</p>

                <div>
                    <p>Настройки</p>
                    
                    
                    {/* <input type="range" id="r1" min="1" max="15" value={duration} onInput={this.changeDuration}/> */}
                    
                    <div className="demo">
                        <div className="range-slider">
                            <input type="range" value={duration} onInput={this.changeDuration} min="1" max="15" range="true"/>
                            <span className="range-value">{duration}</span>
                        </div>
                        <p id="durationValue">Длительность {duration} минут</p>
                    </div>


                    <input type="range" id="r2" min="1" max="10" value={complexity} onInput={this.changeСomplexity}/>
                    <p id="complexity">Сложность {complexity}</p>

                    <div>
                        <p>
                            <input type="checkbox" id="sum" name="sum" value="summation"/>
                            <label for="sum">Суммирование</label>
                        </p>
                        <p>
                            <input type="checkbox" id="diff" name="diff" value="difference"/>
                            <label for="diff">Разность</label>
                        </p>
                        <p>
                            <input type="checkbox" id="multi" name="multi" value="multiplication"/>
                            <label for="multi">Умножение</label>
                        </p>
                        <p>
                            <input type="checkbox" id="div" name="div" value="division"/>
                            <label for="div">Деление</label>  
                        </p>
                        <p>
                            <input type="checkbox" id="expon" name="expon" value="exponentiation"/>
                            <label for="expon">Возведение в степень</label>
                        </p>
                    </div>
                </div>

                <button >
                    <Link to='/game' >Play!</Link>
                </button>
            </div>
        );
    }

}  

export default Menu;