import React from 'react';
import './AddDetail.css'

export class AddDetails extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {
            balance: 0,
            amount:'',
            time: '',
            input_val:0
        }
        this.props.childData ("Hi");
        this.onAdd = this.onAdd.bind(this);
        this.onRemove = this.onRemove.bind(this);
    }
    
    onAdd() {
        const val = this.state.balance + this.state.input_val
        console.log(typeof(this.state.balance))
        console.log(this.state.input_val)
        return this.setState({balance: val})
    }

    onRemove(){
        const val = this.state.balance - this.state.input_val
        return this.setState({balance: val})
    }

    render(){
        return(
            <div>
                <header>Add Details</header>
                <p>Balance: {this.state.balance}</p>
                <input type="number" onChange = { (e) => {
                    this.setState({input_val: e.target.valueAsNumber })
                }}></input>
                <div>
                    <button onClick= {this.onAdd}>Add</button>
                    <button onClick={this.onRemove}>Remove</button>
                </div>
                
            </div>
        )
    }

}