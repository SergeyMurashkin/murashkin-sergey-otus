import React from 'react';

class CityNotFound extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="cityNotFound">
                Для выбранного города отсутствует прогноз погоды
            </div>
        );
    }

}  

export default CityNotFound;