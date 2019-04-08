class Driver{
  constructor(name, entryDate){
    this.name = name
    this.entryDate = entryDate
  }

  startDate(){
    return Date.now();
  }

  yearsExperienceFromBeginningOf(tYear){
    return tYear - this.startDate.getFullYear() - 1;
  }
}


class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
}