var a=10
var b=20
console.log(a=b);

//function
function abc(){
    console.log("hello");
}
abc()


//function
function samsung(){
    console.log("this is a samsung mobile");
}
function redmi(){
    console.log("this is a redmi mobile");
}
function oppo(){
    console.log("this is a OPPO mobile");
}
function IPHONE15(){
    console.log("this is a IPHONE15 mobile");
}
samsung()
samsung()
samsung()
samsung()
redmi()
oppo()
IPHONE15()

//function
var a=10
var b=20
function add(){
    console.log(a+b);
}
add()

//function
var factor ="Dhanush"
var favplayer="dhoni"
var favmoveie="irugapattru"
console.log("faveplaye:"+"dhoni")

function favrite()
{
    console.log("factor:"+"Dhanushu")
    console.log("favmovies:"+"irugapattru");

}
favrite()
 
function minus(a,b)
{
    console.log(a-b);
}
minus(50,30)


// var length =50;
// var breath =50;
// var area = length+ breath
// console.log(area);


//operators

function area(l,b)
{
    var a =l+b
    console.log(a);
}

var length=10
var breath=20
area(10,20)


//retun type
function add(a,b)

{
    return(a+b)
}
var total = add(1000,20)
console.log(total);

if(true)
{
    console.log("its true");
}
else
{
    console.log("its fales");
}



//if else method
var rain = true

if(rain)
{
    console.log("taken umberla" );
}
else
{
    console.log("enjiy the life");
}
var rain = false

if(rain)
{
    console.log("taken umberla" );
}
else
{
    console.log("enjiy the life");
}

var homewrok = false
if(homewrok)
{
    console.log("yes im complete my home wrok");
}
else
{
    console.log("No iam unable to finish my wrok");
}
var cookikes = true
if(cookikes)
{
    console.log("would you like cookie");
}
else{
    console.log("Time to bake more cookie");
}

var session = "spring"

if (session == "spring")
{
    console.log("enjoy the bloomimg flowers");
}


//for 
// for(i=1; i<=10; i=i++)
// {
//     console.log("uma")

// }
// for(count=1; count<=10; count=count+1 )
// {
//     console.log(count)

// }

//for loop method
for(i=1; i>=10; i=i+1 )
{
    console.log(count)

}


//array of join method
const weekdays = ["sunday" ,"monday", "tuesday", "wednesday", "thursday" ,"friday", "Satruday"];
let weekdayss =weekdays.join("1 " );
console.log(weekdayss);

//split method
let fullname = "indhu mathi";
let name = fullname.split(" ");
let firstname =name[0];
let lastname =name[1];
console.log(name
    );


 person.class= "AI"
console.log(person.class)

console.log(person.Gender);
 console.log(person.classtitels.development);



 //create new object
 let item = {
    name :"phone",
    Quantity : 1,

    // categories :["iphones", "nokia" ,"oppo"],

    price :25000,
    returnable : true
 }
 console.log(item);
 console.log(item.categories);
//  console.log(item.categories)[0];

 
 //another way of create object
 let item2 = new Object();
 item2.name = "charger"
 item2.price = 700
 item2.Quantity = 1
 console.log(item2);

 //accessing object
 //dot notatyion

 console.log(item.price);
 item.price = 28000
 console.log(item.price);
 console.log(item);

 // square notation
console.log(item["price"]);
let key = "price"
item[key] = 28500
//  item .key=9000
console.log(item);





// for each method
const numbers =[1,2];
numbers.forEach((item, index, arr)=> {
console.log(arr);
// console.log('a['+ item +']='+index);

});



// let sum = 8;
// numbers.forEach(item => {
//     sum += item;
// });
// console.log(sum);


// var a = [50,60]
// numbers.forEach(item =>{
//     sum +=item
// });
// console.log(sum);

// function consoleitem(item,index,arr)  {
//     console.log('a['+ index +']='+item);

// }
//for each method
let students =["indhu","boobalaki","siva"]
students.forEach(myfunction)

function myfunction(item,index,arr){
console.log(item+index+arr);
console.log(arr[0]);
}

//object method
let person =
{
name: "indhu",
age: 25,
class: "full stack developmet",
Gender: "female",
Addrerss: "salem",

classtitels: {
development:"python",
desings:"photos"
},
indhu: {
location:"coimbatore",
tem:"high"
},
raji: {
name:"rajeshwari",
age : 21,
institute :"kitkat"
},
}

console.log(person.indhu);
console.log(person.indhu.location);
console.log(person.raji.institute);


let arr_obj =[
{name:"a",email:"a@gamil.com" ,id:"a1",pass:123},
{name:"b",email:"b@gmail.com",id:"b2",pass:456},
{name:"c", email:"c@gmail.com",id:"c3",pass:789}
]


let final_obj = arr_obj.filter((u)=>{
return u.name==="c";
});

console.log(final_obj[0]);


console.log(typeof "indhu");



for(i=0;i<=10; i=i++){
    console.log(indhu);
}