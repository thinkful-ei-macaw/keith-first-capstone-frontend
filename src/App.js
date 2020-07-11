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
            .catch(console.error)
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
            <Route exact path='/monster/:id' render={routeProps => {
             
              // Figures out which monster to link to
              const foundMonster = this.state.monsters.find(m => m.id.toString() === routeProps.match.params.id)
              return <DisplayMonster monster={foundMonster} />
              
            }}></Route>
            <Route path='/' render={ () => (
              <Redirect to='/' />
            )} />
         </Switch>
         </DataContext.Provider>
           
        </div>
      
    )
  }
}



