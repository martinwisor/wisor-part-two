let memberName = prompt("Welcome to GC mini golf! What is your name?");
let total = 0;
let holeCount = Number(
  prompt(`Hi, ${memberName}. Would you like to play 3 or 6 holes of mini golf?`)
);
if (holeCount === 3 || holeCount === 6)
  for (i = 1; i <= holeCount; i++) {
    let putts = Number(prompt(`How many putts for hole ${i}? (par: 3)`));
    total += putts;
  }
let par = holeCount * 3;
total -= par;
if (total < 0) {
  console.log(`Great job, ${memberName}! Your total par was: ${total}`);
} else if (total > 0) {
  console.log(`Nice try, ${memberName}. Your total par was: +${total}`);
} else if (total === 0) {
  console.log(`Good game, ${memberName}. Your total par was: 0`);
}

/*
3 hole golf is par 9.
6 hole golf is par 18.

if even with par console.log "Good game, memberName. Your total par was: 0"
if under par console.log "Great job, memberName. Your total par was: - par"
if over par, console.log "Nice try, memberName. Your total par was + par"
*/
