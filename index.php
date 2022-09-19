<!doctype html>
<html>

<head>
    <title>Weather APP</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <script type="module" defer src="js/functions.js"></script>
    <script defer src="https://code.iconify.design/iconify-icon/1.0.0/iconify-icon.min.js"></script>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <div id="card">

        <iconify-icon icon="twemoji:sun-behind-small-cloud"></iconify-icon>
      
        <p id="town"></p>
        <p id="address"></p>
        <p id="temperature"></p>
      
        <p class="temp-min-max">
          <span id="tempmin"></span>
          <span id="tempmax"></span>
        </p>
      
        <p id="conditions"></p>
        <p id="description"></p>
      
        <div class="info">
          <div class="details">
            <p id="rain_sum"></p>
            <p id="snowfall_sum"></p>
            <p id="sunrise"></p>
            <p id="sunset"></p>
            <p id="timezone"></p>
          </div>
          <div class="details">
            <p id="weathercode"></p>
            <p id="windspeed"></p>
            <p id="cloudcover"></p>
            <p id="feelslike"></p>
            <p id="latitude"></p>
          </div>
          <div class="details">
            <p id="humidity"></p>
            <p id="pressure"></p>
            <p id="uvindex"></p>
            <p id="icon"></p>
            <p id="longitude"></p>
          </div>
        </div>
      
      </div>

</body>

</html>