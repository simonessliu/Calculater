import React from 'react';

export default class Display extends React.Component {
    render(){
        const {data} = this.props
        return(
            <div className="Display">{data && data.join('')}</div>         
        )
    }
}