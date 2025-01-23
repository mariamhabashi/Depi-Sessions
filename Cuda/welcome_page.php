<?php

@include 'config.php';

session_start();

if(!isset($_SESSION['email'])){
   header('cuda.php');

}
   $email = $_SESSION['email'];
  $query = mysqli_query($conn," SELECT name FROM user WHERE email='$email'");
  $res_Uname = $result['name'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="css/style.css">
</head>
<body>

<div class="container">
   <div class="content">
      <h3>Welcome!</h3>
      <p> <span><?php echo $res_Uname; ?></span></p>
      <p></p>
   </div>
</div>

</body>
</html>