const btn = document.getElementById("btn");
let nfame = document.getElementById("name");
let cnum = document.getElementById("cNum");
let date = document.querySelector("#digs");
let cvv = document.querySelector("#cvv");
let cname = document.querySelector(".name");
let cnnum = document.querySelector(".cNum");
let cdate = document.querySelector(".expiry");
let ccvv = document.querySelector(".backt");

function nameShortener(text){
// let text = "Abiose Waliu Adebusayo";
let splitted = text.split(' ')
let r;
let x;
let k = 0
     if(splitted.length === 1){
        
return text

    }
    else if(splitted.length === 2){
        return (  r =  splitted[k] + " " + splitted[++k]) 
    }
    else{    
   x = splitted[splitted.length - 1].slice(0, 1)
    r = splitted[k] + " " + splitted[++k] + '.' + x
    
    
    return r
   
}

}


nfame.addEventListener("input", () => {
  if (nfame.value === "") {
    cname.innerText = "Jane Appleseed";
    console.log("Enter your name");
  }
    
  else {
    document.querySelector(".name").innerText = nameShortener( nfame.value);
    console.log(nfame.value);
  }
});




// edwins' code


function card(num){
 num = num.split('')
    for (let index = 2; index <= num.length; index++) {
        if (index % 4 == 0){
            num[index - 1] += " "
        }
      

    }
                return num.join('').trim()

}


// my code

function cardNumber(num){
    let k = num.replace(/[\D]/gi, "").slice(0, 16).split('')
    for (let index = 1; index <= k.length; index++) {
        if (index % 4 == 0){
         k[index - 1] += " "
        }
    }
       return k.join('')

}


cnum.addEventListener("input", (e) => {
  if (cnum.value === "") {
    cnnum.innerText = "0000 0000 0000 0000";
    console.log("Enter your card no");
    cnum.style.border = "solid 2px hsl(279, 6%, 55%)";
  } 
  else {
   
    document.querySelector(".cNum").innerHTML =  cardNumber(e.target.value);
  e.target.value = document.querySelector(".cNum").innerText;
  }
});

const year = document.getElementById("digq");
date.addEventListener("input", () => {
  if (date.value === "" && year.value === "") {
    cdate.innerText = " 00/00";
    alert("Enter your name");
  } else if (date.value != "" && year.value === "") {
   document.querySelector(".expiry").innerHTML =
      parseInt(date.value) + "/" + "00" ;
    console.log(nfame.value);
 } else if (date.value === "" && year.value != "") {
    document.querySelector(".expiry").innerHTML = "00/" + `${parseInt(year.value) >= 10 ? parseInt(year.value) : `0${parseInt(year.value)}`}`;
  } else {
    document.querySelector(".expiry").innerHTML =
      parseInt(date.value) + "/" + `${parseInt(year.value) >= 10 ? parseInt(year.value) : `0${parseInt(year.value)}`}`;
    console.log(nfame.value);
  }
});
year.addEventListener("input", () => {
  if (date.value === "" && year.value === "") {
    cdate.innerText = " 00/00";
    console.log("Enter your name");
  } else if (date.value != "" && year.value === "") {
    document.querySelector(".expiry").innerHTML =
     "00"+ "/" +`${parseInt(year.value) >= 10 ? parseInt(year.value) : `0${parseInt(year.value)}`}`;
    console.log(nfame.value);
  } else if (date.value === "" && year.value != "") {
    document.querySelector(".expiry").innerHTML = "00/" + `${parseInt(year.value) >= 10 ? parseInt(year.value) : `0${parseInt(year.value)}`}`;
  } else {
    document.querySelector(".expiry").innerHTML =
      parseInt(date.value) + "/" + `${parseInt(year.value) >= 10 ? parseInt(year.value) : `0${parseInt(year.value)}`}`;
    console.log(nfame.value);

    console.log(nfame.value);
  }
});

cvv.addEventListener("input", (e) => {
  if (cvv.value === "") {
    ccvv.innerText = " 000 ";
    console.log("Enter your name");
  } else {
    let back = cvv.value;
    if (back.length < 4) {
      document.querySelector(".backt").innerHTML = parseInt(cvv.value);
      console.log(nfame.value);
    } else {
      // document.querySelector(".backt").innerHTML != parseInt(cvv.value);
      alert("cvv is 3 digited");
      let correct = e.target.value.slice(0, 3);
      e.target.value = correct
      // document.querySelector("#cvv").innerText=
       document.querySelector(".backt").innerHTML= e.target.value;
    }
  }
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".complete").style.display = "flex";
  document.querySelector("form").style.display = "none";
});
