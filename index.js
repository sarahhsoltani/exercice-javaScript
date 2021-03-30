// Exercice 1
function inverse(a, b) {
  let c;
(c = a), (a = b), (b = c);
  console.log(a, b);
}
inverse(2, 4);

// Exercice 2

   
function affichage(nom,age,homme){
    
 nom="sara",
age=21,
homme=true
console.log(nom,age,homme)
};

affichage()
// autre sol
function affichage(nom,age,homme){
    
   return nom+" "+age+" "+homme
   
   };
   
   console.log(affichage("sara",27,true))

// Exercice 3
function puissance (a,b){
    return Math.pow(a,b)
}
console.log("Puissance",puissance(4,2))
//  Exercice 4
function somme (a,b){
    return a+b
}
console.log("somme",somme(2,3))
// Exercice 5
function minToSec (min){
    
    return min*60
}
console.log("min en seconde",minToSec(4))
// Exercice 6
function increment (a){
   return  a+=1
}
console.log("incrémentation",increment(4))
// Exercice 7
function triangle (base,haut){
    let sur
    return  sur=base*haut/2
}
console.log("triangle",triangle(4,5))
// Exercice 8
function reverseCar(a){
   let b=a.split("")
   let c=b.reverse()
    return      c.join("")
        
}
console.log("reverseCar",reverseCar("sara"))
// Exercice 9

     var arr=[1,2,3]
     let b=Math.max(...arr)
     console.log(b);
 //  Exercice 10
function FirstNum (){
    let tab=[1,2,3,4]
    return  tab[0]
    
}
console.log("premier num",FirstNum())
//  Exercice 11
// Exercice 12
function resteDiv (a,b){
return a%b
}
console.log("Div Two Num",resteDiv(1,3))
// Exercice 13

function Condition (a,b){
    let re=a+b
    if(re<100)
        return true
    
    else false
   
    }
    console.log("Somme égale 100",Condition(1,3))
    // Exercice 14
    function heure (h){
        return h*3600
    }
    console.log("heure en sec",heure(5))
// Exercice 15

function Condition (a){
    
    if(a<=100)
        return true
    
    else return false
   
    }
    console.log("le nombre est inférieure à zéro",Condition(3))
    // Exercice 16

function Egalité(a,b){
   
    if(a==b)
        return true
    
    else return false
   
    }
    console.log("est ce que ses nombre sont egale",Egalité(1,3))

     // Exercice 16

function Egalité(a){
   
    if(a%5==0)
        return true
    
    else return false
   
    }
    console.log("est ce que ses nombre sont egale",Egalité(5))
         // Exercice 17

function convHeureMin(heure,min){
   h=heure*3600;
   m=min*60
   let re=h+m
    return re
   
    }
    console.log("est ce que ses nombre sont egale",convHeureMin(1,10))

      // Exercice 18
      var tab=[1,2,3,4,5];
      for(var i=0;i< tab.length-1;i++)
          tab.push(tab.splice(-2-i,1)[0]);
           
      console.log("tavb reverse",tab); 
      // Exercice 19
      var tab=[1,2,3,4,5];
      console.log("le dernier élément est",tab.pop())
      // Exercice 20
      function tring(a){
          if (a== " ")
         return false
         else 
        return true }
      console.log("cette case est ",tring(" "))