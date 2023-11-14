<!DOCTYPE html>
<html>
<head>
    <title>POST Request Result</title>
</head>
<body>
    <h3>POST value(s): </h3>

    <?php
    if (isset($_POST['name']) && isset($_POST['favorite-language'])) {
        $name = $_POST['name'];
        $favoriteLanguage = $_POST['favorite-language'];
        echo "<table border='1'>";
        echo "<tr><td>Name</td><td>$name</td></tr>";
        echo "<tr><td>Language</td><td>$favoriteLanguage</td></tr>";
        echo "</table>";
    } else {
        echo "<p>Missing data. Please fill out the form.</p>";
    }
    ?>
</body>
</html>
