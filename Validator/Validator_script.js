function CheckFraction()
    {
      var input = document.getElementById("input").value;
      var regEx = /^[+-]?[0-9]{1,10}([.,][0-9]{1,5})?$/;
      return regEx.test(input);  
    }

function ValidateInput()
    {
       var res = document.getElementById("result");
      if (CheckFraction(input))
        {
          res.innerHTML = 'True :)';
          res.style.color = "#00802b";
        }
        else
        {
          res.innerHTML = 'False!!';
          res.style.color = "#ff0000";
        }
    } 
