import React from "react";
import './sorting.css';

export default class sorting extends React.Component {
    constructor(props)  
    {
        super(props);

        this.state = 
        {
            array: [],
        };
    }
    componentDidMount()
    {
        this.resetarr();
    }
    //reset function
    resetarr() 
    {
        const array = [];
        for (let i = 0; i < 100 ; i++)
        {
            array.push(RandomNumberGenerator(1,400));
        }
        this.setState({array});
    }

    render(){
        const {array} = this.state;
        
        return(
            <>
                {array.map((value,idx) => (
                    <div className="bar" key = {idx}>
                        {value}
                    </div>
                ))}
            </>
        );
    }
    
    
}

//create random number function
function RandomNumberGenerator(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}