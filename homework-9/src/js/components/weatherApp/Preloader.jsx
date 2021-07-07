import React from 'react';

class Preloader extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="preloader">
                загружаю данные...
            </div>
        );
    }

}  

export default Preloader;