<!DOCTYPE html>
<html>
<head>
	<title>Form BruteForce - Python</title>
	<meta charset="urf-8">
</head>
<body>
	<?php
		if(isset($_POST['sub'])) {
			$input1 = $_POST['input1'];
			$input2 = $_POST['input2'];

			if ($input1 == "admin" and $input2 == "qwerty") {
				echo "CTF{Y0u_g0t_!t}";
			}else {
				echo "Parola nu este buna !";
			}
		}
	?>

		<form method="POST", class="form_php">
			<input type="text" name="input1">
			<input type="text" name="input2">
			<input type="submit" name="sub">
		</form>
</body>
</html>
