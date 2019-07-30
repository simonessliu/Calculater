import React from 'react';

export default class Button extends React.Component{
    render(){ 
        const { onClick, size, value, label } = this.props
        return(
            <div onClick={onClick} className="Button" data-size={size} data-value={value}>
                {label}
            </div>  
        )
    }
}
