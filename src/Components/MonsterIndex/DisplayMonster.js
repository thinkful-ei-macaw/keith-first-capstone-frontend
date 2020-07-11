import React, {Component} from 'react'
// import {Link} from 'react-router-dom'


export default class MonsterIndex extends Component {
  

constructor(props) {
  super(props);

  

  if (!this.props.monster) {
    this.defaultMonster = {
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
      summary: "something went wrong.  This is a known bug that occurs when refreshing a specific monster page",
      habitat: "Simply return here via the index link and it should work",
      ecology: "I'm so sorry; I'm working on it"
    }
  } else {
    this.defaultMonster = this.props.monster;
  }

  
}




render(){

  return(
    <div className='displayWrapper'>
    <h2 id='monName'>{this.defaultMonster.monster_name}</h2>
    {/* <div className='homeLink'><Link to='/'>Home</Link></div> */}
          
          <ul>
            <li>
              {/* this is the exact color and format used in the offical book */}
              <span className='blue'>Base Setting:</span> {this.defaultMonster.base_setting}
            </li>
            <li>
            <span className='blue'>Climate/Terrain:</span> {this.defaultMonster.climate}
            </li>
            <li>
              <span className='blue'>Frequency:</span> {this.defaultMonster.frequency}  
            </li>
            <li>
              <span className='blue'>Organization:</span> {this.defaultMonster.organization}       
              
            </li>
            <li>
              <span className='blue'>Activity Cycle:</span> {this.defaultMonster.activity}    
              
            </li>
            <li>
              <span className='blue'>Diet:</span> {this.defaultMonster.diet}  
            </li>
            <li>
              <span className='blue'>Intelligence:</span> {this.defaultMonster.intelligence}
            </li>
            <li>
              <span className='blue'>Treasure:</span> {this.defaultMonster.treasure}
            </li>
            <li>
              <span className='blue'>Alignment:</span> {this.defaultMonster.alignment}       
            </li>
            <li>
              <span className='blue'>No. Appearing:</span> {this.defaultMonster.appearing}
            </li>
            <li>
              <span className='blue'>Armor Class:</span> {this.defaultMonster.ac}
            </li>
            <li>
              <span className='blue'>Movement:</span> {this.defaultMonster.movement}
            </li>
            <li>
              <span className='blue'>Hit Dice:</span> {this.defaultMonster.hd}
            </li>
            <li>
              <span className='blue'>THAC0:</span> {this.defaultMonster.thac0}
            </li>
            <li>
              <span className='blue'>No. of Attacks:</span> {this.defaultMonster.attacks}
            </li>
            <li>
              <span className='blue'>Damage/Attack:</span> {this.defaultMonster.damage}
            </li>
            <li>
              <span className='blue'>Special Attacks:</span> {this.defaultMonster.special_attacks}
            </li>
            <li>
              <span className='blue'>Special Defenses:</span> {this.defaultMonster.special_defense}
            </li>
            <li>
              <span className='blue'>Magic Resistance:</span> {this.defaultMonster.magic_resistance}
            </li>
            <li>
              <span className='blue'>Size:</span> {this.defaultMonster.size}
            </li>
            <li>
              <span className='blue'>Morale:</span> {this.defaultMonster.morale}
            </li>
            <li>
              <span className='blue'>XP Value:</span> {this.defaultMonster.xp}
            </li>
            <li><p></p>
              <span className='blue'>Summary:</span> <p>{this.defaultMonster.summary}</p>
            </li>
            <li>
              <span className='blue'>Habitat/Society:</span> <p>{this.defaultMonster.habitat}</p>
            </li>
            <li>
              <span className='blue'>Ecology:</span> <p>{this.defaultMonster.ecology}</p>
            </li>
          </ul>
          {/* <div className='homeLink'><Link to='/'>Home</Link></div> */}


    </div>
    
  )
}

  }