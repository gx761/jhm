<?php
/**
 * Content wrappers
 *
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     1.6.4
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

$template = get_option( 'template');


$cmsms_option = cmsms_get_global_options();


if (is_shop()) {
	$cmsms_page_id = woocommerce_get_page_id('shop');
} else {
	$cmsms_page_id = get_the_ID();
}


$cmsms_layout = get_post_meta($cmsms_page_id, 'cmsms_layout', true);


if (!$cmsms_layout) { 
    $cmsms_layout = 'r_sidebar'; 
}


switch( $template ) {
	case 'twentyeleven' :
		echo '<div id="primary"><div id="content" role="main">';
		break;
	case 'twentytwelve' :
		echo '<div id="primary" class="site-content"><div id="content" role="main">';
		break;
	case 'twentythirteen' :
		echo '<div id="primary" class="site-content"><div id="content" role="main" class="entry-content twentythirteen">';
		break;
	case 'twentyfourteen' :
		echo '<div id="primary" class="content-area"><div id="content" role="main" class="site-content twentyfourteen"><div class="tfwc">';
		break;
	default :
		if ($cmsms_layout == 'r_sidebar') {
			echo '<section id="content" class="cmsms_woo" role="main">' . "\n\t";
		} elseif ($cmsms_layout == 'l_sidebar') {
			echo '<section id="content" class="fr cmsms_woo" role="main">' . "\n\t";
		} else {
			echo '<section id="middle_content" class="cmsms_woo" role="main">' . "\n\t";
		}
		break;
}