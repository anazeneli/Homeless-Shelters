
// this is index.js
// fetch API

// class App {


  function getBoroughData() {
    fetch('https://data.cityofnewyork.us/resource/kjtk-8yxq.json')
    .then( r => r.json() )
    .then( options => filterData(options) )
    //console.log(options)
  }

  // getBoroughData = () => {
  //   // let xhttp = new XMLHttpRequest()
  //   //
  //   // xhttp.onreadystatechange = function() {
  //   //   console.log(this.readyState)
  //   // }
  //   //
  //   // if(this.readyState == 4 && this.status == 200 ){
  //   //       renderBoroughData(JSON.parse(this.responseText))
  //   // }
  //   //
  //   // xhttp.open("GET", "https://data.cityofnewyork.us/resource/kjtk-8yxq.json ", true)
  //   // xhttp.send()
  //
  // }

  const form = document.getElementsByTagName("form")[0]
  // var submit = document.getElementsByTagName("submit")[0]
  var answer = document.getElementById("borough-options")

  form.onsubmit = (e) => {
    e.preventDefault()
    //filterData(answer)

    //alert("You clicked on a title! Congratulations!")
    //console.log("submitted!")
  }



  //console.log(answer)
  // answer.onclick = () => {
  // }
  function selected_option(){
    var ans = answer.value

    //    document.getElementById("value").innerHTML = s[s.selectedIndex].value
    getBoroughData()
  }

  function filterData(dat) {
    console.log(dat)
    let choice = [] ;
    //
    // dat.forEach( (shelter) => {
    //   if(shelter.borough == "Brooklyn" )
    //      choice.push(shelter)
    //   }
    // )

    for(x in dat) {
      if(dat.borough == "Brooklyn") {
        choice.push(dat[x])
      }
    }
    console.log("HELP ME", choice)


    //document.getElementById("value").innerHTML = s[s.selectedIndex].value
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

  // function buildResponse(resp){
  //   this.answer.innerHTML = ''
  //   let p = document.createElement("p")
  //   let text = document.createTextNode(resp)
  //   p.appendchild(text)
  //   this.answer.insertAdjacentElement('afterBegin', p)
  // }
   //
   // function blankAnswer() {
   //   this.buildResponse("Please select an option")
   // }
   //


//}
//window.onload = () => new App()
