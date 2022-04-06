<?php
//Backup line
$url = "https://niklasdev.000webhostapp.com";

include("getpath.php");


echo    '    <nav class="navbar navbar-expand-lg navbar-light themeable" style="background: #ffbf00;">
          <div class="container-fluid">
                <a class="navbar-brand" href="'.$url.'" style="padding-left: 5px;margin: -15px">
                  <img src="'.$url.'/img/main/fullsized-main-logo.png" alt="..." width="60" height="60">
                </a>
                
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            
            <!--Collapsor-->
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#"></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="'.$url.'">Waren Rechner (Öffentlich)</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Andere Projekte
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a class="dropdown-item disabled" href="#">Card Opener <span class="badge bg-secondary">InDev</span></a></li>

                  </ul>
                </li>
              </ul>
            </div>
                </span>
                <span class="navbar-text">
                    <button type="button" class="btn btn-outline-dark" id="theme-button">Dunkles Thema</button>       
                </span>
            </div>
        </nav>
    ';
?>