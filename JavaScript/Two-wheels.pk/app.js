var two_wheels ={
    Honda:{
        Honda_Africa_Twin: {
            name: "Honda Africa Twin",
            model: "2023",
            color: ["black","red"],
            price: "$ 29080",
            image: "/images/Honda/h1.png"
            
        },
        Honda_CB300R:{
            name: "Honda CB300R",
            model: "2023",
            color: ["black", "white"],
            price: "$ 8206",
            image: "/images/Honda/h2.png"
        },
        Honda_CMX_500_S:{
            name: "Honda CMX 500 S" ,
            model: "2023",
            color: ["black","white"],
            price: "$ 10888",
            image: "/images/Honda/h3.png"
        },
        Honda_CRF_125_F:{
            name: "Honda CRF 125 F" ,
            model: "2023",
            color: ["black","white","red"],
            price: "$ 5098",
            image: "/images/Honda/h4.png"
        },
        Honda_XL750_Translap:{
            name: "Honda XL750 Translap" ,
            model: "2023",
            color: ["black","white","red","blue"],
            price: "$ 16026",
            image: "/images/Honda/h5.png"
        }  
    }
}

var main = document.getElementById("main");
var brand = document.getElementById("brand");
var model = document.getElementById("model");

brand.innerHTML+= `<option>Select brand name </option>`
model.innerHTML+= `<option> Select model</option>`

// function loop(){
for(var key in two_wheels){
    brand.innerHTML +=`<option value='${key}'> ${key}</option>`
    for(var key1 in two_wheels[key]){
        var objs =two_wheels[key][key1];
        // console.log(objs.color)
        var colorDiv="";
        for(var i=0;i<objs.color.length;i++){
            colorDiv += `<div class='${objs.color[i]}'> </div>`
            console.log(objs.color[i])
        }
        main.innerHTML += `
        <div class="col-12 col-sm-12 col-md-6 col-lg-3 mb-3">
      <div class="card" style="width: 18rem;">
        <img src="${objs.image || "/images/Honda/h1.png"} " class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${key1.toUpperCase()} (${objs.model})</h5>
          <p class="card-text"></p>
          <h6>${objs.price} </h6>
          <div class="d-flex g-2">
            ${colorDiv}
          </div>
        </div>
      </div>
    </div>
        `
        }

    }
// }

// loop();



function setModel(){
    model.innerHTML ="";
    model.innerHTML += `<option>Select model name</option>`
    for(var key in two_wheels[brand.value]){
        model.innerHTML +=`<option value='${key}'>${key} </option>`
    }
}

var bikeDetail = document.getElementById('bike-detail');

function searchbike(){
    main.style.display = "none";
    bikeDetail.style.display = "flex";
    var bike = two_wheels[brand.value][model.value];
    bikeDetail.innerHTML = `
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${bike.image || "/images/Honda/h1.png"}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${model.value.toUpperCase()}</h5>
            <p class="card-text"></p>
          <h6>${bike.price} </h6>
          <div class="d-flex g-2">
            ${colorDiv}
          </div>
          </div>
        </div>
      </div>
    </div>
    `
}



function clearSearch(){
    bikeDetail.style.display = "none";
    main.style.display ="flex"
//     loop();
}
    


