
<!DOCTYPE HTML>
<html lang="en">
<head>
<meta charset="windows-1252" />
<meta name="robots" content="index,follow" />
<meta name="author" content="Christer Svensson" />
<meta name="description" content="Easy Real Time Full Text Search, PHP Script, Free Download" />
<meta name="keywords" content="PHP, Easy, Real Time, Full Text Search, PHP Script, Free Download" />
<meta name="generator" content="http://www.christersvensson.com/html-tool/" />
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">

<title>Search results</title>

<style type="text/css">
body { font-family: 'Lato', arial, sans-serif; font-size:13px; }
#webpath { font-family: 'Lato', arial, sans-serif; font-size:12px; color:#000000; } 


.top {
    position: relative;
    text-align: center;
    min-height: 400px;
}

.top .icon-logo {
  display: block;
  font-size: 50px;
  color: #fff;
  padding-top: 40px;
}
@media only screen and (min-width: 501px) {
  /* line 9, ../../app/styles/partials/_top.sass */
  .top .icon-logo {
    font-size: 80px;
  }
}
/* line 16, ../../app/styles/partials/_top.sass */
  .top .main-logo .icon-logo {
/*  font-size: 70px;*/
  background-image:url(http://cdn.harshaenterprises.co/images/logo.png);
  background-repeat:no-repeat;
  margin-left:20px;
  height:155px;

}
@media only screen and (min-width: 501px) {
  /* line 16, ../../app/styles/partials/_top.sass */
    .top .main-logo .icon-logo {
/*    padding-top: 80px;*/
/*    font-size: 140px;*/
    background-image:url(http://cdn.harshaenterprises.co/images/logo3.png);
  background-repeat:no-repeat;
  margin-left:20px;
  height:155px;

  }
}
@media only screen and (min-width: 769px) {
  /* line 16, ../../app/styles/partials/_top.sass */
 .top .main-logo .icon-logo {
    /*font-size: 180px;*/
  background-image:url(http://cdn.harshaenterprises.co/images/logo2.png);
  background-repeat:no-repeat;
  margin-left:20px;
  height:155px;
  }
}
@media only screen and (min-width: 1025px) {
  /* line 16, ../../app/styles/partials/_top.sass */
  .top .main-logo .icon-logo {
    font-size: 230px;
  }
}
@media only screen and (min-width: 1025px) and (max-height: 801px) {
  /* line 16, ../../app/styles/partials/_top.sass */
 .top .main-logo .icon-logo {
    /*font-size: 130px;*/
  background-image:url(http://cdn.harshaenterprises.co/images/logo.png);
  background-repeat:no-repeat;
  margin-left:20px;
  height:155px;
  }
}

@media only screen and (min-width: 1080px) and (max-height: 801px) {
  /* line 16, ../../app/styles/partials/_top.sass */
   .top .main-logo .icon-logo {
    /* font-size: 130px; */
    background-image: url(http://cdn.harshaenterprises.co/images/logo.png);
    background-repeat: no-repeat;
    margin-left: 20px;
    height: 155px;
    margin-top: 20px;
}
  
}
.top-carousel {
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  min-width: 320px;
}
/* line 8, ../../app/styles/partials/_carousel.sass */
.top-carousel div {
  width: 100%;
  height: 100%;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 100% auto;
  position: absolute;
  top: -20px;
  left: 0;
  opacity: 0;
  -webkit-transition: opacity ease-in 800ms;
  transition: opacity ease-in 800ms;
}
/* line 19, ../../app/styles/partials/_carousel.sass */
.top-carousel div.active {
  opacity: 1;
}
/* line 22, ../../app/styles/partials/_carousel.sass */
.top-carousel.fix-top div {
  background-size: cover;
}
@media only screen and (min-width: 1100px) {
  /* line 21, ../../app/styles/partials/_carousel.sass */
  .top-carousel.fix-top {
    width: 100%;
    height: 100%;
    
    position: relative;
  }
  /* line 29, ../../app/styles/partials/_carousel.sass */
  .top-carousel.fix-top div {
    background-position: top center;
    background-attachment: fixed;
    background-size: 100%;
  }
}

@media only screen and (min-width: 1000px) {
  /* line 38, ../../app/styles/partials/_carousel.sass */
  .top-carousel div {
   /* background-size: auto;*/
  }
  /* line 41, ../../app/styles/partials/_carousel.sass */
  .top-carousel.full-bg div {
    background-size: cover;
  }
}
.dish-duck {
  background-image: url(http://cdn.harshaenterprises.co/images/01.jpg);
}
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dppx), (min-width: 350px) {
 
  .dish-duck {
    background-image: url(http://cdn.harshaenterprises.co/images/02.jpg);
  }
}
@media only screen and (min-width: 750px) {
  .dish-duck {
    background-image: url(http://cdn.harshaenterprises.co/images/02.jpg);
  }
}

</style>
</head>
<body>
        
          
        <div class="top">
        <div class="main-logo">
          <a href="/" class="icon-logo"></a>
        </div>
        <div class="top-carousel">
          <div class="dish-duck active"></div>
        </div>
      </div>
          <div class="container" style="margin-top:25px;">
              <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
<?php
/* Easy Real Time Full Text Search © 2012 Christer Svensson

---------------------------------------------- Instructions -------------------------------------------------------------------------------------------

 If the name of this file not is easy.php then rename it to easy.php

 Upload it to the directory (folder) on your homepage server that you want to search through.

 The PHP-script in this file performs a real time full text search of every htm, html, asp,
 and php file in the directory (folder) and all subdirectories (subfolders). The search is
 not case sensitive.

 The text displayed in the browser window is searched. For that reason, in the html code, all
 text in tags are omitted and also text between the tag and the end tag for head, script, noscript
 and iframe.

 You may translate the text (string values) in this file to your native language without the
 author's permission. If you do so, please send a copy to postbox@christersvensson.com and it
 will be published on the homepage of this script.

 You may also use another CSS style and you may include the script as a natural part at pages at
 your site.

*/

// You may translate the string values here under to your native languages. 

$buttonvalue = "Search";
$search_at = "Search on";
$search_result = "gave these results";
$pages = "Number of pages with hits";
$to_small = "At least two characters is required";
$recursive = true;  // Change to false if no searching should be done in subdirectories.

//---------------------------- Do not change anything below this line -------------------------------------------------------------------------------

$html = <<<HTML
<p><br /></p>

<!-- Please do not remove or change this link to the application's site. Others might like it too. -->

HTML;


$search=$_GET['s'];
function textpart($body, $search) {
// Displays the text after the title
  $length = 20;
  $text = substr($body, max(stripos($body,$search) - $length, 0), strripos($body,$search) - stripos($body,$search) + strlen($search) + 2 * $length);
  if (strripos($text, " ") < strripos($text,$search)) {
    $text = $text . " ";
  }
  if (stripos($text, " ") != strripos($text, " ")) {
    $text = substr($text, stripos($text, " "), strripos($text, " ") - stripos($text, " "));
  }
  $temp = $text;
  $stop = substr($text, strripos($text, $search) + strlen($search));
  if (strlen($stop) > $length) {
    $stop = substr($text, strripos($text, $search) + strlen($search), $length);
    $stop = substr($stop, 0, strripos($stop, " "));
  }
  $text = "... ";
  while (stripos($temp,$search)) {
    $temp = substr_replace($temp, "<b>", stripos($temp, $search), 0);
    $temp = substr_replace($temp, "</b>", stripos($temp, $search) + strlen($search), 0);
    $text = $text . substr($temp, 0, stripos($temp, "</b>") + 4);
    $temp = substr($temp, stripos($temp, "</b>") + 4);
    if(stripos($temp, $search) > (2 * $length)) {
       $text = $text . substr($temp, 0, $length);
       $text = substr($text, 0, strripos($text, " ")) . " ... ";
       $temp = substr($temp, stripos($temp, $search) - $length);
       $temp = substr($temp, stripos($temp, " "));
    }
  }
  $text = $text . $stop . " ... ";
  echo $text; 
  return;
}

function compress($string, $first, $last) {
// Removes everything in $string from $first to $last including $first and $last
  while(stripos($string,$first) && stripos($string,$last)) {
    $string = substr_replace($string, "", stripos($string,$first), stripos($string,$last) - stripos($string,$first) + strlen($last));
  }
  return $string;  
}

function directoryToArray($directory, $recursive) {
// This function by XoloX was downloaded from http://snippets.dzone.com/user/XoloX
  $array_items = array();
  if ($handle = opendir($directory)) {
    while (false !== ($file = readdir($handle))) {
      if ($file != "." && $file != "..") {
        if (is_dir($directory. "/" . $file)) {
          if($recursive) {
            $array_items = array_merge($array_items, directoryToArray($directory. "/" . $file, $recursive));
          }
        } else {
          $file = $directory . "/" . $file;
          $array_items[] = preg_replace("/\/\//si", "/", $file);
        }
      }
    }
    closedir($handle);
  }
  return $array_items;
}

function filewalk($file, $search, $counter, $webpath) {
// Selects and treats files with the extension .htm and .html and .asp and .php
  if (strtolower(substr($file, stripos($file, ".htm"))) == ".htm"
      || strtolower(substr($file, stripos($file, ".html"))) == ".html"
      || strtolower(substr($file, stripos($file, ".asp"))) == ".asp"
      || strtolower(substr($file, stripos($file, ".php"))) == ".php") {
    $all = file_get_contents($file);
    $body = substr($all, stripos($all,"<body"),stripos($all,"</body>") - stripos($all,"<body"));
    $body = preg_replace('/<br \/>/i', ' ', $body);
    $body = preg_replace('/<br>/i', ' ', $body);
    $body = compress($body,"<noscript","</noscript>");
    $body = compress($body,"<script","</script>");
    $body = compress($body,"<iframe","</iframe>");
    $body = compress($body,"<noframe","</noframe>");
    $body = strip_tags($body);
    $body = html_entity_decode($body, ENT_QUOTES);
    $body = preg_replace('/\s+/', ' ', $body);
    // Scans and displays the results
    if (stripos($body, $search)) {
      $title = substr($all, stripos($all,"<title>") + 7,stripos($all,"</title>") - stripos($all,"<title>") - 7);
      $title = html_entity_decode($title, ENT_QUOTES);
      $title = preg_replace('/\s+/', ' ', $title); 
      echo '<p><a style="color:#202073;" href="' . $file . '">' . $title . '</a></br>';
      echo '<span id="webpath">' . $webpath . substr($file, stripos($file, "/")) . '</span><br />';
      // echo textpart($body, $search) .. '</p>';
      $counter = $counter + 1;
    }
  }
  return $counter;
}

// Reads the search text from the page's URL
$url = "http://";

$url .= $_SERVER['SERVER_PORT'] != '80' ? $_SERVER["SERVER_NAME"].":".$_SERVER["SERVER_PORT"].$_SERVER["REQUEST_URI"] : $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];

if (stripos($url,"?search=")) $search = $_GET['search'];

$webpath = dirname($url);

// Starts searching
if (strlen($search) < 2 && trim($search) <> "") {
  echo '<p>' . $to_small . '!</p>';
  $search = "";
}

if (trim($search) <> "") {
  echo "<p>" . $search_at . " '<b>" . $search . "</b>' " . $search_result . ".</p>";
  $counter = 0;
  // Path to the folder containing this file
  $curdir = getcwd();
  // Opens the folder and read its contents
  if ($dir = opendir($curdir)) {
    $files = directoryToArray("./", $recursive);
    foreach ($files as $file) {
      $counter = filewalk($file, $search, $counter, $webpath);
    }
    closedir($dir);
  }
  echo "<p>" . $pages . ": " . $counter . "</p>";
}
?>
</div>
</div>
</div>
</div>
</body>
</html>