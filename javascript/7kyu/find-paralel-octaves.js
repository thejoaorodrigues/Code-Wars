/*Scale:
The major scale has 7 notes:

"do re mi fa sol la ti"

Chord:
For this assignment a chord may consist of any 4 notes from the major scale. Example:

example chord = 'do re fa sol'

Harmony:
Each harmony consists of 4 chords:

harmony = [chordOne, chordTwo, chordThree, chordFour]

Octave:
When two singers are singing the same note like below (do) the interval between them is called an octave:

v         v
do re mi do 
^         ^

Parallel Octave:
A parallel octave occurs when two singers move from one chord to the next staying one octave apart. For example:

do mi sol do        
v          v    < Parallel octave
ti re fa  ti
This harmony contains a parallel octave because the bass and soprano are both singing 'do' on the first chord, and then on the second chord they both move to 'ti'. In other words they stay one octave apart from eacthother as they move from one chord to the next.

A parallel octave does NOT occur when two singers stay one octave apart but do not move or change notes from one chord to the next. For example:

do re mi do
|         |     < NOT a parallel octave
do re mi do     
Your Task
You want to write a function to detect whether the harmony contains any parallel octaves. If it contains parallel octaves return "Fail" otherwise return "Pass".

Examples
harmony = [
  'do re mi fa' ,
  'mi fa sol do' ,
  'fa ti fa ti' ,
    |     |             < NOT a parallel octave
  'fa do fa mi' , 
  ]
  
  
  
This student should 'Pass' because the bass and alto are singing octaves on the 3rd and 4th chord'fa' but they do not move.

harmony = [
  'mi re  mi fa' ,
    |      |          < Parallel octave
    v      v
  'sol fa sol do',
    |      |          < Parallel octave
    v      v
  'fa ti  fa  ti' ,
  'fa do  fa  mi' , 
  ]
This student should 'Fail' because the bass and alto stay one octave apart on the first and second chord and they move to another note together. mi -> sol

There is also another parallel octave as they move from the second to third chord. sol->fa

harmony = [
 'mi mi mi mi' ,
 'fa mi do re' ,
 'ti ti ti ti' ,
 'fa mi do re' ,          No parallel octaves
 ]
This student should 'Pass' because there are no parallel octaves in this harmony.
*/

function passOrFail(harmony) {
    const hs = harmony.map(h => h.split(' '));
    for (let i = 0; i < 3; i++)
      for (let j = 0; j < 3; j++)
        for (let k = j + 1; k < 4; k++)
          if (hs[i][j] === hs[i][k] && hs[i+1][j] === hs[i+1][k] && hs[i][j] !== hs[i+1][j])
            return 'Fail';
    return 'Pass';
  }