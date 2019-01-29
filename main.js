

// var product= [{"name":"bed","price":225.0},
// {"name":"bench","price":29.99},
// {"name":"chair","price":9.99},
// {"name":"couch","price":50.0},
// {"name":"pillow","price":5.0}]; 


function loadData(){
        
    let dataList = document.getElementById('productDisplay');
    var title = document.createElement("section");
    title.classList.add('row');

    title.innerHTML=`<div class="col"><h5>Product</h5></div> 
    <div class="col"><h5>Price</h5></div> 
    <div class="col"></div>`;
    dataList.append(title);

    // let productid= 0;
    product.forEach(element => {

        var listItem = document.createElement("section");
        listItem.classList.add('row');
       // listItem.classList.add('border');
       //productid++;

       listItem.innerHTML = `<div class="col">${element.name}</div>
       <div class="col">${element.price}</div>
       <div class="col" >Select quantity <input class="quantity" type="number" min=0 max=10 value=0> </input></div> `;
       dataList.append(listItem);
    });
    } //function load

var car=[];    

function addCar(){
var i = 0;
let dataList = document.getElementById("productDisplay");
    car.length=0;
  
    while (i < product.length)
    {
        let quantity = document.getElementsByClassName("quantity")[i].value;
        //console.log(quantity);

        if (quantity>0) {
            car.push({productName: product[i].name, price: product[i].price, buy: quantity })
        }
       
       // console.log (car[i].productname, car[i].price, car[i].buy );
        i = i + 1; // Alternatively, use i++;


}    //while 

} // addcar

function clearFields() {
    var fila= document.getElementsByClassName("quantity")
     fila.forEach(elem => {
         elem.value=null;
     }
        )
    //document.getElementsByClassName("quantity").value=null;
}


function showCar() {
    var total =0;
    addCar()
    refreshCar()
    if (car.length>0) {
        let dataList = document.getElementById("left");
        car.forEach(element=> {
    
            if (element.buy>0) {
                // let productRow = document.createElement("section");
                // productRow.classList.add('row');
                // let price = element.buy * element.price;
                // total= total + price;
                // productRow.innerHTML=`<div class="col"> <li>${element.buy} ${element.productName} x $ ${element.price} =$ ${price} </li> </div> `;
                // dataList.append( productRow);
                let price = element.buy * element.price;
                total= total + price;
                var listItem = document.createElement("li");
                 //listItem.innerText = students[i].name;
                listItem.innerText= element.buy + " " +  element.productName + " x $" + element.price + "= $" + price;
                dataList.appendChild(listItem);
    
            }
        });
    
       let showTotal = document.getElementById("right"); 
       showTotal.innerHTML= `<h3>Total: $${total.toFixed(2)}</h3>`;
  

    }// if
    else {
        alert ("You have not selected any products");

    }  


} //show car


function refreshCar() {
    //refresh car in the page
    let textTable = document.getElementById("left");
   
    while (textTable.hasChildNodes()) {
     textTable.removeChild(textTable.lastChild);
     }

     let textTable2 = document.getElementById("right");
   
     while (textTable2.hasChildNodes()) {
      textTable2.removeChild(textTable2.lastChild);
      }
      
    }


  function  buyCleanCar() {
   var answer= prompt ("Do you want to buy the selected products? Write Y or N").toUpperCase();
   
   if (answer==='Y') {
       alert ("Thanks for buying with us");

   } else {
        alert ("Thanks for your visit");
   }
   car.length=0;
    refreshCar();
    clearFields()
  }    


    

  