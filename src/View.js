import React, { Component } from 'react'
import HomePage from './Components/HomePage/HomePage';
import MonsterIndex from './Components/MonsterIndex/MonsterIndex';
import TemplatePage from './Components/TemplatePage/TemplatePage';
import Create from './Components/Create/Create';

export default class View extends Component {
  constructor(props){
    super(props)
      this.state = {
        hideHome: false,
        hideIndex: true,
        hideTemplate: true,
        hideCreate: true      
      }
    }

// these return the proper view for which section of the site the user is on

    homePage = () => {
      if (this.state.hideHome === false){
        
        return <div className='home'><HomePage /></div>
      }
    }

    monsterIndex = () => {
      if (this.state.hideIndex === false){
        
        return <div className='index'><MonsterIndex /></div>
      }
        
    }

    templatePage = () => {
      if (this.state.hideTemplate === false){
        
        return <div className='template'><TemplatePage /></div>
      }

    }

    create = () => {
      if (this.state.hideCreate === false){
  
        return <div className='create'><Create /></div>
      }

    }

    handleClickHome = () => {
    
      this.setState({
        hideHome: false,
        hideIndex: true,
        hideTemplate: true,
        hideCreate: true      
        
      })
      console.log(this.state)

      }
    

    handleClickIndex = () => {
      this.setState({
        hideHome: true,
        hideIndex: false,
        hideTemplate: true,
        hideCreate: true      
        
      })
    }

    handleClickTemplate = () => {
      this.setState({
        hideHome: true,
        hideIndex: true,
        hideTemplate: false,
        hideCreate: true      
        
      })
    }

    handleClickCreate = () => {
      this.setState({
        hideHome: true,
        hideIndex: true,
        hideTemplate: true,
        hideCreate: false      
        
      })
    }

  render() {
    return (
      <div className='App'>
        <div className='nav'>
        <ul id='nav'>
          <li><div onClick={this.handleClickHome}>home</div></li>
          <li><div onClick={this.handleClickIndex}>index</div></li>
          <li><div onClick={this.handleClickTemplate}>template</div></li>
          <li><div onClick={this.handleClickCreate}>create</div></li>
        </ul>
        </div>
        <main>
        
          {this.homePage()}
          
          
          {this.monsterIndex()}
          
          {this.templatePage()}
          
          {this.create()}
        </main>
</div>)
  }
  }
  