
// this is index.js
// fetch API

  fetch('https://data.cityofnewyork.us/resource/kjtk-8yxq.json')
  .then( r => r.json() )
  .then( options => showOptions(options) )


// class App {

  const form = document.getElementsByTagName("form")[0]

  form.onsubmit = (e) => {
    e.preventDefault()
    //alert("You clicked on a title! Congratulations!")
    //console.log("submitted!")
  }

  var answer = document.getElementById("borough-options")
  //console.log(answer)
  answer.onclick = () => {
     showOptions(answer)
  }

  function showOptions(s) {
    document.getElementById("value").innerHTML = s[s.selectedIndex].value

  }

  function handleSubmit(){
     let resp = this.options[this.options.selectedIndex].value
     switch(resp) {
       case 'Manhattan':

        break;
       case 'Bronx':

        break;
       case 'Brooklyn':

        break;
       case 'Queens':

        break;
       case 'Staten Island':

        break;

       default:
           this.blankAnswer()
         }
   }

  function buildResponse(resp){
    this.answer.innerHTML = ''
    let p = document.createElement("p")
    let text = document.createTextNode(resp)
    p.appendchild(text)
    this.answer.insertAdjacentElement('afterBegin', p)
  }
   //
   // function blankAnswer() {
   //   this.buildResponse("Please select an option")
   // }
   //


//}
//window.onload = () => new App()
