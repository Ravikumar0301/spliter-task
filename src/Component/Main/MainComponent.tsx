import React from 'react';
import './Main.css';
import {AddDetails} from '../AddDetial/AddDetailComponent';
import {Transaction} from '../Transaction/TransactionComponent';

export class Main extends React.Component <any,any>{

    constructor(props:any){
        super(props);
        this.state = {
            addDetails_Data: []
        }
    }
    
    getDetails = (data:any) => {
        this.state.addDetails_Data.push(data)
        this.setState({addDetails_Data :this.state.addDetails_Data })
    }


    render(){
        console.log(this.state.addDetails_Data)
        return(
            <div className ="grid-container">
                <div className="grid-header">
                    <header>Expensive Tracker Basic</header>
                </div>
                <div className="details">
                    <AddDetails childData = {this.getDetails} />
                </div> 
                <div className="transaction">
                    <Transaction details = {this.state.addDetails_Data} />
                </div> 
            </div>
        )
    }
}

