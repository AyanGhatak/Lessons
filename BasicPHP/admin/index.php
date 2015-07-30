<!DOCTYPE html>
<html>
<head>

<style>
table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
}
th, td {
    padding: 5px;
}
</style>
</head>
<body>
<form method='post' action=''>
<table style="width:100%">
  <tr>
    <th>Client_Id</th>
    <th>Name</th>
    <th>Email</th>   
    <th>Mobile</th>
    <th>Sex</th>
    <th>Interest</th>   
    <th>Country</th>
    <th>State</th>
    <th>Address</th>
    <th>Edit</th>
    <th>Delete</th>
    
  </tr>
  
  <?php
 
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
      while($row = mysqli_fetch_assoc($result)) {
          echo "<tr>";
          echo "<td>".$row["id"]."</td>";
          echo "<td>".$row["name"]."</td>";
          echo "<td>".$row["email"]."</td>";
          echo "<td>".$row["mobile"]."</td>";
          echo "<td>".$row["sex"]."</td>";
          echo "<td>".$row["interest"]."</td>";
          echo "<td>".$row["country"]."</td>";
          echo "<td>".$row["state"]."</td>";
          echo "<td>".$row["address"]."</td>";
          echo "<td><a href='update.php?id=$row[id]'>Edit</a></td>";
          echo "<td><a href='delete.php?id=$row[id]'>Delete</a></td>";
          echo "</tr>";
    }
  } 
  else {
      echo "0 results";
  }


  mysqli_close($conn);
  
  /*if(isset($_POST["edit1"])) {
    echo "Hello";
  }*/

  ?>

  
</table>
</body>


</html>