// this is index.js

// fetch API
// fetch("https://data.cityofnewyork.us/Social-Services/Directory-Of-Homeless-Drop-In-Centers/bmxf-3rd4")
// .then( r => r.json())
// .then()





handleSubmit(){
   let resp = this.options[this.options.selectedIndex].value
   switch(resp) {
     case 'Manhattan':

      break
     case 'Bronx':

      break
     case 'Brooklyn':

      break
     case 'Queens':

      break
     case 'Staten Island':

      break

     default:
         this.incorrectAnswer()
       }
 }
