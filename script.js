 let nameError = document.getElementById('nameerror');
 let mobileError = document.getElementById('mobileerror');
 let emailidError = document.getElementById('emailiderror');
 let addressError = document.getElementById('addreserror');
 let submitError = document.getElementById('submiterror');

 
 function validateName(){

 }
    

    function validateName(){
    
    let name = document.getElementById('pname').value;
   if(name.length == 0){
              nameError.innerHTML = 'Name is required';
          return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        
        nameError.innerHTML = 'Write full name ';
        return false;

    }
    nameError.innerHTML = 'valid';
    return true;
 }
  
