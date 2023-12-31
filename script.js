// 1.programs in anonymous function 

  //(a) Print odd numbers in an array

 let ans=[]; 

let odd=function (arr)  {     
       for(let i in arr){
           if(arr[i]%2 !==0){
               ans.push(arr[i]);
       }

       }
       
};     

    odd([1,2,3,4,5,6,7,8]);
    
  console.log(ans);

//(b) Convert all the strings to title caps in a string array

let titlecaps=function (arr){

for(i=0;i<arr.length;i++){

   val=arr[i].split("");

   c=(val.shift()).toUpperCase();

   b=val.unshift(c);

  console.log(val.join(""));
    } 
};

titlecaps(["apple","mango","grape"]);
 
  //(c)Sum of all numbers in an array

  let add=function (arr){

let ans=0;

for(let i in arr){

ans=ans+arr[i];
    
}
console.log(ans);
}; 
 
add([1,2,3,4,5,6,7,8,9]);

  //(d)Return all the prime numbers in an array

let ans=[];
let prime=[];
let primeno=function (arr){for(let i in arr){
    if(arr[i]==2){prime.push(arr[i])}
    else if(arr[i]>2 && arr[i]%2 !==0){ans.push(arr[i])}
}
for(let a in ans){
    temp=0;
    for(i1=1; i1<=ans[a]; i1++){
     if(ans[a]%i1===0){temp=temp+1}   
    }
    if(temp<=2){prime.push(ans[a])}
    
}};
primeno([1,2,3,4,5,6,7,8,9]);
console.log(prime);

//(e)Return all the palindromes in an array

let ispalindrome=true;
let ispal=function (a){
for(i=0, j=a.length-1; i<a.length,j>=0;i++,j-- ){
    
 if(a[i]===a[j]){continue}
    else{ispalindrome=false;
      break;   
    }
   
    }
 if(ispalindrome===true){console.log(a,"=>","is a palindrome")}  
else{console.log(a,"=>","is not a palindrome")}};

let see=ispal();

//(f)Return median of two sorted arrays of the same size.

 let arr1=[10,15,20,25];
 let arr2=[30,35,40,45];
 
let median=function (arr1,arr2){
let arr=arr1.concat(arr2);
let c =arr.sort((a,b)=>a-b);

if(c.length%2 !==0){  
   console.log(c[parseInt(c.length/2)])}
 else {
     
   
    console.log((c[c.length/2-1]+c[c.length/2])/2);
 }};
 
 median(arr1,arr2);

  //(g)Remove duplicates from an array

  let duplicate=function (arr){
     
return arr.filter((item,index)=>arr
.indexOf(item)===index);
   
    };

  console.log(duplicate([1,2,3,4,3,2]));


  //(h)Rotate an array by k times

  let rotate=function (array, k) {

    for (var i = 0; i < k; i++) {
        array.unshift(array.pop());
    }

    return array;
};


console.log(rotate([1,2,3,4,5,6,7],3));
 
//programs in IIFE 

//(a)Print odd numbers in an array

let ans=[]; 

let odd=function (arr)  {     
       for(let i in arr){
           if(arr[i]%2 !==0){
               ans.push(arr[i]);
       }

       }
       
}([1,2,3,4,5,6,7,8])       

 console.log(ans) 

// (b) Convert all the strings to title caps in a string array

let titlecaps=function (arr){

for(i=0;i<arr.length;i++){

   val=arr[i].split("")

   c=(val.shift()).toUpperCase()

   b=val.unshift(c)

  console.log(val.join(""))
    } 
}(["apple","mango","grape"])

//(c)Sum of all numbers in an array

  let add=function (arr){

let ans=0;

for(let i in arr){

ans=ans+arr[i];
    
}
console.log(ans);
}([987,98,676,786,8,9])
 
//(d)Return all the prime numbers in an array

let ans=[];
let prime=[];
let primeno=function (arr){for(let i in arr){
    if(arr[i]==2){prime.push(arr[i])}
    else if(arr[i]>2 && arr[i]%2 !==0){ans.push(arr[i])}
}
for(let a in ans){
    temp=0
    for(i1=1; i1<=ans[a]; i1++){
     if(ans[a]%i1===0){temp=temp+1}   
    }
    if(temp<=2){prime.push(ans[a])}
    
}}([5,6,7,8,9,49,29]);
console.log(prime);

//(e)Return all the palindromes in an array

let ispalindrome=true;
let ispal=function (a){
for(i=0, j=a.length-1; i<a.length,j>=0;i++,j-- ){
    
 if(a[i]===a[j]){continue}
    else{ispalindrome=false;
      break ;  
    }
   
    }
 if(ispalindrome===true){console.log(a,"=>","is a palindrome")}  
else{console.log(a,"=>","is not a palindrome")}
}("noon");

//(f)

let arr1=[10,15,20,25];
 let arr2=[30,35,40,45];
 
let median=function (arr1,arr2){
let arr=arr1.concat(arr2);
let c =arr.sort((a,b)=>a-b);

if(c.length%2 !==0){  
   console.log(c[parseInt(c.length/2)])}
 else {
     
   
    console.log((c[c.length/2-1]+c[c.length/2])/2);
 }
    
    
}(arr1,arr2);

 //(g)Remove duplicates from an array

let duplicate=function (arr){
     
return arr.filter((item,index)=>arr
.indexOf(item)===index);
   
    }([1,2,3,4,3,2]);

  console.log(duplicate);

 //(h)Rotate an array by k times

  let rotate=function (array, k) {

    for (var i = 0; i < k; i++) {
        array.unshift(array.pop());
    }

    return array;
}([1,2,3,4,5,6,7],3);


console.log(rotate);


//2) programs in arrow functions.

//(a) Print odd numbers in an array

   let ans=[]; 

let odd= (arr) => {     
       for(let i in arr){
           if(arr[i]%2 !==0){
               ans.push(arr[i]);
       }

       }
       
};     

    odd([11,15,14,29,56,37]);
    
  console.log(ans);

//(b) Convert all the strings to title caps in a string array

let titlecaps=(arr)=>{

for(i=0;i<arr.length;i++){

   val=arr[i].split("");

   c=(val.shift()).toUpperCase();

   b=val.unshift(c);

  console.log(val.join(""));
    } 
};

titlecaps(["sun","man","moon"]);

//(c)Sum of all numbers in an array

 let add=(arr)=>{

let ans=0;

for(let i in arr){

ans=ans+arr[i];
    
}
console.log(ans);
}; 
 
add([1,2,3,4,5,6,7,8,9]);

//(d)Return all the prime numbers in an array

let ans=[];
let prime=[];
let primeno=(arr)=>{for(let i in arr){
    if(arr[i]==2){prime.push(arr[i])}
    else if(arr[i]>2 && arr[i]%2 !==0){ans.push(arr[i])}
}
for(let a in ans){
    temp=0;
    for(i1=1; i1<=ans[a]; i1++){
     if(ans[a]%i1===0){temp=temp+1}   
    }
    if(temp<=2){prime.push(ans[a])}
    
}};
primeno([1,2,3,4,5,6,7,8,9]);
console.log(prime);

//(e)Return all the palindromes in an array

let ispalindrome=true;
let ispal= (a)=>{
for(i=0, j=a.length-1; i<a.length,j>=0;i++,j-- ){
    
 if(a[i]===a[j]){continue}
    else{ispalindrome=false;
      break;   
    }
   
    }
 if(ispalindrome===true){console.log(a,"=>","is a palindrome")}  
else{console.log(a,"=>","is not a palindrome")}};

let see=ispal();
