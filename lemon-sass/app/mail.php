 ​<?php
 	$email = $_POST['email'];
 	$name = $_POST['name'];
 	$tel = $_POST['tel'];
 	$to = "helinsv@gmail.com";
 	$subject = trim($_POST["form_subject"]); 	
 	$message =  "Send: $name\nEmail - $email\nTel: $tel\n";
 	$header = "Content-type: text/html; charset=utf-8\r\n";
 	$header .= "MIME-Version: 1.0\r\n";
 	$sending = mail($to, $subject, $message, $headers);
 	if($sending) echo "";

 	$db_host = "10.0.0.2"; 
 	$dbname = "uh400484_bd-helin";
 	$db_user = "uh400484_root"; 
 	$db_password = "123321"; 
 	$db_table = "testtable"; 

 	$db = mysql_connect($db_host,$db_user,$db_password) OR DIE("Can not create connection");

 	mysql_select_db($dbname,$db);
 	mysql_query("SET NAMES 'utf8'",$db);
 	$result = mysql_query ("INSERT INTO ".$db_table." (name, email, tel) VALUES ('$name', '$email', '$tel')");

 	if ($result = 'true'){
 		echo "Thank you!";
 	}else{
 		echo "Not send";
 	}
?>