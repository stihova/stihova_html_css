function clearDisplay(val)
      {
      	document.getElementById("display").value=val;
        
        document.getElementById("addnumber0").disabled=true;
        document.getElementById("equalbutton").disabled=true;
               
        document.getElementById("addnumber1").disabled=false;
        document.getElementById("addnumber2").disabled=false;
        document.getElementById("addnumber3").disabled=false;
        document.getElementById("addnumber4").disabled=false;
        document.getElementById("addnumber5").disabled=false;
        document.getElementById("addnumber6").disabled=false;
        document.getElementById("addnumber7").disabled=false;
        document.getElementById("addnumber8").disabled=false;
        document.getElementById("addnumber9").disabled=false;
      }
      
   function clearLast()
      {
        var string = display.value
        var str = string.substring(0, string.length-1);
        document.getElementById("display").value=str;
        
        document.getElementById("addnumber0").disabled=false;
        document.getElementById("addoperand/").disabled=false;
        document.getElementById("addoperand*").disabled=false;
        document.getElementById("addoperand-").disabled=false;
        document.getElementById("addoperand+").disabled=false;

      }

   var display = document.getElementById("display")	 

   function addNumber(button)
      {
        var number = button.value
        
        display.value += number

        console.log(number)
        
        document.getElementById("addnumber0").disabled=false;
        document.getElementById("addoperand/").disabled=false;
        document.getElementById("addoperand*").disabled=false;
        document.getElementById("addoperand-").disabled=false;
        document.getElementById("addoperand+").disabled=false;
        document.getElementById("equalbutton").disabled=false;

      }
      
   function addOperand(button)
      {
        var symbol = button.value
        
        display.value += symbol

        console.log(symbol)
        
        document.getElementById("addoperand/").disabled = true;
        document.getElementById("addoperand*").disabled = true;
        document.getElementById("addoperand-").disabled = true;
        document.getElementById("addoperand+").disabled = true;
        document.getElementById("addnumber0").disabled=false;
        document.getElementById("addnumber1").disabled=false;
        document.getElementById("addnumber2").disabled=false;
        document.getElementById("addnumber3").disabled=false;
        document.getElementById("addnumber4").disabled=false;
        document.getElementById("addnumber5").disabled=false;
        document.getElementById("addnumber6").disabled=false;
        document.getElementById("addnumber7").disabled=false;
        document.getElementById("addnumber8").disabled=false;
        document.getElementById("addnumber9").disabled=false;
      }
     
      
   function equal() 
      { 
       clearDisplay(eval(document.getElementById("display").value));
       
        document.getElementById("addnumber0").disabled=true;
        document.getElementById("addnumber1").disabled=true;
        document.getElementById("addnumber2").disabled=true;
        document.getElementById("addnumber3").disabled=true;
        document.getElementById("addnumber4").disabled=true;
        document.getElementById("addnumber5").disabled=true;
        document.getElementById("addnumber6").disabled=true;
        document.getElementById("addnumber7").disabled=true;
        document.getElementById("addnumber8").disabled=true;
        document.getElementById("addnumber9").disabled=true;
      }  
