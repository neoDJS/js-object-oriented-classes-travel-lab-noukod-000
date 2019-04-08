class Driver{
  constructor(name, entryDate){
    this.name = name
    this.startDate = new Date(entryDate)
  }

  startDate(){
    return Date.now();
  }

  yearsExperienceFromBeginningOf(tYear){
    return (tYear - this.startDate.getFullYear() - 1);
  }
}


let eastWest = [
'1st Avenue',
'2nd Avenue',
'3rd Avenue',
'Lexington Avenue',
'Park',
'Madison Avenue',
'5th Avenue'
]; 

class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled(){
    let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical;
    let horizontalDistance = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal);

    if(this.beginningLocation.horizontal === this.endingLocation.horizontal){
        return verticalDistance;
    }else if (this.beginningLocation.vertical === this.endingLocation.vertical){
        return horizontalDistance;
    }else{
        return verticalDistance + horizontalDistance;
    }
  }

  estimatedTime(peak){
    if(peak){
        return this.blocksTravelled()/2
    } else {
        return this.blocksTravelled()/3
    }
  }
}
