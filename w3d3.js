let getAndReturnPeople = async () => {
    let response = await fetch('https://swapi.dev/api/people')
    let parsedResponse = await response.json()
    let peopleArray = parsedResponse.results;

    return peopleArray;
}



    const doProblem = async () => {
        let peopleArray = await getAndReturnPeople();
        //console.log(peopleArray);
        for ( let i = 0; i< peopleArray.length;i++){
            peopleArray[i].name
            console.log(peopleArray[i].name)
        }
             // do your work here inside this function
    }
    doProblem()

          //Easy_Loop through this array of objects and and log the name of each person