<!DOCTYPE html>
<html>
<head>
    <title>GET Request Result</title>
</head>
<body>
    <h4>GET value(s): </h4>

    <?php
    if (isset($_GET['name']) && isset($_GET['favorite-language'])) {
        $name = $_GET['name'];
        $favoriteLanguage = $_GET['favorite-language'];
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
