<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="../img/main/fullsized-main-logo.png">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    
    <!-- Implement Title based on Location on Foldertree -->
    <title><?php 
        $path = $_SERVER['DOCUMENT_ROOT'];
        include($path."/php/tools/title.php");
    ?></title>
    
  </head>
  <body style="background:url('../img/main/backgrounds/line-bg-edit-blue.png')">
      
        <div class="container">
            <div class="card text-center">
                <div class="card-header">
                    Mobilgeräte werden nicht unterstützt!
                </div>
                <div class="card-body">
                    <h5 class="card-title">Aus Zeit&Management Gründen wird diese Website nicht für Mobilgeräte freigegeben</h5>
                    <p class="card-text">Wir bitten dies zu entschuldigen!</p>
                    <hr>
                    <h2 class="card-title">Durch einen Fehler hier gelandet? Versuchen Sie es erneut</h2>
                    <a href="https://niklasdev.000webhostapp.com" class="btn btn-primary">Zurück zur Webseite</a>
                </div>
                <div class="card-footer text-muted timeSinceDate" dateData="3/8/2022 10:30">
                </div>
            </div>
        </div>
  
    <script src="../js/devicecheck.js"></script>     
    <script src="../js/logformatter.js"></script>  
    <script src="../js/disclaimerControl.js"></script>  

    <!-- BT JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  </body>
</html>
