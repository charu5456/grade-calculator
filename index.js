  
const calcy = () =>{
    let wd = document.getElementById('wd').value;
    let maths = document.getElementById('maths').value;
    let comp = document.getElementById('comp').value;
    let phy = document.getElementById('phy').value;
    let grades = "";
  
  
    let totalGrades = parseFloat(wd) + parseFloat(maths) + parseFloat(comp) + parseFloat(phy);
    alert(totalGrades);
  
    let perc = (totalGrades/400) * 100;
    alert(perc);
  
    debugger;
 
  
    if(perc >= 39.5){
      document.getElementById('showData').innerHTML = ` your total percentage is ${perc}%. `
    }
    else{
      document.getElementById('showData').innerHTML = ` your total percentage is ${perc}%. `
    }
  
    
  }
  