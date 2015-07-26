(function render(){
	
	initial();
	function initial(){
		
		var contain = create_div_element('container');
		document.getElementsByTagName('body')[0].appendChild(contain);
		
		var choice = create_div_element("choice");
		contain.appendChild(choice);

		var radio_name = ["Basic_Calculator","Date_Time_Calculator","Mortgage_Calculator"];
		for(i=0;i<3;i++){
			choice.appendChild(create_input_element(radio_name[i]));
			choice.appendChild(document.createTextNode(radio_name[i]));
		}
		contain.appendChild(create_div_element("display"));
	}
	
	function create_div_element(name){
		var newDiv = document.createElement('div'),
			style_obj = get_detail(name);
		newDiv.id= name;
		newDiv.innerHTML = style_obj.display,
		newDiv.style.width = style_obj.width,
		newDiv.style.height= style_obj.height,
		newDiv.style.position = style_obj.position,
		newDiv.style.margin = style_obj.margin,
		newDiv.style.cssFloat= style_obj.floating;
		newDiv.style.border = style_obj.borders;
		newDiv.style.top = style_obj.top;
		newDiv.style.left = style_obj.left;
		newDiv.style.padding = style_obj.padding;
		newDiv.className = style_obj.classname;
		return newDiv;
	}

	function create_input_element(name){
		var newInput = document.createElement('input'),
			input_obj = get_detail(name);
		newInput.id = name;
		newInput.setAttribute('type', input_obj.type);
		newInput.setAttribute('value', input_obj.value);
		newInput.setAttribute('name',input_obj.name);
		newInput.addEventListener(input_obj.eventListener.type , input_obj.eventListener.action);
		return newInput;
	}

	function get_detail(name){
		var info = {
			Basic_Calculator : {
				type : 'radio',
				value : 'Calculate',
				eventListener : {
					type : 'click',
					action : check
				},
				name : "calculator_type"	
			},
			display : {
				width : "95%",
				height : "85%",
				position : "relative",
				margin : "1%",
				display : "",
				floating : "",
				borders : "",
				top : "",
				left : "",
				padding : "",
				classname : ""	
			},
			basic_container : {
				width : "26%",
				height : "65%",
				position : "relative",
				margin : "1%",
				display : "",
				floating : "",
				borders : "1px solid #000",
				top : "1%",
				left : "25%",
				padding : "",
				classname : ""
			},
			top_screen : {
				width : "95%",
				height : "10%",
				position : "relative",
				margin : "1%",
				display : "",
				floating : "",
				borders : "1px solid #000",
				top : "1%",
				left : "0%",
				padding : "",
				classname : ""
			},
			button : {
				width : "13%",
				height : "5.5%",
				position : "relative",
				margin : "0.5%",
				display : name,
				floating : "left",
				borders : "1px solid #000",
				top : "",
				left : "",
				padding : "5%",
				classname : "calculator_buttons"	
			},
			mortgage_container : {
				width : "97%",
				height : "50%",
				position : "relative",
				margin : "1%",
				display : "",
				floating : "left",
				borders : "",
				top : "",
				left : "",
				padding : "",
				classname : ""
			},
			Description: {
				width : "97%",
				height : "12%",
				position : "relative",
				margin : "1%",
				display : name,
				floating : "left",
				borders : "",
				top : "",
				left : "",
				padding : "",
				classname : ""	
			},
			text : {
				type : 'number',
				value : '',
				eventListener: {},
				name : ''
			},
			calculate_button : {
				type : 'button',
				value : 'Calculate',
				eventListener : {
					type : 'click',
					action : calculate('mortgage')
				},
				name : ""
			},

			container : {
				width : "60%",
				height : "80%",
				position : "absolute",
				margin : "0%",
				display : "",
				floating : "",
				borders : "",
				top : "",
				left : "",
				padding : "",
				classname : ""	
			},
			choice : {
				width : "95%",
				height : "10%",
				position : "relative",
				margin : "1%",
				display : "",
				floating : "",
				borders : "",
				top : "",
				left : "",
				padding : "",
				classname : ""			
			},
			dateTime_container1 : {
				width : "90%",
				height : "40%",
				position : "relative",
				margin : "1%",
				display : "",
				floating : "",
				borders : "",
				top : "",
				left : "",
				padding : "",
				classname : ""	
			},
			dateTime_container11 : {
				width : "29%",
				height : "80%",
				position : "relative",
				margin : "1%",
				display : "",
				floating : "left",
				borders : "",
				top : "",
				left : "",
				padding : "1%",
				classname : ""	
			}
		};
		info.Date_Time_Calculator = info.Basic_Calculator;
		info.Mortgage_Calculator = info.Basic_Calculator;

		info.Loan = info.Description;
		info.Months = info.Description;
		info.Interest = info.Description;
		info.EMI = info.Description;

		info.dateTime_container2 = info.dateTime_container1;
		info.dateTime_container12 = info.dateTime_container11;
		info.dateTime_container13 = info.dateTime_container11;
		info.dateTime_container21 = info.dateTime_container11;
		info.dateTime_container22 = info.dateTime_container11;
		info.dateTime_container23 = info.dateTime_container11;


		info.text1 = info.text;
		info.text2 = info.text;
		info.text3 = info.text;
		info.text4 = info.text;

		var arr = ["MC","M+","M-","MR","CLS","CAN","REM","%","7","8","9","+","4","5","6","-","1","2","3","/","0",".","=","X"];
		for(var i=0;i< arr.length;i++){
			if(arr[i] === name){
				return info.button;
			}
		}

		return info[name];
	}

	function check(){

		if(document.getElementById("Basic_Calculator").checked){
			remove("display");
    		basicCalculator(display);
		}
		if(document.getElementById("Date_Time_Calculator").checked){
			remove("display");
    		dateCalculator(display);
		}
		if(document.getElementById("Mortgage_Calculator").checked){
			remove("display");
	    	mortageCalculator(display);
		}	
	}
	
	function remove(id){
		var element = document.getElementById(""+id);
		while(element.hasChildNodes()){
			element.removeChild(element.firstChild)
		}
	}

	function basicCalculator(){
		
		var names = ["","MC","M+","M-","MR","CLS","CAN","REM","%","7","8","9","+","4","5","6","-","1","2","3","/","0",".","=","X"];
		var basic_container = create_div_element("basic_container");
		display.appendChild(basic_container);
		var top_screen = create_div_element("top_screen");
		basic_container.appendChild(top_screen);

		for(var i=1; i<=24;i++){
			basic_container.appendChild(create_div_element(names[i]));
		}

		var keys = document.querySelectorAll('.calculator_buttons');
	    var operators = ['+', '-', 'x', '/','%'];
	    var decimalAdded = false;
	    var mem=0;
	    // Add onclick event to all the keys and perform operations
	    for(var i = 0; i < keys.length; i++) {
	        keys[i].onclick = function(e) {
	            // Get the input and button values
	            var input = document.querySelector('#top_screen');
	            var inputVal = input.innerHTML;
	            var btnVal = this.innerHTML;
	            // Now, just append the key values (btnValue) to the input string and finally use javascript's eval function to get the result
	            // If clear key is pressed, erase everything
	            

	            
	            // If eval key is pressed, calculate and display the result
	            if(btnVal == '=') {
	                var equation = inputVal;
	                var lastChar = equation[equation.length - 1];
	                
	                // Replace all instances of x with * respectively. This can be done easily using regex and the 'g' tag which will replace all instances of the matched character/substring
	                equation = equation.replace(/X/g, '*');                
	                // Final thing left to do is checking the last character of the equation. If it's an operator or a decimal, remove it
	                if(operators.indexOf(lastChar) > -1 || lastChar == '.')
	                    equation = equation.replace(/.$/, '');
	                
	                if(equation){
	                    
	                    input.innerHTML = evaluate(equation);
	                }    
	                decimalAdded = false;
	            }
	            
	            // Basic functionality of the calculator is complete. But there are some problems like 
	            // 1. No two operators should be added consecutively.
	            // 2. The equation shouldn't start from an operator except minus
	            // 3. not more than 1 decimal should be there in a number
	            
	            // We'll fix these issues using some simple checks
	            
	            // indexOf works only in IE9+
	            else if(operators.indexOf(btnVal) > -1) {
	                // Operator is clicked
	                // Get the last character from the equation
	                var lastChar = inputVal[inputVal.length - 1];
	                
	                // Only add operator if input is not empty and there is no operator at the last
	                if(inputVal != '' && operators.indexOf(lastChar) == -1) 
	                    input.innerHTML += btnVal;
	                
	                // Allow minus if the string is empty
	                else if(inputVal == '' && btnVal == '-') 
	                    input.innerHTML += btnVal;
	                
	                // Replace the last operator (if exists) with the newly pressed operator
	                if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
	                    // Here, '.' matches any character while $ denotes the end of string, so anything (will be an operator in this case) at the end of string will get replaced by new operator
	                    input.innerHTML = inputVal.replace(/.$/, btnVal);
	                }
	                
	                decimalAdded =false;
	            }
	            
	            // Now only the decimal problem is left. We can solve it easily using a flag 'decimalAdded' which we'll set once the decimal is added and prevent more decimals to be added once it's set. It will be reset when an operator, eval or clear key is pressed.
	            else if(btnVal === '.') {
	                if(!decimalAdded) {
	                    input.innerHTML += btnVal;
	                    decimalAdded = true;
	                }
	            }
	            else if(btnVal === 'CLS') {
	                    input.innerHTML = '';
	                    decimalAdded = false;
	            }
	            else if(btnVal === 'CAN'){
	                    input.innerHTML=(inputVal.substring(0,(inputVal.length-1)));
	            }
	            else if(btnVal === 'MC'){
	                mem=0;
	            }
	            else if(btnVal === 'MR'){
	                input.innerHTML+= mem;
	            }
	            else if(btnVal === 'M+'){
	                mem = evaluate(mem+"+"+input.innerHTML);
	            }
	            else if(btnVal === 'M-'){
	                mem = evaluate(mem+"-"+input.innerHTML);
	            }
	            // if any other key is pressed, just append it
	            else {
	                input.innerHTML += btnVal;
	            }
	            
	            // prevent page jumps
	            e.preventDefault();
	        }
	        function evaluate(equation){
	            var result=0, eq_arr=equation.split('');
	            var operator_value=0,operator_pos=0;
	            for(var i=0;i<(eq_arr.length);i++){
	                switch(eq_arr[i]){
	                    
	                    case '+':
	                        operator_value=1;
	                        operator_pos = i;
	                        break;
	                    case '-':
	                        operator_value=2;
	                        operator_pos = i;
	                        
	                        break;
	                    case '*':
	                        operator_value=3;
	                        operator_pos = i;
	                        break;
	                    case '/':
	                        operator_value=4;
	                        operator_pos = i;
	                        break;
	                    case '%':
	                        operator_value=5;
	                        operator_pos = i;
	                        break;
	                    case 'R':
	                        operator_value=6;
	                        operator_pos=i;
	                        break;

	                }
	            }
	            switch(operator_value){
	                case 1: n1=equation.substring(0,operator_pos);
	                        n2=equation.substring(operator_pos+1,equation.length);
	                        return (parseFloat(n1)+parseFloat(n2));
	                        break;
	                case 2: n1=equation.substring(0,operator_pos);
	                        n2=equation.substring(operator_pos+1,equation.length);
	                        return (parseFloat(n1)-parseFloat(n2));
	                        break;
	                case 3: n1=equation.substring(0,operator_pos);
	                        n2=equation.substring(operator_pos+1,equation.length);
	                        return (parseFloat(n1)*parseFloat(n2));
	                        break;
	                case 4: n1=equation.substring(0,operator_pos);
	                        n2=equation.substring(operator_pos+1,equation.length);
	                        return (parseFloat(n1)/parseFloat(n2));
	                        break;
	                case 5: j=i;
	                        var prev_sign='';
	                        while(j>0){
	                            if(eq_arr[j]==='+' || eq_arr[j]==='-' || eq_arr[j]==='*' || eq_arr[j]==='/'){
	                                prev_sign=eq_arr[j];
	                                break;
	                            }
	                            j--;
	                        }
	                        if(prev_sign === '+' || prev_sign === '-'){
	                            n1=equation.substring(0,j);
	                            n2=equation.substring(j+1,i-1);
	                            return evaluate(n1+prev_sign+evaluate(evaluate(n2+"*"+n1)+"/100"));
	                        }
	                        if(prev_sign === '*' || prev_sign === '/'){
	                            n1=equation.substring(0,j);
	                            n2=equation.substring(j+1,i-1);
	                            return evaluate(n1+prev_sign+evaluate(n2+"/100"));    
	                        }
	                        if(!prev_sign){
	                            n1=equation.substring(0,i-1);
	                            return evaluate(n1+"/100");          
	                        }
	                        break;
	                case 6: n1=equation.substring(0,operator_pos);
	                        n2=equation.substring(operator_pos+3,equation.length);
	                        return (parseFloat(n1)%parseFloat(n2));
	                        break;

	            }
	        }
	    }
	}

	function dateCalculator(){

		for(var i=1 ;i<=2;i++){
			
			var newDiv = create_div_element("dateTime_container"+i);
			display.appendChild(newDiv);
			
			for(var j=1;j<=3;j++){
				document.getElementById("dateTime_container"+i).appendChild(create_div_element("dateTime_container"+i+j));
				if(i === 2 && j === 2){
					interval_format(i,j);
				}
				else if(j === 3){
					display_result(i,j);
				}
				else{
					start_end_date_format(i,j);
				}	
			}

		}

		function display_result(i,j){
			var ele = document.getElementById("dateTime_container"+i+j);
			ele.innerHTML = "Results";

			var mybr = document.createElement('br');
			ele.appendChild(mybr);
			var mybr = document.createElement('br');
			ele.appendChild(mybr);

			if(i === 1){
				var result = document.createElement("input");
				result.setAttribute('type', 'button');
				result.setAttribute('value', 'Get Difference');
				result.onclick = diff_calc;
				ele.appendChild(result);

			}
			else{
				var result_add = document.createElement("input");
				result_add.setAttribute('type', 'button');
				result_add.setAttribute('value', 'Add Interval');
				result_add.onclick = processAdd;
				ele.appendChild(result_add);

				var result_sub = document.createElement("input");
				result_sub.setAttribute('type', 'button');
				result_sub.setAttribute('value', 'Subtract Interval');
				result_sub.onclick = processSub;
				ele.appendChild(result_sub);

			}
			
			mybr = document.createElement('br');
			ele.appendChild(mybr);
			mybr = document.createElement('br');
			ele.appendChild(mybr);

			var para= document.createElement("p");
			para.id="disp_result"+i;
			ele.appendChild(para);
		}

		function diff_calc(){
			alert('diff date');
		    var firstDate = new Date(document.getElementById("date11").value.substring(6,10),document.getElementById("date11").value.substring(0,2),document.getElementById("date11").value.substring(3,5),document.getElementById("time11").value.substring(0,2),document.getElementById("time11").value.substring(3,5));
		    var secondDate = new Date(document.getElementById("date12").value.substring(6,10),document.getElementById("date12").value.substring(0,2),document.getElementById("date12").value.substring(3,5),document.getElementById("time12").value.substring(0,2),document.getElementById("time12").value.substring(3,5));
		    var diff = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())));
		    document.getElementById('disp_result1').innerHTML=process(diff);
		    return false;
		}

		function interval_format(i,j){
			var ele = document.getElementById("dateTime_container"+i+j);
			
			var t= document.createTextNode("Time Interval");
			ele.appendChild(t);
			
			var mybr = document.createElement('br');
			ele.appendChild(mybr);
			mybr = document.createElement('br');
			ele.appendChild(mybr);
			
			var input_year = document.createElement("input");
			input_year.id = "years";
			input_year.setAttribute('type', 'text');
			input_year.setAttribute('value', '');
			input_year.setAttribute('placeholder', 'Years');
			ele.appendChild(input_year);

			mybr = document.createElement('br');
			ele.appendChild(mybr);

			var input_month = document.createElement("input");
			input_month.id = "months";
			input_month.setAttribute('type', 'text');
			input_month.setAttribute('value', '');
			input_month.setAttribute('placeholder', 'Months');
			ele.appendChild(input_month);

			mybr = document.createElement('br');
			ele.appendChild(mybr);

			var input_days = document.createElement("input");
			input_days.id="days";
			input_days.setAttribute('type', 'text');
			input_days.setAttribute('value', '');
			input_days.setAttribute('placeholder', 'Days');
			ele.appendChild(input_days);

			mybr = document.createElement('br');
			ele.appendChild(mybr);

			var input_hours = document.createElement("input");
			input_hours.id="hours";
			input_hours.setAttribute('type', 'text');
			input_hours.setAttribute('value', '');
			input_hours.setAttribute('placeholder', 'Hours');
			ele.appendChild(input_hours);

			mybr = document.createElement('br');
			ele.appendChild(mybr);

			var input_mins = document.createElement("input");
			input_mins.id="mins";
			input_mins.setAttribute('type', 'text');
			input_mins.setAttribute('value', '');
			input_mins.setAttribute('placeholder', 'Minutes');
			ele.appendChild(input_mins);

		}

		function process(ms){
			var onemin=60*1000;
			var onehr= 60*onemin;
			var oneday=24*onehr;
			var onemonth=30*oneday;
			var oneyear=365*oneday;
			
			var yr= Math.round(ms/oneyear);
			var month=Math.round((ms-(oneyear*yr))/(onemonth));
			var day= Math.round((ms-(oneyear*yr)-(month*onemonth))/(oneday));
			var hr= Math.round((ms-(oneyear*yr)-(month*onemonth)-(oneday*day))/(onehr));
			var min=Math.round((ms-(oneyear*yr)-(month*onemonth)-(oneday*day)-(hr*onehr))/(onemin));

			return (yr+" years "+month+" month "+day+" days "+hr+" hours "+min+" minutes "); 
		}


		function newDate(){
	    	var years=(document.getElementById("years").value)*24*60*60*1000*365,
	        	months=(document.getElementById("months").value)*30*24*60*60*1000, 
	        	days=((document.getElementById("days").value))*24*60*60*1000,
	        	hours=((document.getElementById("hours").value))*60*60*1000,
	        	minutes=((document.getElementById("mins").value))*60*1000;

	    	return (years+months+days+hours+minutes);
		}

		function processAdd(){
		    var change = newDate();
		    var firstDate2 = new Date(parseInt(document.getElementById("date21").value.substring(6,10)),(parseInt(document.getElementById("date21").value.substring(0,2))),parseInt(document.getElementById("date21").value.substring(3,5)),parseInt(document.getElementById("time21").value.substring(0,2)),parseInt(document.getElementById("time21").value.substring(3,5)));
		    var a= (change+firstDate2.getTime());
		   
		    var changeDate = new Date(a);
		    document.getElementById('disp_result2').innerHTML= changeDate.toString() ;
		    alert(changeDate.toString());
		 
		}
		function processSub(){
		    var change = newDate();
		    var firstDate2 = new Date(parseInt(document.getElementById("date21").value.substring(6,10)),(parseInt(document.getElementById("date21").value.substring(0,2))),parseInt(document.getElementById("date21").value.substring(3,5)),parseInt(document.getElementById("time21").value.substring(0,2)),parseInt(document.getElementById("time21").value.substring(3,5)));
		    var a= (firstDate2.getTime()-change);
		    var changeDate = new Date(a);
		    document.getElementById('disp_result2').innerHTML= changeDate.toString() ;
		    alert(changeDate.toString());
		 
		}

		
		function start_end_date_format(i,j){
			var ele = document.getElementById("dateTime_container"+i+j);
			
			var t= document.createTextNode((j == 2) ? "End Date" : "Start Date");
			ele.appendChild(t);
			
			var mybr = document.createElement('br');
			ele.appendChild(mybr);
			var mybr = document.createElement('br');
			ele.appendChild(mybr);
			
			t=document.createTextNode("Date : ");
			ele.appendChild(t);
			
			var input_date = document.createElement("input");
			input_date.id="date"+i+j;
			input_date.setAttribute('type', 'text');
			input_date.setAttribute('value', '');
			input_date.setAttribute('placeholder', 'mm-dd-yyyy');
			ele.appendChild(input_date);
			
			mybr = document.createElement('br');
			ele.appendChild(mybr);
			var mybr = document.createElement('br');
			ele.appendChild(mybr);
			
			t=document.createTextNode("Time : ");
			ele.appendChild(t);
			
			var input_time = document.createElement("input");
			input_time.id="time"+i+j;
			input_time.setAttribute('type', 'text');
			input_time.setAttribute('value', '');
			input_time.setAttribute('placeholder', 'hh:mm');
			ele.appendChild(input_time);
			
		}	
	}

	function mortageCalculator(){

		var names = ["Description","Loan","Months","Interest","EMI"];
		mortgage_container_ele = create_div_element("mortgage_container");
		display.appendChild(mortgage_container_ele);	
		mortgage_container_ele.appendChild(create_div_element(names[0]));

		for(var i=1; i<5; i++){

			name_ele = create_div_element(names[i]);
			name_ele.appendChild(create_input_element("text"+i));
			mortgage_container_ele.appendChild(name_ele);			
		}
		document.getElementById("text3").value = 10;
		document.getElementById("text3").disabled = true;
		
		mortgage_container_ele.appendChild(create_input_element("calculate_button"));
	}

	function calculate(id){
		switch(id){
			case 'mortgage' : return (function(){
				var princ = parseFloat(document.getElementById("text1").value),
				term = parseFloat(document.getElementById("text2").value),
				intr = parseFloat(document.getElementById("text3").value)/1200,
				emi = parseFloat(document.getElementById("text4").value);

				if(!isNaN(princ) && !isNaN(term) && !isNaN(intr))
		        {
		            document.getElementById("text4").value = Math.round(princ * intr * Math.pow((1+intr),term)/ ((Math.pow((1+intr),term))-1));
		        }

		        else if(!isNaN(emi) && !isNaN(term) && !isNaN(intr))
		         {
		            document.getElementById("text1").value = Math.round(emi * ((Math.pow(1+intr,term))-1)/(intr*(Math.pow((1+intr),term)))); 
		        }
		        else if(!isNaN(emi) && !isNaN(princ) && !isNaN(intr))
		         {
		            document.getElementById("text2").value = Math.round((Math.log((emi)/(emi-(princ*intr))))/(Math.log(1+intr))); 
		        }
		        else{
		        	t = document.createTextNode("Incomplete Data");
		    		document.getElementById("mortgage_container").appendChild(t);
		        }		
			})

			case 'basic' : return (function(){
				
			})	
		}
	}
})();

