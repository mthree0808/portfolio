<?php include "../inc/page_var.php" ?>
<!DOCTYPE html>
<html lang="ko" data-lang="ko">
<head>
<meta charset="UTF-8">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2, user-scalable=yes" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<title><?=$site_name?></title>
<meta property="og:title" content="<?=$site_name?>">
<meta property="og:site_name" content="<?=$site_name?>">
<meta property="og:image" content="../images/inc/thumb_img.jpg" />
<script type="text/javascript" src="../js/jquery-1.12.4.min.js"></script>
<script type="text/javascript" src="../js/jquery-ui.min.js"></script>
<script type="text/javascript" src="../js/inc.js"></script>
<?php if($dp1!="main"){?>
<script type="text/javascript" src="../js/inc_<?=$dp2?>.js"></script>
<?php }?>
<link href="../css/inc.css" rel="stylesheet" type="text/css" />
<link href="../css/style.css" rel="stylesheet" type="text/css" />
<?php if($dp1!="main"){?>
<link href="../css/style_<?=$dp2?>.css" rel="stylesheet" type="text/css" />
<?php }?>
<link href="../css/font.css" rel="stylesheet" type="text/css" />
<!--[if lt IE 9]>
<link href="../css/style.css" rel="stylesheet" type="text/css" />
<link href="../css/font_ie.css" rel="stylesheet" type="text/css" /> 
<![endif]--> 
<link rel="shortcut icon" href="../images/inc/favicon.ico" />
</head>