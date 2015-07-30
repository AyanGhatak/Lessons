<!DOCTYPE html>
<html>
	<head>
		<title>BasicCSS</title>
		<link rel="stylesheet" type="text/css" href="../css/stylesheet.css">
		<script src="../js/myScript.js"></script>
	</head>
<body>
<?php
	if(isset($_GET['id'])){
		$id = $_GET['id'];
	}
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "Subscribe";

	// Create connection
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	// Check connection
	if (!$conn) {
	    die("Connection failed: " . mysqli_connect_error());
	}
	$sql = "SELECT * FROM Subscription";
	$result = mysqli_query($conn, $sql);

	if (mysqli_num_rows($result) > 0) {
	    // output data of each row
	    while($row = mysqli_fetch_assoc($result)) {
	    	if($row['id']== $id){
	    		//echo "$row[name]";	
	    		$name = $row['name'];
	    		$email = $row['email'];
	    		$mobile = $row['mobile'];
	    		$sex = $row['sex'];
	    		$interest = explode(" ",$row['interest']);
	    		$country = $row['country'];
	    		$state = $row['state'];
	    		$address = $row['address'];
	    		//$arr = explode(" ",$interest);
	    		//echo "$arr[1]";
	    	}
	        
	    }
	} else {
	    echo "0 results";
	}
	mysqli_close($conn);


	// define variables and set to empty values
	$nameErr = $emailErr = $mobileErr = $sexErr = $interestErr = $countryErr = $stateErr = $addressErr = "";
	$flag = 1;
	
	//$name = $email = $mobile = $sex = $country = $state = $games = $movie = $readings = $sexMale = $sexFemale = $address = "";
	//$interest = array("","","","");
	//$interest[0] = $interest[1] = $interest[2] = "";

	if ($_SERVER["REQUEST_METHOD"] == "POST") {
	   if (empty($_POST["name"])) {
	     $nameErr = "*Name is required";
	     $flag = 0; 
	   } 
	   else {
	     $name = test_input($_POST["name"]);
	     //$flag = 1;
	   }
	   
	   
	     
	   if (empty($_POST["sex"])) {
	     $sexErr = " "."*Gender is required";
             $flag = 0;
	   } else {
	     $sex = test_input($_POST["sex"]);
	     if($sex == 'male'){
		$sexMale = 'male';
		//echo $sexMale;
	     }
	      if($sex == 'female'){
		$sexFemale = 'female';
		//echo $sexFemale;
             }
	     //$flag = 1;
	   }

	   if (empty($_POST["interest"])) {
	     $interestErr = "*Interest is required";
             $flag = 0; 
	   } else {
	     $interest = $_POST["interest"];
	     //$flag = 1;
	   }

	   if (empty($_POST["country"])) {
	     $countryErr = "*Country is required";
	     $flag = 0;	
	   } else {
	     $country = test_input($_POST["country"]);
	     //$flag = 1;
	   }
	   if (empty($_POST["state"])) {
	     $stateErr = "*State is required";
             $flag = 0;
	   } 
	   else {
	     $state = test_input($_POST["state"]);
	     //$flag = 1;
	   }
	   if (empty($_POST["address"])) {
	     $addressErr = "*Address is required";
             $flag = 0;
	   } 
	   else {
	     $address = test_input($_POST["address"]);
	     //$flag = 1;
	     
	   }

	  if (empty($_POST["email"])) {
	     $emailErr = "*Email is required";
	     $flag = 0;
	   } else {
	     $email = test_input($_POST["email"]);
	     // check if e-mail address is well-formed
	     if (!preg_match("/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/",$email)) {
	       $emailErr = "*Invalid email format";
	       $flag = 0;
	     }
	   }

	   if (empty($_POST["mobile"])) {
	     $mobileErr = "*Phone Number is required";
	     $flag = 0;
	   } else {
	     $mobile = test_input($_POST["mobile"]);
	     // check if mobile is well-formed
	     if (!preg_match("/^([789]\d{9}$)/",$mobile)) {
	       $mobileErr = "*Invalid phone number";
	       $flag = 0; 
	     }

	   }
	
	   
	
		if($flag == 1){
		//echo "Thank you for subscribing our channel.";
		$servername = "localhost";
		$username = "root";
		$password = "";
		$dbname = "Subscribe";

		// Create connection
		$conn = mysqli_connect($servername, $username, $password, $dbname);
		// Check connection
		if (!$conn) {
		    die("Connection failed: " . mysqli_connect_error());
		}

		// Create connection
		$conn = mysqli_connect($servername, $username, $password, $dbname);
		// Check connection
		if (!$conn) {
		    die("Connection failed: " . mysqli_connect_error());
		}
		$intrst = implode(" ",$interest);
		/*$sql = "INSERT INTO Subscription(name, email, mobile, sex, interest, country, state, address) VALUES ('$name', '$email', '$mobile', '$sex', '$intrst', '$country', '$state', '$address')";

		if (mysqli_query($conn, $sql)) {
		    echo "New record created successfully";
		} else {
		    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
		}*/

		$sql = "UPDATE Subscription SET name='$name' WHERE id=$id";
		if (mysqli_query($conn, $sql)) {
	    	echo "Record updated successfully";
		}
		else {
	    	//echo "Error updating record: " . mysqli_error($conn);
		}
		$sql = "UPDATE Subscription SET email='$email' WHERE id=$id";
		if (mysqli_query($conn, $sql)) {
	    	echo "Record updated successfully";
		}
		else {
	    	//echo "Error updating record: " . mysqli_error($conn);
		}
		$sql = "UPDATE Subscription SET mobile='$mobile' WHERE id=$id";
		if (mysqli_query($conn, $sql)) {
	    	echo "Record updated successfully";
		}
		else {
	    	//echo "Error updating record: " . mysqli_error($conn);
		}
		$sql = "UPDATE Subscription SET sex='$sex' WHERE id=$id";
		if (mysqli_query($conn, $sql)) {
	    	echo "Record updated successfully";
		}
		else {
	    	//echo "Error updating record: " . mysqli_error($conn);
		}
		$sql = "UPDATE Subscription SET interest='$intrst' WHERE id=$id";
		if (mysqli_query($conn, $sql)) {
	    	echo "Record updated successfully";
		}
		else {
	    	//echo "Error updating record: " . mysqli_error($conn);
		}
		$sql = "UPDATE Subscription SET country='$country' WHERE id=$id";
		if (mysqli_query($conn, $sql)) {
	    	echo "Record updated successfully";
		}
		else {
	    	//echo "Error updating record: " . mysqli_error($conn);
		}
		$sql = "UPDATE Subscription SET state='$state' WHERE id=$id";
		if (mysqli_query($conn, $sql)) {
	    	echo "Record updated successfully";
		}
		else {
	    	//echo "Error updating record: " . mysqli_error($conn);
		}
		$sql = "UPDATE Subscription SET address='$address' WHERE id=$id";
		if (mysqli_query($conn, $sql)) {
	    	echo "Record updated successfully";
		}
		else {
	    	//echo "Error updating record: " . mysqli_error($conn);
		}


		mysqli_close($conn);

			/*$arrlength = count($interest);
			$myFile = "records.csv";
			$fh = fopen($myFile, 'a') or die("can't open file");
			fwrite($fh, "\n".$name."\n");
			fwrite($fh, $email."\n");
			fwrite($fh, $mobile."\n");
			fwrite($fh, $sex."\n");
			fwrite($fh, $country."\n");
			fwrite($fh, $state."\n");
			fwrite($fh, $address."\n");
			fclose($fh);
			for($x = 0; $x < $arrlength; $x++){
				$myFile = "records.csv";
				$fh = fopen($myFile, 'a') or die("can't open file");
				fwrite($fh, $interest[$x]."\t");
				fclose($fh);
			}*/
			$nameErr = $emailErr = $mobileErr = $sexErr = $interestErr = $countryErr = $stateErr = $addressErr = "";
			$name = $email = $mobile = $sex = $country = $state = $games = $movie = $readings = $sexMale = $sexFemale = $address = "";
			$interest = array("","","","");
			$interest[0] = $interest[1] = $interest[2] = "";

			header('Location: index.php');
		
		}
     }
	

	function test_input($data) {
	   $data = trim($data);
	   $data = stripslashes($data);
	   $data = htmlspecialchars($data);
	   return $data;
	}
	
	
	
?>
<script type='text/javascript'>clk('t2');</script>
<div class="tabs">

	<div class="tab2" id="t2">
		<h2 id="t2h2" onclick="clk('t2');"><a href="#"><span id="tabb2">Subscribe</span></a></h2>
		<div class="wrap">
			<p class="p_h1">Subscription Form</p>
			<form method="post" action="">
			<div class="leftcon">
				<table cellspacing="6" cellpadding="6">
					<tr>
						<td><span>Name*</span></td>
						<td><input type="text" name="name" class="text" value="<?php echo $name;?>" /><span class="error"><?php echo $nameErr;?></span></td>
					</tr>
					<tr>
						<td><span>Email*</span></td>
						<td><input type="text" name="email" class="text" value="<?php echo $email;?>"/><span class="error"><?php echo $emailErr;?></span></td>
					</tr>
					<tr>
						<td><span>Contact*</span></td>
						<td><input type="text" name="mobile" class="text" id="mobile" value="<?php echo $mobile;?>"/><span class="error"><?php echo $mobileErr;?></span></td>
					</tr>					
					<tr>
						<td><span>Sex*</span></td>
						<td><input type="radio" name="sex" value="male" <?php if($sex === 'male'){echo 'checked'; } ?> >&nbsp<span>Male</span>&nbsp&nbsp&nbsp<input type="radio" name="sex" value="female" <?php if($sex === 'female'){echo 'checked' ; } ?>>&nbsp<span>Female</span><span class="error"><?php echo $sexErr;?></span></td>
					</tr>
					<tr>
						<td><span>Interest</span><span class="error" value="<?php echo $error;?>">* <?php echo $interestErr;?></span></td>
						<td>
							<input type="checkbox" name="interest[]" value="Games" id="cb1"  <?php $arrlength = count($interest); for($x = 0; $x < $arrlength; $x++){ if($interest[$x] == 'Games'){echo "checked";}} ?>>&nbsp<span>Games </span>&nbsp
	  						<input type="checkbox" name="interest[]" value="Movie" id="cb2" ' <?php $arrlength = count($interest);for($x = 0; $x < $arrlength; $x++){ if($interest[$x] == 'Movie'){echo "checked";}} ?> > &nbsp<span> Movie </span>&nbsp
	  						<input type="checkbox" name="interest[]" value="Reading" id="cb3" ' <?php $arrlength = count($interest);for($x = 0; $x < $arrlength; $x++){ if($interest[$x] == 'Reading'){echo "checked";}} ?>>&nbsp<span>Reading</span>
  						</td>
					</tr>
				</table>
			</div>
				
			<div class="rightcon">
				<table cellspacing="6" cellpadding="6">
					<tr>
						<td><span>Country*</span></span></td>
						<td>
							<select id="country" name="country" onchange="stateChange(this);" value="<?php echo $country;?>">
								<option value="" ></option>
								<option value="India" <?php if($country === 'India'){echo 'selected'; } ?>>India</option>
								<option value="United States of America" <?php if($country === 'United States of America'){echo 'selected'; } ?>>United States of America</option>
							</select>
							<span class="error"><?php echo $countryErr;?>
						</td>
					</tr>
					<tr>
						<td><span>States*</span></td>
						<td>
							<select id="state" name = "state" value="<?php echo $state;?>" >
						    <option value=""></option>
						    </select>
						    <span class="error"><?php echo $stateErr;?></span>
						</td>
					</tr>
					<tr>
						<td valign="top"><span>Description*</span></td>
						<td><textarea name="address" spellcheck="true"><?php echo $address;?></textarea><span class="error"><?php echo $addressErr;?></span></td>
					</tr>
				</table>
			</div>
			<input type="reset" name="reset" value="RESET" class="button" id="reset" onclick="clearSelect();" >
				<?php 
					if (isset($_POST['reset'])){	
						echo "<script type='text/javascript'>clearSelect()</script>"; 
						echo $name;
					}
				?>
			</input>
			<input type="submit" name="subscribe" value="SUBSCRIBE" class="button" id="submit"> 
				<?php 
					if (isset($_POST['subscribe'])){	
						echo "<script type='text/javascript'>clk('t2')</script>"; 
					}
				?>
			</input>


						
			
		</div>
		
	</div>

</div>

</form>
</body>
<script type='text/javascript'>clk('t2');</script>


</html>
