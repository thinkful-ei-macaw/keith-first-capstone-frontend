import React, {Component} from 'react'
import DataContext from '../../context/Context'
import {Link} from 'react-router-dom'


export default class MonsterIndex extends Component {
  static contextType = DataContext;
  





render(){
  // Figures out which monster to link to

  const foundMonster = this.context.monsters.find(m => m.id.toString() === this.props.match.params.id) || {blank: true}
  
  return !foundMonster.blank ? (
    <div className='displayWrapper'>
    <h2 id='monName'>{foundMonster.monster_name}</h2>
    <div className='homeLink'><Link to='/'>Home</Link></div>
          
          <ul>
            <li>
              {/* this is the exact color and format used in the offical book */}
              <span className='blue'>Base Setting:</span> {foundMonster.base_setting}
            </li>
            <li>
            <span className='blue'>Climate/Terrain:</span> {foundMonster.climate}
            </li>
            <li>
              <span className='blue'>Frequency:</span> {foundMonster.frequency}  
            </li>
            <li>
              <span className='blue'>Organization:</span> {foundMonster.organization}       
              
            </li>
            <li>
              <span className='blue'>Activity Cycle:</span> {foundMonster.activity}    
              
            </li>
            <li>
              <span className='blue'>Diet:</span> {foundMonster.diet}  
            </li>
            <li>
              <span className='blue'>Intelligence:</span> {foundMonster.intelligence}
            </li>
            <li>
              <span className='blue'>Treasure:</span> {foundMonster.treasure}
            </li>
            <li>
              <span className='blue'>Alignment:</span> {foundMonster.alignment}       
            </li>
            <li>
              <span className='blue'>No. Appearing:</span> {foundMonster.appearing}
            </li>
            <li>
              <span className='blue'>Armor Class:</span> {foundMonster.ac}
            </li>
            <li>
              <span className='blue'>Movement:</span> {foundMonster.movement}
            </li>
            <li>
              <span className='blue'>Hit Dice:</span> {foundMonster.hd}
            </li>
            <li>
              <span className='blue'>THAC0:</span> {foundMonster.thac0}
            </li>
            <li>
              <span className='blue'>No. of Attacks:</span> {foundMonster.attacks}
            </li>
            <li>
              <span className='blue'>Damage/Attack:</span> {foundMonster.damage}
            </li>
            <li>
              <span className='blue'>Special Attacks:</span> {foundMonster.special_attacks}
            </li>
            <li>
              <span className='blue'>Special Defenses:</span> {foundMonster.special_defense}
            </li>
            <li>
              <span className='blue'>Magic Resistance:</span> {foundMonster.magic_resistance}
            </li>
            <li>
              <span className='blue'>Size:</span> {foundMonster.size}
            </li>
            <li>
              <span className='blue'>Morale:</span> {foundMonster.morale}
            </li>
            <li>
              <span className='blue'>XP Value:</span> {foundMonster.xp}
            </li>
            <li><p></p>
              <span className='blue'>Summary:</span> <p>{foundMonster.summary}</p>
            </li>
            <li>
              <span className='blue'>Habitat/Society:</span> <p>{foundMonster.habitat}</p>
            </li>
            <li>
              <span className='blue'>Ecology:</span> <p>{foundMonster.ecology}</p>
            </li>
          </ul>
          <div className='homeLink'><Link to='/'>Home</Link></div>


    </div>
    
  )
  : (
    <p>Monster not found</p>
  )
}

  }