<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <title><?php echo wp_title( '|', true, 'right' ); ?>SITE TITLE</title>
  <link rel="icon" href="<?php bloginfo('template_directory'); ?>/assets/favicon.ico" type="image/x-icon"/>
  <link rel="shortcut icon" href="<?php bloginfo('template_directory'); ?>/assets/favicon.ico" type="image/x-icon"/>
  <link rel="profile" href="http://gmpg.org/xfn/11">
  <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
