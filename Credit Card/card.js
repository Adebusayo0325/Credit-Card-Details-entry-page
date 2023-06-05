const btn = document.getElementById("btn");
let nfame = document.getElementById("name");
let cnum = document.getElementById("cNum");
let date = document.querySelector("#digs");
let cvv = document.querySelector("#cvv");
let cname = document.querySelector(".name");
let cnnum = document.querySelector(".cNum");
let cdate = document.querySelector(".expiry");
let ccvv = document.querySelector(".backt");

let x;
let k = 0
let r = ''
function nameShortener(text){
// let text = "Abiose Waliu Adebusayo";
let splitted = text.split(' ')
for(i =  0; i < splitted.length ; i++)
{
    if(i < 2){
        // console.log(i)
        console.log(splitted)
        console.log(splitted[k])
    }
    else{
      if (splitted.length < 2){
      r ===  splitted[k] + " " + splitted[k+1]
      }
      else{
   x = splitted[i].slice(0, 1)
    
    
    r = splitted[k] + " " + splitted[k+1] + '.' + x
      }
      return r
    }
}
// console.log(text.split(' '))
// console.log( splitted)
}



nfame.addEventListener("input", () => {
  if (nfame.value === "") {
    cname.innerText = "Jane Appleseed";
    console.log("Enter your name");
  } else {
    document.querySelector(".name").innerHTML = nameShortener( nfame.value);
    console.log(nfame.value);
  }
});





cnum.addEventListener("input", () => {
  if (cnum.value === "") {
    cnnum.innerText = "0000 0000 0000 0000";
    console.log("Enter your card no");
    cnum.style.border = "solid 2px hsl(279, 6%, 55%)";
  }
  else if (cnum.value % 4){
          document.querySelector(".cnum").innerText = cnum.value + " "
  }
  else {
    document.querySelector(".cNum").innerHTML = 
      `${cnum.value[0]}${cnum.value[1]}${cnum.value[2]}${cnum.value[3]}${" "}${cnum.value[4]}${cnum.value[5]}${cnum.value[6]}${cnum.value[7]}${" "}${cnum.value[8]}${cnum.value[9]}${cnum.value[10]}${cnum.value[11]}${" "}${cnum.value[12]}${cnum.value[13]}${cnum.value[14]}${cnum.value[15]}`
    ;
  //  document.getElementById("cNum").innerText =   document.querySelector(".cnum").innerText;
  }
});
const year = document.getElementById("digq");
date.addEventListener("input", () => {
  if (date.value === "" && year.value === "") {
    cdate.innerText = " 00/00";
    console.log("Enter your name");
  } else if (date.value != "" && year.value === "") {
    if(parseInt(date.value) < 10){
    document.querySelector(".expiry").innerHTML = "0" + parseInt(date.value) + "/00"}else{  document.querySelector(".expiry").innerHTML = parseInt(date.value) + "/00"
  }
 } else if (date.value === "" && year.value != "") {
    document.querySelector(".expiry").innerHTML = "00/" + parseInt(year.value);
  } else {
    document.querySelector(".expiry").innerHTML =
      parseInt(date.value) + "/" + parseInt(year.value);
    console.log(nfame.value);
  }
});
year.addEventListener("input", () => {
  if (date.value === "" && year.value === "") {
    cdate.innerText = " 00/00";
    console.log("Enter your name");
  } else if (date.value != "" && year.value === "") {
    document.querySelector(".expiry").innerHTML = ` ${
      date.value < 10 ? `0${date.value}` : date.value
    }/00`;
  } else if (date.value === "" && year.value != "") {
    document.querySelector(".expiry").innerHTML = "00/" + parseInt(year.value);
  } else {
    document.querySelector(".expiry").innerHTML = ` ${
      date.value > 10 ? date.value : `0${date.value}`
    } / ${parseInt(year.value)}`;

    console.log(nfame.value);
  }
});

cvv.addEventListener("input", () => {
  if (cvv.value === "") {
    ccvv.innerText = " 000 ";
    console.log("Enter your name");
  } else {
    let back = cvv.value;
    if (back.length < 4) {
      document.querySelector(".backt").innerHTML = parseInt(cvv.value);
      console.log(nfame.value);
    } else {
      document.querySelector(".backt").innerHTML != parseInt(cvv.value);
      alert("cvv is 3 digited");
      let correct = document.querySelector(".backt").length - q;
      cvv.value = correct;
    }
  }
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".complete").style.display = "flex";
  document.querySelector("form").style.display = "none";
});
