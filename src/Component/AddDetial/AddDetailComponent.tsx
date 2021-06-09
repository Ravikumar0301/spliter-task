import React from 'react';
import './AddDetail.css'

export class AddDetails extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {
            balance: 0,
            input_val:0,showError:false
        }
    }
    
    onAdd = () => {
        if(this.state.input_val<=0){
            this.setState({
                showError: true
            });
            return;
        }
        
        const val = this.state.balance + this.state.input_val
        this.setState({balance: val,showError: false})
        let date = new Date().toString();
        this.props.childData (`Amount ${val} added to balance on ${date}`);
    }

    onRemove = () => {
        const val = this.state.balance - this.state.input_val
        this.setState({balance: val})
        let date = new Date().toString();
        this.props.childData (`Amount ${val} removed to balance on ${date}`)
    }

    render(){
        return(
            <div>
                <header>Add Details</header>
                <p>Balance: {this.state.balance}</p>
                <input type="number" min="0" onChange = { (e) => {
                    this.setState({input_val: e.target.valueAsNumber })
                }}></input>
                {
                    this.state.showError && <div> Enter valid amount </div>
                }
                <div>
                    <button onClick= {this.onAdd}>Add</button>
                    <button onClick={this.onRemove}>Remove</button>
                </div>
                
            </div>
        )
    }

}