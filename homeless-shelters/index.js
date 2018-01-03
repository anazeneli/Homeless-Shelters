
// this is index.js

// fetch API
// fetch("https://data.cityofnewyork.us/Social-Services/Directory-Of-Homeless-Drop-In-Centers/bmxf-3rd4")
// .then( r => r.json())
// .then()

//var submit = document.getElementById("submit")
//console.log(submit)

//class App {

  const form = document.getElementsByTagName("form")[0]
  const answer = document.getElementById("answer")

  console.log(form)
  form.onsubmit = (e) => {
    e.preventDefault()
    //alert("You clicked on a title! Congratulations!")
    //console.log("submitted!")
  }

  var input = document.getElementById("borough-options")
  console.log(input)
  input.onclick = () => {
     showOptions(input)
  }

function showOptions(s) {
  console.log(s[s.selectedIndex].value )

}


  // buildResponse(resp){
  //   this.answer.innerHTML = ''
  //   let p = document.createElement("p")
  //   let text = document.createTextNode(resp)
  //   p.appendchild(text)
  //   this.answer.insertAdjacentElement('afterBegin', p)
  // }

  // handleSubmit(){
  //    let resp = this.options[this.options.selectedIndex].value
  //    switch(resp) {
  //      case 'Manhattan':
  //
  //       break
  //      case 'Bronx':
  //
  //       break
  //      case 'Brooklyn':
  //
  //       break
  //      case 'Queens':
  //
  //       break
  //      case 'Staten Island':
  //
  //       break
  //
  //      default:
  //          this.incorrectAnswer()
  //        }
  //  }

   // blankAnswer() {
   //   this.buildResponse("Please select an option")
   // }



//}
//window.onload = () => new App()
