import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import DataContext from '../../context/Context'


export default class MonsterIndex extends Component {
  static contextType = DataContext;


  componentDidMount() {
    this.context.getMonsters()
    }
    
   showNames = () => {
     if (this.context.monsters) {
       return <>
       <div className='monsterIndexWrapper'>
      <h2>Here's the stuff to browse</h2>
      <section className='indexList'>
       <ul>
          {this.context.monsters.map((a) => (
            <li key={a.id}><Link to={"/monster/"+a.id}>{a.monster_name}</Link></li>
          ))}         
      </ul>
      </section>
    </div>
    </>

     }
     else {
       return <>
       <p>Seems there was a database error...sorry</p>
       <p>Try again in ~30 seconds; if that doesn't work, then something 
         is seriously wrong.
       </p>
       </>
     }
   }

  render() {

  return(
    <>
   {this.showNames()}
   </>
  )
}
}