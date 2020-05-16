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
           confirm:0,
           hide:"hide",
           hidecity:"hide",
           datas:[<div> WHOLE DATA THROUGHOUT  </div>],
           toggle:""


       }
       
     
       this.handleEvent = this.handleEvent.bind(this)
       this.handle = this.handle.bind(this)
       this.allele = this.allele.bind(this)
       this.show= this.show.bind(this)
       this.city= this.city.bind(this)
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
        this.setState({
            hidecity:"",
            toggle:"hide"
        })
       console.log("jelli")
       if(this.state.city==""){
           console.log("err")
       }
       else{       this.setState({
        active:res.districtData[this.state.city].active,
        dead:res.districtData[this.state.city].deceased,
        recover:res.districtData[this.state.city].recovered,
        confirm:res.districtData[this.state.city].confirmed
       
       
    })
}
 
       
    }
    show(event){
        
        const state = this.state.stateName;
        
        console.log(this.state.stateName)
       const loop =this.state.data[state];
    //    console.log(this.state.data[state].districtData[this.state.city].active)
       if(this.state.data[state]){
           setTimeout(()=>{
            Object.keys(this.state.data[state].districtData).map((keys)=>{
                console.log(keys);
                this.setState(prevState => ({
                  datas: [
                      ...prevState.datas, 
                      <div style={{"color":"red"}}> {keys} </div>,
                      <div style={{"color":"blue" ,"display":"flex","flexDirection":"row","textAlign" :"center","justifyContent" :"center","alignItems":"center"}}> 
                      <div > Active {this.state.data[state].districtData[keys].active}  </div>
                      <div > Recover {this.state.data[state].districtData[keys].recovered}  </div>
                      <div > Confirm {this.state.data[state].districtData[keys].confirmed}  </div>
                      <div > Death {this.state.data[state].districtData[keys].deceased}  </div>
                   </div>
                  ]
              }))
              })

              this.setState({
                hide:"",
                toggle:"",
                hidecity:"hide"
            })
            if(this.state.city)
           this.allele(this.state.data[state])
           },1000)
        
      
         }

 
           console.log("errr")
       

    }
city(){
    
    if(this.state.city){
        this.show();
    }
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
    <button onClick={this.show} > Click me </button>
    <div className={this.state.hide}>
    <input placeholder="City"  type="text" onChange={this.handle} value = {this.state.city} />
    <button onClick={this.city} > Click me </button>
    </div>
    <div className={this.state.toggle}>
    {this.state.datas}
   </div> <div className={this.state.hidecity}>
    
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
    </div>
  );
}
}

export default Shop;
