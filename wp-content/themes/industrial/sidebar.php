<?php
/**
 * @package WordPress
 * @subpackage Industrial
 * @since Industrial 2.0
 * 
 * Sidebar Template
 * Created by CMSMasters
 * 
 */


$cmsms_option = cmsms_get_global_options();


if (((class_exists('woocommerce') && !is_shop()) || !class_exists('woocommerce')) && is_archive()) {
	$sidebar_id = $cmsms_option[CMSMS_SHORTNAME . '_archive_right_left_sidebar'];
} elseif (is_search()) {
	$sidebar_id = $cmsms_option[CMSMS_SHORTNAME . '_search_right_left_sidebar'];
} elseif (!is_404() && !is_home()) {
	if (class_exists('woocommerce') && is_shop()) {
		$cmsms_page_id = woocommerce_get_page_id('shop');
	} else {
		$cmsms_page_id = get_the_ID();
	}
	
	
	$sidebar_id = get_post_meta($cmsms_page_id, 'cmsms_sidebar_id', true);
}


if (isset($sidebar_id) && is_dynamic_sidebar($sidebar_id) && is_active_sidebar($sidebar_id)) {
	dynamic_sidebar($sidebar_id);
} elseif (is_active_sidebar('sidebar_default')) {
	dynamic_sidebar('sidebar_default');
} else {
	sidebarDefaultText();
}

