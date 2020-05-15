import React,{useState,useEffect} from 'react';

import './App.css';
import axios from 'axios'
class Shop extends React.Component {

   constructor(){
       super()
       this.state={
           stateName:"",
           active:0,
           dead:0,
           recover:0,
           city:"",
           confirm:0


       }
       
     
       this.handleEvent = this.handleEvent.bind(this)
       this.handle = this.handle.bind(this)
       this.allele = this.allele.bind(this)
       this.show= this.show.bind(this)
   }
  
    componentDidMount(){
        axios.get('https://api.covid19india.org/state_district_wise.json')
        .then(response=>
            this.setState({
                data :response.data,
                        })
        )
        .catch(error=>
            console.log(error)
        )
    }
   handleEvent(event){
    this.setState({
        stateName:event.target.value
    })
    }
    handle(event){
        this.setState({
           city:event.target.value
        })
        }
    allele(res){
       console.log("jelli")
       this.setState({
        active:res.districtData[this.state.city].active,
        dead:res.districtData[this.state.city].deceased,
        recover:res.districtData[this.state.city].recovered,
        confirm:res.districtData[this.state.city].confirmed
       
    })
    console.log(res.districtData[this.state.city])
       
    }
    show(event){
        const state = this.state.stateName;
        
        console.log(this.state.stateName)
       const loop =this.state.data[state];
    //    console.log(this.state.data[state].districtData[this.state.city].active)
       if(this.state.data[state]){
       
       this.allele(this.state.data[state])}

 
           console.log("errr")
       

    }
    render(){
       
  


  return (
    <div className="App">
      <h1>
         Covid-19 Page
    
        </h1>
    <span>
        City and State Must have First letter Capital
        
        </span>
        <br/>
    <input placeholder="State Name" type="text" onChange={this.handleEvent} value = {this.state.stateName} />
    
    <input placeholder="City"  type="text" onChange={this.handle} value = {this.state.city} />
    <button onClick={this.show} > Click me </button>
    <div>active :{
        this.state.active
    }
    </div>
    <div>dead:{
        this.state.dead
    }
    </div>
    <div>recover :
        {this.state.recover}
    </div>
    <div>confirm :
        {this.state.confirm}
    </div>
    </div>
  );
}
}

export default Shop;
