

function nameShortener(text){
// let text = "Abiose Waliu Adebusayo";
let splitted = text.split(' ')
let r;
let x;
let k = 0
     if(splitted.length === 1 || text.split('  ') === true){
        
return text

    }
    else if(splitted.length === 2){
        return (  r =  splitted[k] + " " + splitted[k+1]) 
    }
    else{    
   x = splitted[splitted.length - 1].slice(0, 1)
    r = splitted[k] + " " + splitted[k+1] + '.' + x
    
    
    return r
   
}

}
console.log(nameShortener('Abiose Waliu Adebusayo'))


console.log(nameShortener('Abiose Waliu'))
console.log(nameShortener('Abiose'))
console.log(nameShortener('Abiose'))



// cnum.addEventListener("input", () => {
//   if (cnum.value === "") {
//     cnnum.innerText = "0000 0000 0000 0000";
//     console.log("Enter your card no");
//     cnum.style.border = "solid 2px hsl(279, 6%, 55%)";
//   }
//   else if (cnum.value % 4){
//           document.querySelector(".cnum").innerText = cnum.value + " "
//   }
//   else {
//     document.querySelector(".cNum").innerHTML = 
//       `${cnum.value[0]}${cnum.value[1]}${cnum.value[2]}${cnum.value[3]}${" "}${cnum.value[4]}${cnum.value[5]}${cnum.value[6]}${cnum.value[7]}${" "}${cnum.value[8]}${cnum.value[9]}${cnum.value[10]}${cnum.value[11]}${" "}${cnum.value[12]}${cnum.value[13]}${cnum.value[14]}${cnum.value[15]}`
//     ;
//    document.getElementById("cNum").innerText =   document.querySelector(".cnum").innerText;
//   }
// });





function cardNumber(num){

    //  let removedSpaces = e.target.value.replace(/[\D]/gi, "");
// removedSpaces = removedSpaces.slice(0, 16)
// let sixteenValues = cardNumber(removedSpaces)
// sixteenValues
// e.target.value = sixteenValues;
    let k = num.replace(/[\D]/gi, "").slice(0, 16).split('')
    for (let index = 1; index <= k.length; index++) {
        if (index % 4 == 0){
         k[index - 1] += " "
        }
        

    }

                return k.join('')

}

let j =  parseInt(1234567891011111)
console.log(cardNumber(`${j}`))    
cardNumber(`${j}`)    