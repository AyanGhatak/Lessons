var tabLinks = [];
var contentDivs = [];
var flag=0;


function init() {

  // Grab the tab links and content divs from the page
  var tabListItems = document.getElementById('tabs').childNodes;

  for ( i = 0; i < tabListItems.length; i++ ) {
    
    if ( tabListItems[i].nodeName == "LI" ) {

      var tabLink = getFirstChildWithTagName( tabListItems[i], 'A' );
      var id1 = getHash( tabLink.getAttribute('href') );
      
      tabLinks[id1] = tabLink;
      contentDivs[id1] = document.getElementById( id );
    }
  }

  // Assign onclick events to the tab links, and
  // highlight the first tab
  var i = 0;

  for ( var id in tabLinks ) {
    tabLinks[id].onclick = showTab;
    tabLinks[id].onfocus = function() { this.blur();};
    if ( i === 0 ) tabLinks[id].className = 'selected';
    i++;
  }

  // Hide all content divs except the first
  i = 0;

  for ( id in contentDivs ) {
    if ( i !== 0 ) contentDivs[id].className = 'tabContent hide';
    i++;
  }
}

function showTab() {
  var selectedId = getHash( this.getAttribute('href') );

  // Highlight the selected tab, and dim all others.
  // Also show the selected content div, and hide all others.
  for ( var id in contentDivs ) {
    if ( id == selectedId ) {
      tabLinks[id].className = 'selected';
      contentDivs[id].className = 'tabContent';
    } else {
      tabLinks[id].className = '';
      contentDivs[id].className = 'tabContent hide';
    }
  }

  // Stop the browser following the link
  return false;
}

function getFirstChildWithTagName( element, tagName ) {
  for ( var i = 0; i < element.childNodes.length; i++ ) {
    
    if ( element.childNodes[i].nodeName == tagName ) return element.childNodes[i];
  }
}

function getHash( url ) {
  var hashPos = url.lastIndexOf ( '#' );
  return url.substring( hashPos + 1 );
}

function checkEmail(email){ 
  
  var pattern=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
  
  if(pattern.test(email)) {         
  return true;
  } else {   
  return false; 
  }
}

function processFormData() { 
  var name_element = document.getElementById('txt_name');
  var country_element = document.getElementById('txt_country');
  var state_element = document.getElementById('state');
  var email_element = document.getElementById('txt_email');
  var add_element = document.getElementById('txt_add');
  
  var name = name_element.value.trim();
  var country = country_element.value.trim();
  var state = state_element.value.trim();
  var email = email_element.value.trim();
  var add = add_element.value,
      sex,
      obj={},
      dataArr= [];
     

  var error_message = 'The following fields had errors in them: \n\n';
  var data = 'You entered the following information: \n\n';

  var error_flag = false;
  
  if(name === '') {
    error_message += 'Name: Please enter your name\n';
    error_flag = true;
  } else {
    obj.name = name;
    data += 'Name: ' + name + '\n';
  }

  if(country === '') {
    error_message += 'Country: Please enter your country\n';
    error_flag = true;
  } else {
    obj.country=country;
    data += 'Country: ' + country + '\n';
    obj.state = state;
    data += 'State: '+ state+'\n';
      
  }

  if(!checkEmail(email)) {
    error_message += 'Email: Please enter a valid email address';
    error_flag = true;
  } else {
    obj.email=email;
    data += 'Email: ' + email + '\n';
  }
  obj.add=add;
  data += 'Address: ' + add.trim()+ '\n';

  if (document.getElementById('male').checked) {
    sex = document.getElementById('male').value;
  }
  if (document.getElementById('female').checked) {
    sex = document.getElementById('female').value;
  }
  obj.sex=sex;
  data += 'Sex: '+sex + "\n";
  obj.arr = {};

  data += 'Interest: \n';
  if (document.getElementById('football').checked) {
    data += document.getElementById('football').value+ "\n";
    obj.arr.push(document.getElementById('football').value);
  }
  if (document.getElementById('movie').checked) {
    document.getElementById("moviesType").style.visibility = "visible";
    data += "Movies :  ";
    movType= [];
    if (document.getElementById('horror').checked){
      movType.push(document.getElementById('horror').value);
      data += document.getElementById('horror').value + " "; 
    }
    if (document.getElementById('animation').checked){
      movType.push(document.getElementById('animation').value);
      data += document.getElementById('animation').value + " "; 
    }
    if (document.getElementById('romantic').checked){
      movType.push(document.getElementById('romantic').value);
      data += document.getElementById('romantic').value + " "; 
    }
    obj.arr.push(movType);
    hideMov();
    hidePhone();

  }
  if (document.getElementById('reading').checked) {
    data += "\n"+ document.getElementById('reading').value+ " ";
    obj.arr.push(document.getElementById('reading').value);
  }
  if(error_flag) {
    console.log(error_message);
  }
  else {
    console.log(data);
    console.log("\n"+JSON.stringify(obj));
  }
}


function phoneCheck(inputtxt)  
{
  var phoneno = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
  document.getElementById("guide").innerHTML = "";
  if(inputtxt.value.match(phoneno)){
    document.getElementById("txt_phone").style.border = "1px solid #717171";
    document.getElementById("error_phone").style.visibility = "hidden";
    return true;
  }
  else{ 
    document.getElementById("txt_phone").style.border = "solid #FF0000";
    document.getElementById("error_phone").style.visibility = "visible";
    return false;
  }
}

function moviesCheck()      
{      
  if(document.subscribeForm.checkbox2.checked === true){      
    document.getElementById("moviesType").style.visibility = "visible";     
  }      
}   

function hideMov(){
      document.getElementById("moviesType").style.visibility = "hidden";  
}

function hidePhone(){
      document.getElementById("error_phone").style.visibility = "hidden";  
}
function countryCheck(){
  
  var country_element = document.getElementById('txt_country'); 
  var country = country_element.value.trim();
  var select = document.getElementById("state");
  var options = [{},{}];
  options[0].name = "United States of America";
  options[0].state = ["California","Texas","Virginia","Florida","Arizona"];
  options[1].name = "India";
  options[1].state = ["West Bengal","Bihar","Karnataka","Andhra Pradesh","Assam"];
  for(var i = 0; i < options.length; i++) {
    if(options[i].name === country){
      for(var j=0; j< options[i].state.length; j++){

        var opt = options[i].state[j];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
      }
    }
  }
} 


