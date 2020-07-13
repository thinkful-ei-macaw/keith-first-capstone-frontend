import React, { Component } from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom'
import DisplayMonster from './Components/MonsterIndex/DisplayMonster'
import View from './View'
import DataContext from './context/Context'
import apiService from './services/monster-index-api-service'



export default class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        monsters: []
      }
    }

    // this uses the fetch in apiService and sets the result to State
           getMonsters = () =>  {
            apiService.monsterAPI() 
            .then(monsters => {
              
              this.setState({monsters})
            })
            .catch(err => {
              this.setState({
                monsters: [{
                  base_setting: "Error",
                  monster_name: "Error Monster",
                  climate: "Error Pages",
                  frequency: "Unfortunately common",
                  organization: "solitary",
                  activity: "Unknown",
                  diet: "Souls of developers",
                  intelligence: "low (2-4)",
                  treasure: "None",
                  alignment: "chaotic evil",
                  appearing: "1",
                  ac: "10",
                  movement: "12",
                  hd: "1",
                  thac0: "20 (+0)",
                  attacks: "none",
                  damage: "none",
                  special_attacks: "",
                  special_defense: "",
                  magic_resistance: "",
                  size: "small",
                  morale: "7(skittish)",
                  xp: "0",
                  summary: "something went wrong.  ",
                  habitat: "error",
                  ecology: "error"
                }],
                isError: err
              })
            })
          }
  
  componentDidMount() {
    this.getMonsters();
  }

  
            

  render() {
// this sets what is in State into Context as well as the getMonsters function used in MonsterIndex
      const contextValue = {
        monsters: this.state.monsters,
        getMonsters: this.getMonsters
      }

    return (
      <div className='view'>
        <DataContext.Provider value={contextValue}>
         <Switch>
            <Route exact path='/'><View /></Route>
            <Route exact path='/monster/:id' component={DisplayMonster}
               />
            <Route path='/' render={ () => (
              <Redirect to='/' />
            )} />
         </Switch>
         </DataContext.Provider>
           
        </div>
      
    )
  }
}



