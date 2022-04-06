<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="img/main/fullsized-main-logo.png">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
    
     <!-- Own CSS -->
     <link href="css/style.css" rel="stylesheet">
     <link href="css/table.css" rel="stylesheet">

    <!-- Implement Title based on Location on Foldertree -->
    <title><?php 
        $path = $_SERVER['DOCUMENT_ROOT'];
        include($path."/php/tools/title.php");
    ?></title>
    
  </head>
  <body>
    
    <?php
        $path = $_SERVER['DOCUMENT_ROOT'];
        include($path."/php/tools/navbar.php");
    ?>
    
    <div class="d-grid gap-3">
        <div class="p-1">
            <!-- Logo and Header -->

                <div class="container justify-center">
            
                    <div class="text-center">
                        <img src="img/main/fullsized-main-logo.png" class="background-image" height="200">
                    </div>
                        <h2 class="text-center themeable themeable-text"> Sureno Waren Rechner </h2>
                        <h5 class="text-center themeable themeable-text"></h5>
                </div>
        </div>
        
        <div class="p-2">
            <p>
                <div class="btn-group" role="group" aria-label="Basic outlined example">
                    <button class="btn btn-secondary btn-sm " type="button" data-bs-toggle="collapse" data-bs-target="#versionInfo" aria-expanded="false" aria-controls="versionInfo">
                    Changelog
                    </button>
                    
                    <button class="btn btn-secondary btn-sm " type="button" data-bs-toggle="collapse" data-bs-target="#todoInfo" aria-expanded="false" aria-controls="todoInfo">
                    Todo
                    </button>
                    
                    <button class="btn btn-secondary btn-sm " type="button" data-bs-toggle="collapse" data-bs-target="#infoInfo" aria-expanded="false" aria-controls="infoInfo">
                    Informationen
                    </button>
                </div>
            </p>
            
            <!-- Add Changelog and Todo elements -->
            <?php $path = $_SERVER['DOCUMENT_ROOT'];
                include($path."/php/tools/version.php");
                include($path."/php/tools/todo.php"); 
                include($path."/php/tools/information.php"); 
            ?>
           
           <!-- Main empty table -->
            <table class="table table-dark table-striped themeable">
                <thead>
                    <tr class="align-middle text-center">
                        <th scope="col">Item</th>
                        <th scope="col">Item-Name</th>
                        <th scope="col">Einkaufspreis</th>
                        <th scope="col">Verkaufspreis</th>
                        <th scope="col">Menge (x1)</th>
                        <th scope="col">Stackmenge (x64)</th>
                        <th scope="col">Einkaufspreis zu Zahlen</th>
                        <th scope="col">Verkaufspreis zu Zahlen</th>
                        <th scope="col">Gewinn</th>
                    </tr>
                </thead>
                <tbody id="tableGenerator" class="align-middle text-center">
                    <!-- Generated content here -->
                </tbody>
            </table>
            
            <!-- clear button -->
            <div class="d-grid gap-1">
              <button class="btn themeable" type="button" onclick="clearInput()">Tabelle Leeren</button>
            </div>
            
            <!-- Summ out -->
            <table class="table table-dark table-striped themeable formcontrol">
                <thead>
                    <tr class="align-middle text-center">
                        <th scope="col">Einkaufspreis Gesammt</th>
                        <th scope="col">Verkaufspreis Gesammt</th>
                        <th scope="col">Gewinn</th>
                    </tr>
                </thead>
                <tbody id="results" class="align-middle text-center">
                    <td id="ekg"></td>
                    <td id="vkg"></td>
                    <td id="gg"></td>
                </tbody>
            </table>
        </div>
    </div>
    
    <!-- Javascript -->
    <script src="js/devicecheck.js"></script>  
    <script src="js/generate.js"></script>  
    <script src="js/calculate.js"></script>  
    
    <!-- Format Change&Todo Log -->
    <script src="js/logformatter.js"></script>

    <!-- Page Themes -->
    <script src="js/theme.js"></script>  

    <!-- Work with 000webhost -->
    <script src="js/disclaimerControl.js"></script>  

    <!-- BT JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    
    <!-- JS wich uses BT -->
    <script src="js/bootstrap.js"></script>  
  </body>
</html>
