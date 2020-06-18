     const calBtn = document.querySelector(".calBtn");

     calBtn.addEventListener('click', simpleInterest);

    function simpleInterest(){
       p = document.getElementById("p").value;
       n = document.getElementById("n").value;
       r = 10;
       result = document.getElementById("exp");
       result.innerHTML = 	"N" + (p*n*r/100);


    }