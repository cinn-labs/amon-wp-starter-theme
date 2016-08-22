<?php
  function load_scripts(){
    // Google Maps
    // wp_enqueue_script( 'googleMapsScripts', 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false' );
    // Google Fonts
    // wp_enqueue_style( 'themeFont1', 'https://fonts.googleapis.com/css?family=Lato:400,100,100italic,300,700,900' );
    wp_enqueue_script( 'themeScripts', get_stylesheet_directory_uri() . '/.dist/theme.min.js', array('jquery'), '1.0', true );
  }
  add_action( 'wp_enqueue_scripts', 'load_scripts' );
?>
