import React, { useState,useEffect } from "react";
import Cardlist from "../components/Cardlist";
import Searchbox from "../components/Searchbox";
import Scroll from "../components/Scroll";
import Errorboundry from "../components/Errorboundry";
import './App.css';


    function App(){

    const[robots,setRobots]=useState([])
    const[searchfield,setSearchfield]=useState('')
    
    
   useEffect(()=> {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response=>response.json())
    .then(users=>{setRobots(users)});
   },[])

       const onSearchChange = (event) => {   
        // this.setState({searchfield:event.target.value})
          setSearchfield(event.target.value)
    }
   
        const filterredrobo=robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })  

        return !robots.length=== 0 ?<h1>LOADING</h1>:
         (<div className="tc">

          <h1 className="f1">ROBOFRIENDS</h1>  
          <Searchbox searchChange={onSearchChange}/>
          <Scroll>
            <Errorboundry>
                <Cardlist robots={filterredrobo}/>
            </Errorboundry> 
        </Scroll>
     </div>

    );
}
    
export default App;