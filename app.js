var initial = document.querySelector("#iPrice");
var current = document.querySelector("#cPrice");
var Quantity = document.querySelector("#quantity");
var check = document.querySelector("#checkbutton");
var message = document.querySelector("#message");
check.addEventListener('click', clickEventHandler);

function clickEventHandler(){
    var q = Quantity.value;
    var c = current.value;
    var i= initial.value;
    var sellingPrice=q*c;
    var costPrice = q*i;
    
       if(q && c && i){
        if(i<0 || q<0 || c<0){
            message.innerText ='enter positive inputs!!'
        }
        else{
        if(sellingPrice > costPrice){
            var r=  profitCalculator(sellingPrice,costPrice);
            console.log("profit",r);
          }
          if(sellingPrice < costPrice){
              var m = lossCalculator(sellingPrice,costPrice);
              console.log("loss",m);
          }
          if(sellingPrice == costPrice){
            message.innerText = "You have neither gained nor lost!!!"
          }}
        }
        
        else{
            message.innerText ="enter the required values!!"
        }
    }

function profitCalculator(sellingPrice,costPrice){
     var profit= sellingPrice - costPrice;
     var profitPercentage = (profit/costPrice)*100;
     message.innerText = 'Your profit is ' + profit + ' by ' + profitPercentage.toFixed(2) + '%';

    
    
}
function lossCalculator(sellingPrice,costPrice){
    var loss = costPrice - sellingPrice;
    var lossPercentage = (loss/costPrice)*100;
    message.innerText = 'Your loss is ' + loss
+ ' by ' + lossPercentage.toFixed(2) + '%'; 
}
