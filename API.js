

// variables

 // something else (main container)
 const mainContainer = document.querySelector('.main-container')
 const searchButton = document.getElementById('btn')
 const cityNba = document.querySelector('#input')
 fetch(`https://www.balldontlie.io/api/v1/teams/`)
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        data.data.forEach(element => {
          const franchise = `<option value="${element.id}">${element.city}</option>`
          cityNba.insertAdjacentHTML('beforeend', franchise)
            
        });
    //   const franchise = `<option value=""></option>`
    //   cityNba.insertAdjacentHTML('beforeend', franchise)
    });

 const searchTeams = (NbaTeams) => {
     mainContainer.innerHTML = ""
    fetch(`https://www.balldontlie.io/api/v1/teams/${NbaTeams}`)
    .then(response => response.json())
    .then((data) => {
        console.log(data)
      const franchise = `<div class="main-container">
      <h3>Team : ${data.name}</h3>
      <h3>Full name : ${data.full_name}</h3>
      <h3>Conference : ${data.conference}</h3>
      <h3>Division : ${data.division}</h3>

  </div>`
      mainContainer.insertAdjacentHTML('beforeend', franchise)
    });


 }

 cityNba.addEventListener('change',(event) => {
    console.log(cityNba.value)

    searchTeams(cityNba.value)

 })


// fetch('https://www.balldontlie.io/api/v1/teams')
//   .then(response => response.json())
//   .then((data) => {
//     console.log(data.sprites.front_default)
//     const img = `<img src ="${data.sprites.front_default}" alt ="">`
//     mainContainer.insertAdjacentHTML('beforeend', img)
//   });

  //something
//   const img = `<img src ="" alt =""`
  // something else (main container)
//   const mainContainer = document.querySelector ('.maincontainer')
// entry point
  // When I click on this button, I want the pokemon I wrote there to appear there
// searchButton.addEventListener('click',(event) => {
//     console.log(pokinput.value)

//     searchPoke(pokinput.value)

// }


  //look into the data console




// fetch();




