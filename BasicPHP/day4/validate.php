<?php
  $stateErr=$nameErr=$addressErr=$emailErr=$phnumErr=$interestErr=$countryErr=$sexErr="";
  $flag=0;

  if ($_SERVER["REQUEST_METHOD"] == "POST") {

    if (empty($_POST["name"])) {
      $nameErr = "*Required";
      $flag=1;
    } 

    if (empty($_POST["email"])) {
      $emailErr = "*Required";
      $flag=1;
    }
    else{
      if (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL))
      {
        $emailErr = "Invalid email";
        $flag=1;
      }
    }

    if (empty($_POST["mobile"])) {
       $mobileErr = "*Required";
       $flag=1;
    } 
    else {
      if(strlen($_POST["mobile"])!=10)
      {
        $mobileErr = "Incorrect Format";
        $flag=1;
      }
    }
    if (empty($_POST["sex"])) {
      $sexErr = "*Required";
      $flag=1;
    } 
    if (empty($_POST["interest"])) {
      $interestErr = "*Required";
      $flag=1;
    } 
    
    if (empty($_POST["country"])) {
      $countryErr = "*Required";
      $flag=1;
    } 
     if (empty($_POST["address"])) {
       $addressErr = "*Required";
       $flag=1;
    } 
     
     if (empty($_POST["state"])) {
       $stateErr = "*Required";
       $flag=1;
    } 
     
     if($flag==1)
     { $output='{"nameErr":"'.$nameErr.'","mobileErr":"'.$mobileErr.'","emailErr":"'.$emailErr.'","sexErr":"'.$sexErr.'","interestErr":"'.$interestErr.'","countryErr":"'.$countryErr.'","stateErr":"'.$stateErr.'","addressErr":"'.$addressErr.'"}';
      echo $output;
     }
  }
   
  if($flag==0)
  {
      
    $data="name:".$_POST["name"].",email:".$_POST["email"].",Mobile:".$_POST["mobile"].",sex:".$_POST["sex"].",interest:".$_POST["interest"].",country:".$_POST["country"].",state:".$_POST["state"].",address:".$_POST["address"].PHP_EOL;
    $fp = fopen("records.csv","a"); 
    if($fp)
    {
      fwrite($fp,$data); 
        fclose($fp); 
        
    }
    echo '{"status":"SUCCESSFULLY SUBMITTED"}';
  }




 
?>