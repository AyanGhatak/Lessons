<!DOCTYPE html>
<html>
	<head>
		<title>BasicCSS</title>
		<link rel="stylesheet" type="text/css" href="css/stylesheet.css">
		<script src="js/myScript.js"></script>
	</head>
<body>

<div class="tabs">

	<div class="tab1" id="t1">
		<h2 id="t1h2" onclick="clk('t1');"><a href="#" ><span id="tabb1">News</span></a></h2>

		<div class="con1">
			<p class="p_h1">Welcome </p>

			<p class="p_h2"> 
			Simple and effective AngularJS bindings for FusionCharts JavaScript Chariting Library.Simple and effective AngularJS bindings for FusionCharts JavaScript Chariting Library. simple and effective.
			</p>		

			<p class="p_h3">
			AngularJS bindings for FusionCharts JavaScript Chariting Library.
			</p>
		</div> 

		<div class="con2"><p class="head">Latest News</p>
			<div class="image"><img src="image.jpg" alt="Image Preview"></div>
		</div>

		<a href="#"><div class="learn">LEARN MORE</div></a>

	</div>
	
	<div class="tab2" id="t2">
		<h2 id="t2h2" onclick="clk('t2');"><a href="#"><span id="tabb2">Subscribe</span></a></h2>
		<div class="wrap">
			<p class="p_h1">Subscription Form</p>
			<form method="post" action="" id="SubscriptionForm">
			<div class="leftcon">
				<table cellspacing="6" cellpadding="6">
					<tr>
						<td><span>Name*</span></td>
						<td><input type="text" name="name" class="text" id="name" /><span id="nameErr" class="error"></span></td>
					</tr>
					<tr>
						<td><span>Email*</span></td>
						<td><input type="text" name="email" class="text" id="email" /><span id="emailErr" class="error"></span></td>
					</tr>
					<tr>
						<td><span>Contact*</span></td>
						<td><input type="text" name="mobile" class="text" id="mobile" /><span id="mobileErr" class="error"></span></td>
					</tr>					
					<tr>
						<td><span>Sex*</span></td>
						<td><input type="radio" id="sex" name="sex" value="male" >&nbsp<span>Male</span>&nbsp&nbsp&nbsp<input type="radio" id="sex" name="sex" value="female" >&nbsp<span>Female</span><span id="sexErr" class="error"></span></td>
					</tr>
					<tr>
						<td><span>Interest</span><span id="interestErr" class="error">* </span></td>
						<td>
							<input type="checkbox" name="interest" value="Games" id="cb1"  >&nbsp<span>Games</span>&nbsp
	  						<input type="checkbox" name="interest" value="Movie" id="cb2" >&nbsp<span>Movie</span>&nbsp
	  						<input type="checkbox" name="interest" value="Reading" id="cb3"  >&nbsp<span>Reading</span>
  						</td>
					</tr>
				</table>
			</div>
				
			<div class="rightcon">
				<table cellspacing="6" cellpadding="6">
					<tr>
						<td><span>Country*</span></span></td>
						<td>
							<select id="country" name="country" onchange="stateChange(this);">
								<option value="" ></option>
								<option value="India" >India</option>
								<option value="United States of America">United States of America</option>
							</select>
							<span class="error" id="countryErr"> 
						</td>
					</tr>
					<tr>
						<td><span>States*</span></td>
						<td>
							<select id="state" name = "state" disabled >
						    <option value=""></option>
						    </select>
						    <span class="error" id="stateErr"></span>
						</td>
					</tr>
					<tr>
						<td valign="top"><span>Description*</span></td>
						<td><textarea id="address" name="address" spellcheck="true"></textarea><span id="addressErr" class="error"></span></td>
					</tr>
				</table>
			</div>
			<input type="button" class="button" onclick="subscribe()" value="SUBSCRIBE">
			<input type="reset" name="reset" value="RESET" class="button" id="reset" onclick="clearSelect();" ></input>
		</div>
		
	</div>

</div>

<div id="overlay">
     <div>
          <p id="cb1_sub"> 
          	Games Type:<?php echo $address;?><br/><br/>               	
	        <input type="checkbox" name="games" id="cb1_sub_1" value="Indoor"/><span>Indoor</span>&nbsp&nbsp      
	        <input type="checkbox" name="games" id="cb1_sub_2" value="Outdoor"/><span>Outdoor</span> &nbsp&nbsp        
          </p>

          <p id="cb2_sub">  
          	Movie Type:<br/><br/>     
	        <input type="checkbox" name="movie" id="cb2_sub_1" value="Horror"/><span>Horror</span>&nbsp&nbsp	
	        <input type="checkbox" name="movie" id="cb2_sub_2" value="Comedy"/><span>Comedy</span>&nbsp&nbsp	
	        <input type="checkbox" name="movie" id="cb2_sub_3" value="Drama"/><span>Drama</span>&nbsp&nbsp	
          </p>

           <p id="cb3_sub">
           	Reading Type:<br/><br/>
	        <input type="checkbox" name="readings" id="cb3_sub_1" value="Novel"/><span>Novel</span>&nbsp&nbsp	
	        <input type="checkbox" name="readings" id="cb3_sub_2" value="Fiction"/><span>Fiction</span> &nbsp&nbsp	
	        <input type="checkbox" name="readings" id="cb3_sub_3" value="Biography"/><span>Biography</span>&nbsp&nbsp
          </p>
          <p><input type="button" onclick="overlay()" value="Ok"></p>
     </div>
</div>
</form>
</body>
</html>
