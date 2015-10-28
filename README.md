Zone Clock
---
A clock that changes color to indicate what i should be doing. Based on color-coded pre-determined time zones.

I have this system where i have divided my time based on how much time i have and how i should be spending it.

This division of time gave birth to the zones. A zone is basically allocated time for one of my time spending priorites. The more time a 'zone' has allocated, the more important it is.

But i forget what 'zone' it is and how i should be spending time right now. So i color coded the zone, which makes it easier to know the zone at one glance. The problem was, the color coding of the zone was done on my calendar, and not my clock. It should be done on my clock, because that's how you determine time, by looking at your clock, not at your calendar. Hence, this project. (I also did it as an exercise in coding. Scratch your own itch, right?)

Ideally, this would be on my smart watch or phone where i can just glance at my wrist and know what i should be doing.

### A bit about the zones..

The division of time was very methodical. I calculate the amount of time i have every day after taking away the time i'm asleep. Since 8 hours of sleep is reocmmended for a young adult like me, i'm left with 16 hours of time every day. Now, there are six ways i could be spending time, which are as follows:

- **E**ntertainment (2.5 hrs)
- **F**riends and Family (6 hrs)
- **L**earning & Long time investment (1.5 hrs)
- **P**ersonal (2 hrs)
- **S**olitude (1 hr)
- **W**ork (4 hrs)

The time allocation and color codes are as follows:

| Zone                       | Alloted Time | Color  |
|---------------------------------|---------|--------|
| Entertainment                   | 2.5 hrs | Pink   |
| Friends and Family              | 6 hrs   | Purple |
| Learning & Long time investment | 1.5 hrs | Red    |
| Personal                        | 2 hrs   | Blue   |
| Solitude                        | 1 hr    | Yellow |
| Work                            | 4 hrs   | Green  |

You can clearly see that my first priority is my family, second is my work, and third is entertainment.

The allocation of time to each zone was also planned. Time gets allocated based on how the day goes. Since i have more time and less interruptions in the morning, _Work_ get allocated two hours in the morning. But only after i have had _Solitude_ and _Personal_. _Family_ time gets hours in the morning around the time when you leave for school/college, so i have time to make and serve breakfast. Then it gets time in the evenings, when everyone is going to be home. Same goes for the rest of the zones, they are based on my schedule.

The time **slot** is of 30 minutes. If a zone spans two hours, it basically took 4 time slots.

### E - Entertainment
> All work and no play makes Jack a dull boy

So don't be a dull girl. Catch up on favorite TV shows, watch a new movie, do something fun. Entertain yourself. The first _Entertainment_ zone comes right after the first _Work_ zone..

### F - Friends and Family
Spend time with friends and family, interact with them, sozialize. Call an old friend, spend some quality time with mom, Whatsapp a freind, check Facebook etc. Basically, spend time with _people_, and the most important of all people are your friends and family.

### L - Learn
_Learning and Long time investment_

L goes for both learning and long time investment. By long time investment, i mean anything that'll help me in the long run. This could be spending time researching stock options or doing general research. Learning is basically a form of investment. The best investment you can make is in developing _you_.

> An investment in knowledge pays the best interest. 
> -- <cite>Benjamin Franklin</cite>

### P - Personal
Personal grooming and me time. Take a shower, try new makeup, get a manicure, spend time with yourself. 

### S - Solitude
_Alone, silent time_

Spending time alone is very important. Many successful people do it. It is proven to increase productivity and happiness. The more time you spend alone, the more comfortable you become in your own skin. Spending time alone helps you be happy without seeking validation from others. It also helps you think, and meditate, and plan. Besides, i enjoy my company, so solitude makes me peaceful. The allocation of time to Solitude is right after waking up and just before bed.

### W - Work
Self explanatory. The total time alloted to Work in a day is 4 hours. This was in part inspired by _The 4 Hour Work Week_ by Time Ferris. The other reason was to do concentrated quality work in less time. I could have given Work more time since it is important, but i don't believe that more time would actually mean more work. 4 hours has the benefit of looking like less time and having the psychological effect of thinking that you don't have to do a lot of work.



Changelog
---

### v0.1
- basic code taken from a js fiddle demo

### v0.2
- went through the code and added comments
- added variable `time` to get the time in a format which is easier to check in conditional statement
- added if statements to check for zones based on current time

### v0.3
- added zone titles

### v0.4
- added zone quotes
- refined SCSS

### v0.5
- added variable keys for all the if statements to check zones, purpose is to make the code tidier


Future
---

- add a to-do list (which changes based on the current zone, _obviously_)
- add suggestions for what to do when the zone is upon me
- show tasks/events/calendar entries with the relevnat tags. e.g. when in personal zone, click to show a list of relevant items that can be done during personal time.


Sources
---
- http://www.plus2net.com/javascript_tutorial/clock.php
- http://jsfiddle.net/cse_tushar/fKKSb/311/