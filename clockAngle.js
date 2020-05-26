/* Create a function or method that when given a time (a string in HH:MM format) give this smallest angle created between the hour and minute hands. Please provide a https://repl.it/ link and a github

analog clock is 360 degres
has 60 devisions (for minutes) => 1 min = 6 degres
12 devisions for hours => 1 hour = 30 degres
converting time to decimal number : 
1 hour => 60 minutes
x hour => given minutes
x hour = (minutes / 60)
time = hour + x hour
*/


const analogClockSmallestAngle = (time) => {
    const circle = 360;
    const halfCircle = circle / 2;

    const hourUnit = circle / 12;
    const minuteUnit = circle / 60;
  
  
    // hours portion of the time
    let hour = parseInt(time.slice(0, -3));
    if (hour === 12) {
      hour = 0;
    }
  
    // minutes portion of the time
    const minute = parseInt(time.slice(-2));
  
    // exact hour
    const hourConversion = (minute / 60) + hour;
  
    const hourAngle = hourConversion * hourUnit;
    const minuteAngle = minute * minuteUnit;
  
    const angle = Math.abs(hourAngle - minuteAngle)
    
    if (angle > halfCircle) {
      const otherHalf = circle - angle
      return otherHalf;
    }
    return angle
  }
  
  console.log(analogClockSmallestAngle('1:35'))