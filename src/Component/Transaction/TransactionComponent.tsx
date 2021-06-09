import React from 'react';

export class Transaction extends React.Component<any,any> {
    constructor(props:any){
        super(props);
        this.state = {
            data : this.props.details
        }
    }

    render(){
        return(
            <div>
                <header>Transaction</header>
                {this.state.data.map((tr:any,i:any)=><div key={i}>{tr}</div>)}
            </div>
        )
    }
}