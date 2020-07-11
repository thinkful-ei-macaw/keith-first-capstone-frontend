import React, { Component } from 'react';



export default class TemplatePage extends Component {
    


        

  render() {
    
  return(
      
    
        <div className='templatePageWrapper'>
          
          <section>
            <h3>How to make an entry + info</h3>
            <p>Simply navigate to Create and fill out the form!  
              Remember, right now there is no way to edit or delete your post!
                Be sure to get it right.  If there is a mistake, feel free to repost 
                with a "version 2" or however you'd like to mark it. 
                Another thing to keep in mind is that absolutely anyone can use 
                anything found on this site for any reason without asking permission.
                </p>
          </section>
          <section>
            <h3>Tips for quality submissions</h3>
            <div className='generalTips'>
            <p>Everyone plays ad&d 2e differently; and that's how it should be!  2e is not a 
              "one size fits all" sort of system.  It doesn't have much a "core mechanic" and as 
              such can be edited freely without all the math breaking.  That said, some of the 
              entries will look wildly different.  Some groups try to keep damage numbers limited 
              so that each HD a monster has is roughly equivalent to the number of hits that 
              it takes to slay it.  Others have no issue with damage getting into the triple digits 
              at very high level play.  Some play groups scoff at the very idea of high level play.
              This is all fine!  If you are making something for your custom setting, put it in the 
              "Base Setting" label; that way everyone knows to take everything with a grain of salt; 
              just try to keep creations for your setting keeping to the tone of your setting.  </p>
              <p>
                I have heard some complain about d&d content being "shallow".  Well, in a sense, it 
                is supposed to be!  All d&d content; official or otherwise, should be changed and molded 
                to the needs and tone of the play group using it and used as inspiration or a jumping off point.  
                Never take these stats as set in stone;
                if you like some part of something, use it!  Running d&d isn't about being original, 
                it is about running a good game!  Good artists borrow, great artist steal.  Everything 
                posted here should be used by you for whatever it can be used for.  If you like a whole 
                monster, use it.  If you like only a bit of it; rip it apart and use it.  No shame!
            </p>
            </div>
          
              <div className='tip'>
                <h4>Setting</h4>
              <p>
                When making a custom monster for an existing setting, you should keep the stats of that 
                monster to the tone of that setting.  As an example, in Temple of Elemental Evil in the Greyhawk setting, 
                Iuz the Old is a deity found at the end with 165hp; and that is supposed to be an overwhelming amount. 
              This means that you shouldn't make a monster with more hp that isn't supposed to be seen as a huge deal, at 
              least for use in the Greyhawk setting.  When making monsters for a custom setting, make sure to keep the 
              monsters of the same custom setting to a similar standard.  That isn't to say that you can't ever change 
              that standard, but you should at least make a note that you are deviating from established norms.
              </p>
            </div>
            <div className='tip'>
              <h4>Climate/Terrain</h4>
              <p>This describes that kind of locales that this monster should be found in.  This is helpful 
                for DMs looking to populate a random encounter table for a region that their players are in.  
                Some monsters, of course, can be found just about anywhere, so don't hesitate to put "any" if that 
                is the case.  And also don't hesitate to put more than one type of climate or terrain in; write in
                everything that applies.
              </p>
              </div>
              <div className='tip'>
                <h4>Frequency</h4>
              <p>
                How rare is this monster?  Are these found in almost every cave or more like 1 in 1000?
                This isn't super important, but can be helpful.
              </p>
            </div>
            <div className='tip'>
              <h4>Organization</h4>
              <p>
                What kind of groups are these monsters found in?  Are they always alone?  Do they form 
                families?  Flocks?  Tribes?  Name all that apply.
              </p>
            </div>
            <div className='tip'>
            <h4>Activity Cycle</h4>
              <p>
                When are these monsters active?  Are they nocturnal?  Do they ever sleep?  Are there exceptions?
              </p>
            </div>
            <div className='tip'>
              <h4>Diet</h4>
              <p>
                What does this monster eat or hunt?  Are they obligate carnivores?  Do they feed on positive life force?
              </p>
            </div>
            <div className='tip'>
              <h4>Intelligence</h4>
              <p>
                How smart is this monster?  This represents only their INT, not their Wisdom, so just 
                because a monster might have a 1 int, it doesn't mean that it is incapable at all.  This int 
                represents more IQ than mental ability.  Tons of animals have great minds for what they evolved 
                to do but would have a 1 Int.  Dolphins and apes would have a greater than 1 int, for sure.  
                Higher int values also represent "trainability" to some extent.  2e lists int 
                progression as: 1(Animal), 2-4(Semi), 5-7(Low), 8-10(Mortal Average), 11-12(Very), 13-14(High), 
                15-16(Exceptional), 17-18(Genius), 19-20(Supra-genius), and 21+(Godlike).  You should remember 
                that an int listed should be the average for this monster, not that every single monster of 
                its kind has that exact int.  If a monster has 21+ int, remember that it can change its action 
                during the initiative round instead of being locked into an action declared when initiative is rolled. </p><p>
                Lastly, if you have players 
                capable of dealing ability damage through some means, be very careful about making monsters that 
                are supposed to be very tough but have 1 int because a single "ray of stupidity" will kill or 
                knock them out.  Definitely give that monster some sort of ability damage resistance or something 
                to prevent players from "cheesing" it.  Of course, maybe don't do that if you see something like 
                that more as a player being clever than a player abusing systems.
              </p>
            </div>
            <div className='tip'>
              <h4>Treasure</h4>
              <p>
                There are treasure tables in the DMG at the very start of Appendix 1 on Table 84.  
                Some DMs love these and the roll for a monster's loot can tell a story all on its own.  
                Some DMs do NOT like these, as they are very "swing-y", sometimes dropping hundreds of 
                thousands of gp worth of coins and magic items while sometimes dropping pocket change or 
                nothing at all.  This randomness, as said before, can really tell a story, but can 
                also very much unbalance a campaign.  If you do intend to use the standard Treasure Tables, 
                donjon.sh has an service built for these at https://donjon.bin.sh/adnd/treasure/.  
                If you do not intend to use the standard table, you should list what kind of loot, if any, 
                that this monster might have on it or in its lair in the Summary section.
              </p>
            </div>
            <div className='tip'>
              <h4>Alignment</h4>
              <p>
                What alignment is typical for this monster?  IS there a "typical" alignment for this 
                type of monster, or is there a pretty even distribution?
              </p>
            </div>
            <div className='tip'>
              <h4>Number Appearing</h4>
              <p>
                How many of this type of monster usually are found at once?  This calls back to the "Organization" 
                section big time.  You should put in the amounts to be found for each category listed in Organization.
                Also, these amounts should probably in ranges.  Of course, there will also be exceptions to these 
                ranges, but this should be what is considered "normal".
              </p>
            </div>
            <div className='tip'>
              <h4>Armor Class</h4>
              Feel free to use either ascending or descending AC; people can figure out which you are using simply 
              by seeing if it is above or below 10.  If you want to be real nice, put in both with one in parenthesis.
              Feel free to also put in multiple options depending on armor type or molting stage or what have you, if 
              relevant.  
            </div>
            <div className='tip'>
              <h4>Movement</h4>
              <p>Movement is the number of tens of feet traveled per round in a dungeon.  Rounds in 2e are 
                1 minute each.  Base movement for humans is 12 while it is 6 for halflings, gnomes, and dwarves.
                You should put in multiple movement rates for land/fly/swim/etc if this monster has such 
                movement options.  You should also put in a letter grade for how well it flies if it can.
                For specifics on how to grade flight, check chapter 9 of the DMG.
              </p>
            </div>
            <div className='tip'>
              <h4>Hit Dice</h4>
              <p>
                How many HD is this monster?  Monsters, unless specially noted, use a d8 for each HD and their 
                THAC0 usually is based on HD.  Feel free to put in an average HP next to the HD or list multiple 
                HD ranges for different stages of life of the monster.  2e also allows there to be flat HP added to 
                a HD amount, if desired.  Every 4 points of flat hp added is treated as if it had 1 HD higher for 
                purposes of effects that scale off of HD or affect enemies of certain HD ranges.
              </p>
            </div>
            <div className='tip'>
              <h4>THAC0</h4>
              <p>
                Feel free to use either descending or ascending THAC0.  If you are using ascending, you should 
                precede the value with a +.  Of course, if you really want to be nice, list both with one 
                in parenthesis.  THAC0 is usually a function of HD, with monsters having the equivalent of 
                Fighter THAC0 scaling.  You don't have to do this, of course, but this is the norm in the 
                monster manual, with only a few exceptions. 
              </p>
            </div>
            <div className='tip'>
              <h4>Number of Attacks</h4>
              <p>How many times does this monster attack in each round, and what kind of attacks?
                Many monsters have a Claw/Claw/Bite rotation, while many others attack once a round 
                by weapon.  Some have variable rotations, so this is just a "stub" of information that 
                should be elaborated on when writing the summary.
              </p>
            </div>
            <div className='tip'>
              <h4>Damage Per Attack</h4>
              <p>
                How much damage does this monster do with each attack?  If it has multiple types of 
                attacks, each attack's damage should be listed here and labeled.  In 2e, most monsters 
                do not have a flat damage bonus and instead have multiple dice of damage.  Feel free 
                to have the damage done however you see fit, of course.  This damage information is also 
                more of a "stub" that should be elaborated on in the summary.
              </p>
            </div>
            <div className='tip'>
              <h4>Special Attacks</h4>
              <p>
                What kind of special offensive abilities does your monster have, if any?  Simply list 
                them here and then elaborate on them in the summary section.
              </p>
            </div>
            <div className='tip'>
              <h4>Special Defenses</h4>
              <p>
                What kind of special defensive abilities does your monster have, if any?  Simply list 
                them here and then elaborate on them in the summary section.
              </p>
            </div>
            <div className='tip'>
              <h4>Magic Resistance</h4>
              <p>
                Does your Monster have Magic Resist?  MR is the percent chance that a monster completely 
                negates magic cast against it.  Some settings have items or abilities that grant 
                spell penetration that allows the caster to ignore some amount of MR; you should keep 
                that in mind and explain in the summary if this amount of MR is taking spell penetration 
                into account or not.  An epic monster with 125MR is pretty silly in a setting with no 
                means to lower resistance, while an epic monster with 25MR is pretty silly in a setting 
                where spell penetration is fairly common for high level player characters.  
              </p>
            </div>
            <div className='tip'>
              <h4>Size</h4>
              How big is your monster?  You should list both the size category and the actual height range 
              and what unit of measure you are using.  Creatures smaller than 4 feet in height should be Small or smaller 
              while creatures above 7 feet in height should be Large or larger.  You can affect the Size rating by factors 
              other than height, too.  For example, a round creature 6 feet in diameter should be L size even though it 
              is well below 7 feet in height.  Remember that, by standard rules as written, 
              most weapons deal extra damage to Large or larger monsters.  
            </div>
            <div className='tip'>
              <h4>Morale</h4>
              <p>
                Does your monster run away when the going gets tough?  How likely is it?
                I personally am not much of a fan of the numerical Morale rating found in the book, but 
                if you want to use it, it is found in Chapter 9: Combat of the DMG.  8-10 is listed as 
                average on a scale of 2-20.  You should list something about the morale in for monsters 
                in the summary so that another DM has a feel for the average resolve of this monster.
              </p>
            </div>
            <div className='tip'>
              <h4>XP Value</h4>
              <p>
                EXP in d&d is a much debated subject.  By standard, in 2e D&D, characters are awarded exp 
                for quest and story completion, good roleplaying, class based achievements, gold found, 
                and monsters defeated or overcome in some way.  Some DMs simplify this to varying degrees while 
                some award level ups as they see fit without any actual EXP tracking.  EXP for each monster 
                is a function of its HD with "virtual HD" added for special abilities and other qualities that 
                make them more dangerous.  The chart is found in the DMG in Chapter 8: Experience on tables 31 and 32.
                Personally, I find the tables to be a bit lacking and use them as a guide for determining exp value instead 
                of abiding by them fully.
                So many DMs grant wildly differing exp values for monster kills that this section is basically useless.  
                If you want to use it, you are welcome to, but I find it to be much too "one-size-fits-all" to be of 
                any real use.  If you wish to use this section but do not wish to put in a hard value, simply inputting 
                "high" or "low" or other such things is an option.
              </p>
            </div>
            <div className='tip'>
              <h4>Summary</h4>
              These last sections are the most important.  The previous sections are for people browsing to see 
              if something catches their eye.  Here is where you explain all the intricacies.  Of course, keep 
              in mind that most people are going to use this information as a jumping off point or inspiration, so you 
              don't need to write an essay here.  Summary should explain in detail the monster's fighting ability as 
              well as a general overview about this monster.
            </div>
            <div className='tip'>
              <h4>Habitat/Society</h4>
              <p>
              This section is all about where this monster lives and how it interacts with people.  Remember, d&d 
              (for most people) isn't just about hacking and slashing through differently statted number banks with 
              different coats of paint.  This stuff is important!  This is where you'll go into a lot of detail 
              on its organization and structure and day to day activity.  If intelligent, you'll go into this monster's 
              culture and other such things.  Feel free to leave some things vague or "shallow", as long as others 
              get a good feel for the tone and idea of this monster as a living being.  
              </p>
            </div>
            <div className='tip'>
              <h4>Ecology</h4>
              <p>
               This last section is all about what this monster eats and what eats it.  How does this monster interact 
               with the rest of the world?  Where does it fit in in the environment.  Are there wider consequences for 
               this monster being removed from its territory?  Any consequences for it overpopulating the region?
              </p>
            </div>
          </section>
        </div>
        
        
  )
}
}