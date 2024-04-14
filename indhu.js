
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
const product = [
   {
       id: 0,
       image: './image/img2.jpeg',
       title: 'Z Flip Foldable Mobile',
       price: 120,
   },
   {
       id: 1,
       image: './image/img4.jpeg',
       title: 'Air Pods Pro',
       price: 60,
   },
   {
       id: 2,
       image: './image/img6(5).webp',
       title: '250D DSLR Camera',
       price: 230,
   },
   {
       id: 3,
       image: './image/img6(1).webp',
       title: 'Head Phones',
       price: 100,
   },
   {
    id: 3,
    image: './image/img6(2).webp',
    title: 'Head Phones',
    price: 100,
},
   {
    id: 3,
    image: './image/img6(3).webp',
    title: 'Head Phones',
    price: 100,
},
{
    id: 3,
    image: './image/img6(6).webp',
    title: 'Head Phones',
    price: 100,
},
{
    id: 3,
    image: './image/img68.webp',
    title: 'Head Phones',
    price: 100,
},
{
    id: 3,
    image: './image/exp.png',
    title: 'Head Phones',
    price: 100,
},
{
    id: 3,
    image: './image/exp.png',
    title: 'Head Phones',
    price: 100,
},
{
    id: 3,
    image: './image/aqua.jpg',
    title: 'Head Phones',
    price: 100,
},
{
    id: 3,
    image: './image/exp.png',
    title: 'Head Phones',
    price: 100,
},
];
const categories = [...new Set(product.map((item)=>
   {return item}))]
   let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
   var {image, title, price} = item;
   return(
       `<div class='box'>
           <div class='img-box'>
               <img class='images' src=${image}></img>
           </div>
       <div class='bottom'>
       <p>${title}</p>
       <h2>$ ${price}.00</h2>`+
       "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
       `</div>
       </div>`
   )
}).join('')

var cart =[];

function addtocart(a){
   cart.push({...categories[a]});
   displaycart();
}
function delElement(a){
   cart.splice(a, 1);
   displaycart();
}

function displaycart(){
   let j = 0, total=0;
   document.getElementById("count").innerHTML=cart.length;
   if(cart.length==0){
       document.getElementById('cartItem').innerHTML = "Your cart is empty";
       document.getElementById("total").innerHTML = "$ "+0+".00";
   }
   else{
       document.getElementById("cartItem").innerHTML = cart.map((items)=>
       {
           var {image, title, price} = items;
           total=total+price;
           document.getElementById("total").innerHTML = "$ "+total+".00";
           return(
               `<div class='cart-item'>
               <div class='row-img'>
                   <img class='rowimg' src=${image}>
               </div>
               <p style='font-size:12px;'>${title}</p>
               <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
               "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
           );
       }).join('');
   }

   
}