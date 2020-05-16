import React from 'react';

import './App.css';
import axios from 'axios'
class  About extends React.Component {
   
   constructor(){
     super()
     this.state={
       div:undefined,
       data:'',
       datas:[<div> WHOLE DATA   </div>],
       hide :""
     }

     this.click = this.click.bind(this)
   }

   componentDidMount(){
    //  var loop =[{"name":"hello "},{name:" Atul"}]
    //  this.setState({
    //   div: loop.map((lp)=><div> {lp.name} </div>)

    //  })

     axios.get('https://api.covid19india.org/state_district_wise.json')
        .then((response)=>
           
            this.setState({
                div :response,
               
                        })
                
        )
        .catch(error=>
            console.log(error)
        )
        console.log(this.state.div)
   }
  click (){
    this.setState({
      hide:"hide"
    })
    this.setState(prevState => ({
      datas: [
          ...prevState.datas, 
          <div> ATUL PANDEY 0826 </div>
      ]
  }))
    console.log(this.state.div)
    // this.setState({
    //   data:this.state.div.data.map((dis)=>{
    //     cons
    //   })
    // })
    const check =this.state.div;
    
    console.log(check.data)
    Object.keys(check.data).map((data)=>{
      console.log(data)
      this.setState(prevState => ({
        datas: [
            ...prevState.datas, 
            <div style={{"color":"green"}}> <h3> {data}</h3> </div>
        ]
    }))
     console.log(check.data[data])


    Object.keys(check.data[data].districtData).map((keys)=>{
      console.log(keys);
      this.setState(prevState => ({
        datas: [
            ...prevState.datas, 
            <div style={{"color":"red"}}> {keys} </div>,
            <div style={{"color":"blue" ,"display":"flex","flexDirection":"row","textAlign" :"center","justifyContent" :"center","alignItems":"center"}}> 
            <div > Active {check.data[data].districtData[keys].active}  </div>
            <div > Recover {check.data[data].districtData[keys].recovered}  </div>
            <div > Confirm {check.data[data].districtData[keys].confirmed}  </div>
            <div > Death {check.data[data].districtData[keys].deceased}  </div>
         </div>
        ]
    }))
    })


    })
  //  check.map((dis)=>{
  //         console.log(dis)
  //   })
  }


  render(){
  return (
    <div className="App">
      <h1>About Page</h1>
      <button className={this.state.hide} onClick={this.click} > clickme </button>
      {this.state.datas}
    </div>
  );
}

}

export default About;
