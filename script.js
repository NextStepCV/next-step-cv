// ================================
// Next Step CV - JavaScript
// ================================


let data = JSON.parse(localStorage.getItem("nextStepData")) || {

packages:[
{
name:"Basic ATS CV",
price:"200 EGP",
desc:"ATS CV Creation"
},

{
name:"Premium",
price:"500 EGP",
desc:"CV + LinkedIn Optimization"
},

{
name:"Complete",
price:"800 EGP",
desc:"CV + LinkedIn + Cover Letter"
}
],


services:[

{
name:"ATS CV",
desc:"Professional CV optimized for ATS systems"
},

{
name:"LinkedIn Optimization",
desc:"Improve your profile for recruiters"
},

{
name:"Cover Letter",
desc:"Professional job cover letter"
}

]

};





function loadServices(){


let box=document.getElementById("servicesContainer");

if(!box) return;


box.innerHTML="";


data.services.forEach(service=>{


box.innerHTML += `

<div class="card">

<h3>${service.name}</h3>

<p>${service.desc}</p>

</div>

`;

});


}








function loadPackages(){


let box=document.getElementById("packagesContainer");

let select=document.getElementById("packageSelect");


if(!box) return;


box.innerHTML="";
select.innerHTML="";


data.packages.forEach(item=>{


box.innerHTML += `

<div class="card">

<h3>${item.name}</h3>

<h2>${item.price}</h2>

<p>${item.desc}</p>


<button onclick="choosePackage('${item.name}')">

Choose

</button>


</div>

`;



select.innerHTML += `

<option>

${item.name} - ${item.price}

</option>

`;



});


}



loadServices();
loadPackages();










// ======================
// WhatsApp
// ======================


function choosePackage(name){


let phone="201599900095";


let message =
`السلام عليكم، عايز أطلب باقة:
${name}`;



window.open(

"https://wa.me/"
+phone+
"?text="
+encodeURIComponent(message)

);


}









// Form


let form=document.getElementById("cvForm");


if(form){


form.addEventListener("submit",function(e){


e.preventDefault();


let name =
document.getElementById("name").value;



let pack =
document.getElementById("packageSelect").value;



let phone="201599900095";



let message =
`السلام عليكم

الاسم:
${name}

الباقة:
${pack}`;



window.open(

"https://wa.me/"
+phone+
"?text="
+encodeURIComponent(message)

);



});

}









// ======================
// Admin open 3 clicks
// ======================


let clicks=0;


let logo=document.getElementById("logoClick");


if(logo){


logo.addEventListener("click",()=>{


clicks++;


setTimeout(()=>{

clicks=0;

},1000);



if(clicks===3){


document.getElementById("loginBox")
.classList.remove("hidden");


}


});


}








// Login


function login(){


let pass =
document.getElementById("password").value;



if(pass==="1234"){


document.getElementById("loginBox")
.classList.add("hidden");


document.getElementById("adminPanel")
.classList.remove("hidden");


openAdmin();


}

else{


alert("Wrong Password");


}


}









// Admin panel


function openAdmin(){


let box =
document.getElementById("adminPackages");


box.innerHTML="";



data.packages.forEach((item,index)=>{


box.innerHTML += `


<div class="admin-item">


<input 
id="pname${index}"
value="${item.name}">


<input 
id="pprice${index}"
value="${item.price}">


<input 
id="pdesc${index}"
value="${item.desc}">


</div>

`;



});


}









function saveChanges(){


data.packages.forEach((item,index)=>{


item.name =
document.getElementById("pname"+index).value;


item.price =
document.getElementById("pprice"+index).value;


item.desc =
document.getElementById("pdesc"+index).value;



});



localStorage.setItem(

"nextStepData",

JSON.stringify(data)

);



loadPackages();


alert("Saved Successfully");


}








function closeAdmin(){


document.getElementById("adminPanel")
.classList.add("hidden");


document.getElementById("password").value="";


}
