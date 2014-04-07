<?php 
/**
 * @package WordPress
 * @subpackage Industrial
 * @since Industrial 2.0
 * 
 * Fonts & Colors Settings File
 * Created by CMSMasters
 * 
 */


header('Content-type: text/css');


require('../../../../wp-load.php');


$cmsms_option = cmsms_get_global_options();

?>

/* ===================> Fonts <================== */

/* ====> Content <==== */

body,
li p {
	font:<?php 
		if ($cmsms_option[CMSMS_SHORTNAME . '_content_font_google_font'] != '') {
			$google_font_array = explode(':', $cmsms_option[CMSMS_SHORTNAME . '_content_font_google_font']);
			
			$google_font = str_replace('+', ' ', $google_font_array[0]);
		} else {
			$google_font = '';
		}
		
		echo $cmsms_option[CMSMS_SHORTNAME . '_content_font_font_size'] . 
		'px/' . 
		$cmsms_option[CMSMS_SHORTNAME . '_content_font_line_height'] . 
		'px ' . 
		(($google_font != '') ? "'" . $google_font . "', " : '') . 
		$cmsms_option[CMSMS_SHORTNAME . '_content_font_system_font'];
	?>;
	font-weight:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_content_font_font_weight']; ?>;
	font-style:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_content_font_font_style']; ?>;
}

input[type="submit"] {
	font-family:<?php 
		if ($cmsms_option[CMSMS_SHORTNAME . '_content_font_google_font'] != '') {
			$google_font_array = explode(':', $cmsms_option[CMSMS_SHORTNAME . '_content_font_google_font']);
			
			$google_font = str_replace('+', ' ', $google_font_array[0]);
		} else {
			$google_font = '';
		}
		
		echo (($google_font != '') ? "'" . $google_font . "', " : '') . 
		$cmsms_option[CMSMS_SHORTNAME . '_content_font_system_font'];
	?>;
}

table.table th {
	font-family:<?php 
		if ($cmsms_option[CMSMS_SHORTNAME . '_content_font_google_font'] != '') {
			$google_font_array = explode(':', $cmsms_option[CMSMS_SHORTNAME . '_content_font_google_font']);
			
			$google_font = str_replace('+', ' ', $google_font_array[0]);
		} else {
			$google_font = '';
		}
		
		echo (($google_font != '') ? "'" . $google_font . "', " : '') . 
		$cmsms_option[CMSMS_SHORTNAME . '_content_font_system_font'];
	?>;
	font-weight:normal;
}

.cmsmsLike, 
.pj_sort a[name="pj_name"], 
.pj_sort a[name="pj_date"], 
a.pj_cat_filter, 
ul.pj_filter_list li a, 
.post .entry-header a, 
.cmsms_tags a, 
.cmsms_tags,  
.tabs li a, 
.tour > li a, 
.cmsms_price_outer span, 
.cmsms_period, 
.colored_button a, 
.project_rollover .entry-meta a, 
.tl_company, 
.tweet_time a, 
.cmsms_post_info, 
.cmsms_post_info a, 
.tab.lpr .tabs li a, 
.blog.opened-article .post .entry-header, 
.testimonial .entry-meta, 
.testimonial .entry-meta a, 
.person_subtitle, 
.cmsms_latest_rollover .cmsms_category a, 
.cmsms_latest_rollover .cmsms_category, 
.cmsms_icon_title, 
.cmsms_timeline_date, 
.heading_subtitle, 
a.more_button, 
.tog {
	font-family:<?php 
		if ($cmsms_option[CMSMS_SHORTNAME . '_h1_font_google_font'] != '') {
			$google_font_array = explode(':', $cmsms_option[CMSMS_SHORTNAME . '_h1_font_google_font']);
			
			$google_font = str_replace('+', ' ', $google_font_array[0]);
		} else {
			$google_font = '';
		}
		
		echo(($google_font != '') ? "'" . $google_font . "', " : '') . 
		$cmsms_option[CMSMS_SHORTNAME . '_h1_font_system_font'];
	?>;
}

ul.pj_filter_list li a {
	font-size: 12px;
}

.heading_subtitle {
	font-size: 20px;
	line-height: 24px;
}

a.more_button {
	font-size: 13px;
	font-weight: normal;
}


/* ====> Links <==== */

a {
	font:<?php 
		if ($cmsms_option[CMSMS_SHORTNAME . '_link_font_google_font'] != '') {
			$google_font_array = explode(':', $cmsms_option[CMSMS_SHORTNAME . '_link_font_google_font']);
			
			$google_font = str_replace('+', ' ', $google_font_array[0]);
		} else {
			$google_font = '';
		}
		
		echo $cmsms_option[CMSMS_SHORTNAME . '_link_font_font_size'] . 
		'px/' . 
		$cmsms_option[CMSMS_SHORTNAME . '_link_font_line_height'] . 
		'px ' . 
		(($google_font != '') ? "'" . $google_font . "', " : '') . 
		$cmsms_option[CMSMS_SHORTNAME . '_link_font_system_font'];
	?>;
	font-weight:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_link_font_font_weight']; ?>;
	font-style:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_link_font_font_style']; ?>;
}

/* ====> Navigation <==== */

#navigation > li > a, 
#navigation > li {
	font:<?php 
		if ($cmsms_option[CMSMS_SHORTNAME . '_nav_title_font_google_font'] != '') {
			$google_font_array = explode(':', $cmsms_option[CMSMS_SHORTNAME . '_nav_title_font_google_font']);
			
			$google_font = str_replace('+', ' ', $google_font_array[0]);
		} else {
			$google_font = '';
		}
		
		echo $cmsms_option[CMSMS_SHORTNAME . '_nav_title_font_font_size'] . 
		'px/' . 
		$cmsms_option[CMSMS_SHORTNAME . '_nav_title_font_line_height'] . 
		'px ' . 
		(($google_font != '') ? "'" . $google_font . "', " : '') . 
		$cmsms_option[CMSMS_SHORTNAME . '_nav_title_font_system_font'];
	?>;
	font-weight:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_nav_title_font_font_weight']; ?>;
	font-style:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_nav_title_font_font_style']; ?>;
}

#navigation ul li a {
	font:<?php 
		if ($cmsms_option[CMSMS_SHORTNAME . '_nav_dropdown_font_google_font'] != '') {
			$google_font_array = explode(':', $cmsms_option[CMSMS_SHORTNAME . '_nav_dropdown_font_google_font']);
			
			$google_font = str_replace('+', ' ', $google_font_array[0]);
		} else {
			$google_font = '';
		}
		
		echo $cmsms_option[CMSMS_SHORTNAME . '_nav_dropdown_font_font_size'] . 
		'px/' . 
		$cmsms_option[CMSMS_SHORTNAME . '_nav_dropdown_font_line_height'] . 
		'px ' . 
		(($google_font != '') ? "'" . $google_font . "', " : '') . 
		$cmsms_option[CMSMS_SHORTNAME . '_nav_dropdown_font_system_font'];
	?>;
	font-weight:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_nav_dropdown_font_font_weight']; ?>;
	font-style:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_nav_dropdown_font_font_style']; ?>;
}

.responsive_nav {
	background-color:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_link_font_font_color']; ?>;
}


/* ====> Headings <==== */

h1,
h1 a,
.logo .title {
	font:<?php 
		if ($cmsms_option[CMSMS_SHORTNAME . '_h1_font_google_font'] != '') {
			$google_font_array = explode(':', $cmsms_option[CMSMS_SHORTNAME . '_h1_font_google_font']);
			
			$google_font = str_replace('+', ' ', $google_font_array[0]);
		} else {
			$google_font = '';
		}
		
		echo $cmsms_option[CMSMS_SHORTNAME . '_h1_font_font_size'] . 
		'px/' . 
		$cmsms_option[CMSMS_SHORTNAME . '_h1_font_line_height'] . 
		'px ' . 
		(($google_font != '') ? "'" . $google_font . "', " : '') . 
		$cmsms_option[CMSMS_SHORTNAME . '_h1_font_system_font'];
	?>;
	font-weight:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_h1_font_font_weight']; ?>;
	font-style:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_h1_font_font_style']; ?>;
}

h2,
h2 a {
	font:<?php 
		if ($cmsms_option[CMSMS_SHORTNAME . '_h2_font_google_font'] != '') {
			$google_font_array = explode(':', $cmsms_option[CMSMS_SHORTNAME . '_h2_font_google_font']);
			
			$google_font = str_replace('+', ' ', $google_font_array[0]);
		} else {
			$google_font = '';
		}
		
		echo $cmsms_option[CMSMS_SHORTNAME . '_h2_font_font_size'] . 
		'px/' . 
		$cmsms_option[CMSMS_SHORTNAME . '_h2_font_line_height'] . 
		'px ' . 
		(($google_font != '') ? "'" . $google_font . "', " : '') . 
		$cmsms_option[CMSMS_SHORTNAME . '_h2_font_system_font'];
	?>;
	font-weight:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_h2_font_font_weight']; ?>;
	font-style:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_h2_font_font_style']; ?>;
}

h3,
h3 a {
	font:<?php 
		if ($cmsms_option[CMSMS_SHORTNAME . '_h3_font_google_font'] != '') {
			$google_font_array = explode(':', $cmsms_option[CMSMS_SHORTNAME . '_h3_font_google_font']);
			
			$google_font = str_replace('+', ' ', $google_font_array[0]);
		} else {
			$google_font = '';
		}
		
		echo $cmsms_option[CMSMS_SHORTNAME . '_h3_font_font_size'] . 
		'px/' . 
		$cmsms_option[CMSMS_SHORTNAME . '_h3_font_line_height'] . 
		'px ' . 
		(($google_font != '') ? "'" . $google_font . "', " : '') . 
		$cmsms_option[CMSMS_SHORTNAME . '_h3_font_system_font'];
	?>;
	font-weight:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_h3_font_font_weight']; ?>;
	font-style:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_h3_font_font_style']; ?>;
}

h4,
h4 a,
.cmsms_sitemap > li > a {
	font:<?php 
		if ($cmsms_option[CMSMS_SHORTNAME . '_h4_font_google_font'] != '') {
			$google_font_array = explode(':', $cmsms_option[CMSMS_SHORTNAME . '_h4_font_google_font']);
			
			$google_font = str_replace('+', ' ', $google_font_array[0]);
		} else {
			$google_font = '';
		}
		
		echo $cmsms_option[CMSMS_SHORTNAME . '_h4_font_font_size'] . 
		'px/' . 
		$cmsms_option[CMSMS_SHORTNAME . '_h4_font_line_height'] . 
		'px ' . 
		(($google_font != '') ? "'" . $google_font . "', " : '') . 
		$cmsms_option[CMSMS_SHORTNAME . '_h4_font_system_font'];
	?>;
	font-weight:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_h4_font_font_weight']; ?>;
	font-style:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_h4_font_font_style']; ?>;
}

h5,
h5 a {
	font:<?php 
		if ($cmsms_option[CMSMS_SHORTNAME . '_h5_font_google_font'] != '') {
			$google_font_array = explode(':', $cmsms_option[CMSMS_SHORTNAME . '_h5_font_google_font']);
			
			$google_font = str_replace('+', ' ', $google_font_array[0]);
		} else {
			$google_font = '';
		}
		
		echo $cmsms_option[CMSMS_SHORTNAME . '_h5_font_font_size'] . 
		'px/' . 
		$cmsms_option[CMSMS_SHORTNAME . '_h5_font_line_height'] . 
		'px ' . 
		(($google_font != '') ? "'" . $google_font . "', " : '') . 
		$cmsms_option[CMSMS_SHORTNAME . '_h5_font_system_font'];
	?>;
	font-weight:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_h5_font_font_weight']; ?>;
	font-style:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_h5_font_font_style']; ?>;
}

h6,
h6 a, 
.table tr th, 
.cmsms_date_title, 
.percent_item_colored_wrap .percent_item_text, 
.cmsms_info .cmsms_comments_wrap {
	font:<?php 
		if ($cmsms_option[CMSMS_SHORTNAME . '_h6_font_google_font'] != '') {
			$google_font_array = explode(':', $cmsms_option[CMSMS_SHORTNAME . '_h6_font_google_font']);
			
			$google_font = str_replace('+', ' ', $google_font_array[0]);
		} else {
			$google_font = '';
		}
		
		echo $cmsms_option[CMSMS_SHORTNAME . '_h6_font_font_size'] . 
		'px/' . 
		$cmsms_option[CMSMS_SHORTNAME . '_h6_font_line_height'] . 
		'px ' . 
		(($google_font != '') ? "'" . $google_font . "', " : '') . 
		$cmsms_option[CMSMS_SHORTNAME . '_h6_font_system_font'];
	?>;
	font-weight:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_h6_font_font_weight']; ?>;
	font-style:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_h6_font_font_style']; ?>;
}

/* ====> Other <==== */

blockquote, 
q {
	font:<?php 
		if ($cmsms_option[CMSMS_SHORTNAME . '_quote_font_google_font'] != '') {
			$google_font_array = explode(':', $cmsms_option[CMSMS_SHORTNAME . '_quote_font_google_font']);
			
			$google_font = str_replace('+', ' ', $google_font_array[0]);
		} else {
			$google_font = '';
		}
		
		echo $cmsms_option[CMSMS_SHORTNAME . '_quote_font_font_size'] . 
		'px/' . 
		$cmsms_option[CMSMS_SHORTNAME . '_quote_font_line_height'] . 
		'px ' . 
		(($google_font != '') ? "'" . $google_font . "', " : '') . 
		$cmsms_option[CMSMS_SHORTNAME . '_quote_font_system_font'];
	?>;
	font-weight:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_quote_font_font_weight']; ?>;
	font-style:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_quote_font_font_style']; ?>;
}

q:before, 
.tl-content_wrap:before, 
.widget .tl-content_wrap:after, 
.blog.opened-article .cmsms_post_format_img:before, 
blockquote:before {font-family:'Headland One Regular';}

span.dropcap {
	font:<?php 
		if ($cmsms_option[CMSMS_SHORTNAME . '_dropcap_font_google_font'] != '') {
			$google_font_array = explode(':', $cmsms_option[CMSMS_SHORTNAME . '_dropcap_font_google_font']);
			
			$google_font = str_replace('+', ' ', $google_font_array[0]);
		} else {
			$google_font = '';
		}
		
		echo $cmsms_option[CMSMS_SHORTNAME . '_dropcap_font_font_size'] . 
		'px/' . 
		$cmsms_option[CMSMS_SHORTNAME . '_dropcap_font_line_height'] . 
		'px ' . 
		(($google_font != '') ? "'" . $google_font . "', " : '') . 
		$cmsms_option[CMSMS_SHORTNAME . '_dropcap_font_system_font'];
	?>;
	font-weight:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_dropcap_font_font_weight']; ?>;
	font-style:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_dropcap_font_font_style']; ?>;
}

code {
	font:<?php 
		if ($cmsms_option[CMSMS_SHORTNAME . '_code_font_google_font'] != '') {
			$google_font_array = explode(':', $cmsms_option[CMSMS_SHORTNAME . '_code_font_google_font']);
			
			$google_font = str_replace('+', ' ', $google_font_array[0]);
		} else {
			$google_font = '';
		}
		
		echo $cmsms_option[CMSMS_SHORTNAME . '_code_font_font_size'] . 
		'px/' . 
		$cmsms_option[CMSMS_SHORTNAME . '_code_font_line_height'] . 
		'px ' . 
		(($google_font != '') ? "'" . $google_font . "', " : '') . 
		$cmsms_option[CMSMS_SHORTNAME . '_code_font_system_font'];
	?>;
	font-weight:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_code_font_font_weight']; ?>;
	font-style:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_code_font_font_style']; ?>;
}

small,
small a, 
.cmsms_breadcrumbs, 
.cmsms_breadcrumbs a {
	font:<?php 
		if ($cmsms_option[CMSMS_SHORTNAME . '_small_font_google_font'] != '') {
			$google_font_array = explode(':', $cmsms_option[CMSMS_SHORTNAME . '_small_font_google_font']);
			
			$google_font = str_replace('+', ' ', $google_font_array[0]);
		} else {
			$google_font = '';
		}
		
		echo $cmsms_option[CMSMS_SHORTNAME . '_small_font_font_size'] . 
		'px/' . 
		$cmsms_option[CMSMS_SHORTNAME . '_small_font_line_height'] . 
		'px ' . 
		(($google_font != '') ? "'" . $google_font . "', " : '') . 
		$cmsms_option[CMSMS_SHORTNAME . '_small_font_system_font'];
	?>;
	font-weight:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_small_font_font_weight']; ?>;
	font-style:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_small_font_font_style']; ?>;
}

input, 
textarea, 
select {
	font:<?php 
		if ($cmsms_option[CMSMS_SHORTNAME . '_input_font_google_font'] != '') {
			$google_font_array = explode(':', $cmsms_option[CMSMS_SHORTNAME . '_input_font_google_font']);
			
			$google_font = str_replace('+', ' ', $google_font_array[0]);
		} else {
			$google_font = '';
		}
		
		echo $cmsms_option[CMSMS_SHORTNAME . '_input_font_font_size'] . 
		'px/' . 
		$cmsms_option[CMSMS_SHORTNAME . '_input_font_line_height'] . 
		'px ' . 
		(($google_font != '') ? "'" . $google_font . "', " : '') . 
		$cmsms_option[CMSMS_SHORTNAME . '_input_font_system_font'];
	?>;
	font-weight:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_input_font_font_weight']; ?>;
	font-style:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_input_font_font_style']; ?>;
}

#footer,
#footer a {
	font:<?php 
		if ($cmsms_option[CMSMS_SHORTNAME . '_footer_font_google_font'] != '') {
			$google_font_array = explode(':', $cmsms_option[CMSMS_SHORTNAME . '_footer_font_google_font']);
			
			$google_font = str_replace('+', ' ', $google_font_array[0]);
		} else {
			$google_font = '';
		}
		
		echo $cmsms_option[CMSMS_SHORTNAME . '_footer_font_font_size'] . 
		'px/' . 
		$cmsms_option[CMSMS_SHORTNAME . '_footer_font_line_height'] . 
		'px ' . 
		(($google_font != '') ? "'" . $google_font . "', " : '') . 
		$cmsms_option[CMSMS_SHORTNAME . '_footer_font_system_font'];
	?>;
	font-weight:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_footer_font_font_weight']; ?>;
	font-style:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_footer_font_font_style']; ?>;
}


/* ===================> Colors <================== */

/* ====> Content <==== */
	
body {
	color:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_content_font_font_color']; ?>;
}


/* ====> Links <==== */

a, 
.person_subtitle, 
.comment-body .published {
	color:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_link_font_font_color']; ?>;
}

a:hover, 
.cmsms_breadcrumbs {
	color:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_link_font_hover']; ?>;
}

.pj_sort a[name="pj_name"], 
.pj_sort a[name="pj_date"], 
a.pj_cat_filter, 
div.jp-playlist li a:hover, 
.project_rollover .entry-header .entry-title a, 
.widget_custom_recent_testimonials_entries .tl_author a:hover, 
.related_posts_content a, 
.comment-edit-link:hover, 
.comment-reply-link:hover,
#cancel-comment-reply-link:hover, 
ul.pj_filter_list li:hover a, 
ul.pj_filter_list li.current a, 
.jp-playlist-current, 
.breadcrumbs_sep, 
.cmsms_icon_title {
	color:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_content_font_font_color']; ?>;
}

.color_3, 
q:before, 
.cmsms_meta_inner h5, 
blockquote:before, 
.comment-edit-link, 
.comment-reply-link,
#cancel-comment-reply-link, 
.widget_custom_recent_testimonials_entries .tl_author a, 
.related_posts_content a:hover, 
.table tr th, 
.cmsms_icon_title:hover {
	color:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_theme_color']; ?>;
}


/* ====> Navigation <==== */

#navigation > li > a {
	color:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_nav_title_font_font_color']; ?>;
}

#navigation > li.current_page_item > a,
#navigation > li.current-menu-ancestor > a,
#navigation > li:hover > a,
#navigation > li > a:hover {
	color:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_nav_title_font_hover']; ?>;
}

#navigation ul li > a {
	color:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_nav_dropdown_font_font_color']; ?>;
}

#navigation ul li.current_page_item > a,
#navigation ul li.current-menu-ancestor > a,
#navigation ul li:hover > a {
	color:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_nav_dropdown_font_hover']; ?>;
}


/* ====> Headings <==== */

h1,
.logo {
	color:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_h1_font_font_color']; ?>;
}

h2 {
	color:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_h2_font_font_color']; ?>;
}

h3 {
	color:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_h3_font_font_color']; ?>;
}

h4 {
	color:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_h4_font_font_color']; ?>;
}

h5 {
	color:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_h5_font_font_color']; ?>;
}

h6 {
	color:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_h6_font_font_color']; ?>;
}

h1 a, 
h2 a, 
h3 a, 
h4 a, 
h5 a, 
h6 a {
	color:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_theme_color']; ?>;
}

h1 a:hover, 
h2 a:hover, 
h3 a:hover, 
h4 a:hover, 
h5 a:hover, 
h6 a:hover {
	color:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_h1_font_font_color']; ?>;
}


/* ====> Other <==== */

.color_2, 
blockquote, 
q {
	color:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_quote_font_font_color']; ?>;
}

span.dropcap {
	color:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_dropcap_font_font_color']; ?>;
}

span.dropcap2 {color:#ffffff;}

span.dropcap2 {
	background-color:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_dropcap_font_font_color']; ?>;
}

code {
	color:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_code_font_font_color']; ?>;
}

small {
	color:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_small_font_font_color']; ?>;
}

input, 
textarea, 
select,
select option {
	color:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_input_font_font_color']; ?>;
}


/* ====> Footer Content <==== */

#bottom, 
#bottom small, 
#footer {
	color:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_footer_font_font_color']; ?>;
}

#bottom h1, 
#bottom h2, 
#bottom h3, 
#bottom h4, 
#bottom h5, 
#bottom h6 {
	color:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_footer_h_font']; ?>;
}


/* ====> Footer Links <==== */

#bottom a, 
#footer a {
	color:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_footer_link_font']; ?>;
}

#bottom a:hover, 
#footer a:hover, 
#footer h1 a:hover, 
#footer h2 a:hover, 
#footer h3 a:hover, 
#footer h4 a:hover, 
#footer h5 a:hover, 
#footer h6 a:hover {
	color:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_footer_font_hover']; ?>;
}

/* ===================> Backgrounds and Borders <================== */

#slide_top:hover,
.social_but, 
h2:before, 
.headline:after, 
.header_inner:after, 
.button:hover, 
.pricing_button:hover, 
.button_small:hover, 
.button_medium:hover, 
.button_large:hover, 
input[type="submit"]:hover, 
.cmsmsLike:hover, 
.cmsmsLike.active, 
.cmsmsLike:hover span, 
.cmsmsLike.active span, 
.tog:hover:before, 
.tog.current:before,  
ul.page-numbers span, 
.cmsms_content_slider_parent ul.cmsms_slides_nav li a, 
.tp-bullets.simplebullets.round .bullet:hover, 
.tp-bullets.simplebullets.round .bullet.selected, 
.ls-industrial .ls-bottom-slidebuttons a.ls-nav-active,
.ls-industrial .ls-bottom-slidebuttons a:hover, 
.pj_sort a[name="pj_name"]:after, 
.pj_sort a[name="pj_date"]:after, 
a.pj_cat_filter:after, 
.cmsms_share:hover:before, 
.commentlist li div.comment-content ul li:hover:before, 
div.jp-playlist li:hover:before, 
.list li:hover:before, 
.widget_links ul li:hover:before, 
.widget.widget_archive ul li:hover:before, 
.widget.widget_categories ul li:hover:before, 
.widget.widget_meta ul li:hover:before, 
.widget.widget_recent_comments ul li:hover:before, 
.widget.widget_recent_entries ul li:hover:before, 
.widget.widget_pages ul li:hover:before, 
.widget.widget_nav_menu ul li:hover:before, 
.content_wrap div[data-folder="text"] ul li:hover:before, 
.rev_slider > ul > li a.more_but:hover:before, 
a.more_button:hover:before {
	background-color:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_theme_color']; ?>;
}

.pj_filter_container ul.pj_filter_list, 
#navigation li > ul, 
code {
	border-top-color:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_theme_color']; ?>;
}

#navigation > li.current_page_item > a,
#navigation > li.current-menu-ancestor > a, 
#navigation > li > ul:before {
	border-bottom-color:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_theme_color']; ?>;
}

/* =================> Social Icons Background Colors <================ */

<?php 
$i = 1;

foreach ($cmsms_option[CMSMS_SHORTNAME . '_social_icons'] as $cmsms_social_icons) {
	$cmsms_social_icon = explode('|', str_replace(' ', '', $cmsms_social_icons));
	
	echo '#header .social_icons li:nth-child(' . $i . ') > a:first-child, #footer .social_icons li:nth-child(' . $i . ') > a:first-child {background-color:' . $cmsms_social_icon[1] . ';}' . "\n";
	
	$i++;
}
?>


/* ---------- Small Tablet & Mobile (Note: Design for a width less than 1024px) ---------- */

@media only screen and (max-width: 1024px) {
	
	#navigation ul li a, 
	#navigation li a {
		color:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_nav_title_font_font_color']; ?>;
	}
	
	#navigation li.current_page_item > a, 
	#navigation li.current-menu-ancestor > a, 
	#navigation ul li.current_page_item > a,
	#navigation ul li.current-menu-ancestor > a {
		color:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_nav_title_font_hover']; ?>;
	}
	
}


/* ---------- WooCommerce ---------- */

.widget del .amount {
	color:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_content_font_font_color']; ?>;
}

.products .product .entry-title,
.products .product .entry-title a,
.cmsms_product_info .cmsms_product_info_text {
	font:<?php 
		if ($cmsms_option[CMSMS_SHORTNAME . '_h6_font_google_font'] != '') {
			$google_font_array = explode(':', $cmsms_option[CMSMS_SHORTNAME . '_h6_font_google_font']);
			
			$google_font = str_replace('+', ' ', $google_font_array[0]);
		} else {
			$google_font = '';
		}
		
		echo $cmsms_option[CMSMS_SHORTNAME . '_h6_font_font_size'] . 
		'px/' . 
		$cmsms_option[CMSMS_SHORTNAME . '_h6_font_line_height'] . 
		'px ' . 
		(($google_font != '') ? "'" . $google_font . "', " : '') . 
		$cmsms_option[CMSMS_SHORTNAME . '_h6_font_system_font'];
	?>;
	font-weight:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_h6_font_font_weight']; ?>;
	font-style:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_h6_font_font_style']; ?>;
}

.col2-set .col-1 > h2, 
.col2-set .col-2 > h2,
.col2-set .col-1 > h3, 
.col2-set .col-2 > h3,
.checkout h3 {
	font:<?php 
		if ($cmsms_option[CMSMS_SHORTNAME . '_h3_font_google_font'] != '') {
			$google_font_array = explode(':', $cmsms_option[CMSMS_SHORTNAME . '_h3_font_google_font']);
			
			$google_font = str_replace('+', ' ', $google_font_array[0]);
		} else {
			$google_font = '';
		}
		
		echo $cmsms_option[CMSMS_SHORTNAME . '_h3_font_font_size'] . 
		'px/' . 
		$cmsms_option[CMSMS_SHORTNAME . '_h3_font_line_height'] . 
		'px ' . 
		(($google_font != '') ? "'" . $google_font . "', " : '') . 
		$cmsms_option[CMSMS_SHORTNAME . '_h3_font_system_font'];
	?>;
	font-weight:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_h3_font_font_weight']; ?>;
	font-style:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_h3_font_font_style']; ?>;
}

.product .price,
.cmsms_product_comment_info time,
.posted_in a, 
.tagged_as a, 
.posted_in,
.tagged_as,
.products .product .product_inner .entry-meta .price,
.cmsms_dynamic_cart .widget_shopping_cart_content .cart_list li a,
.cmsms_dynamic_cart .widget_shopping_cart_content .cart_list li .quantity,
.shop_table thead th,
.widget .amount,
.widget ins {
	font-family:<?php 
		if ($cmsms_option[CMSMS_SHORTNAME . '_h6_font_google_font'] != '') {
			$google_font_array = explode(':', $cmsms_option[CMSMS_SHORTNAME . '_h6_font_google_font']);
			
			$google_font = str_replace('+', ' ', $google_font_array[0]);
		} else {
			$google_font = '';
		}
		
		echo (($google_font != '') ? "'" . $google_font . "', " : '') . 
		$cmsms_option[CMSMS_SHORTNAME . '_h6_font_system_font'];
	?>;
}

.product .entry-summary .product_title {
	font:<?php 
		if ($cmsms_option[CMSMS_SHORTNAME . '_h3_font_google_font'] != '') {
			$google_font_array = explode(':', $cmsms_option[CMSMS_SHORTNAME . '_h3_font_google_font']);
			
			$google_font = str_replace('+', ' ', $google_font_array[0]);
		} else {
			$google_font = '';
		}
		
		echo $cmsms_option[CMSMS_SHORTNAME . '_h3_font_font_size'] . 
		'px/' . 
		$cmsms_option[CMSMS_SHORTNAME . '_h3_font_line_height'] . 
		'px ' . 
		(($google_font != '') ? "'" . $google_font . "', " : '') . 
		$cmsms_option[CMSMS_SHORTNAME . '_h3_font_system_font'];
	?>;
	font-weight:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_h3_font_font_weight']; ?>;
	font-style:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_h3_font_font_style']; ?>;
}

.products .product .entry-title,
.products .product .entry-title a {
	font-size:15px;
	font-weight:500;
}

.star-rating span:before,
.cmsms_dynamic_cart .widget_shopping_cart_content .cart_list li a:hover,
.stars span a:hover,
.cmsms_product_comment_info time,
.woocommerce-message:before,
.woocommerce-info:before {
	color:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_link_font_font_color']; ?>;
}

.products .product .out-of-stock,
.cmsms_dynamic_cart_button,
.widget_shopping_cart_content .buttons .button.checkout,
.product .entry-summary .cart .button,
.woocommerce .shop_table.cart .actions .button,
.woocommerce .widget_price_filter .ui-slider .ui-slider-handle, 
.woocommerce-page .widget_price_filter .ui-slider .ui-slider-handle {
	background-color:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_link_font_font_color']; ?>;
}

.product .entry-title,
.product .entry-title a,
.cmsms_dynamic_cart .widget_shopping_cart_content .cart_list li a {
	color:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_h6_font_font_color']; ?>;
}

.product .product_inner .entry-meta .price,
.project_rollover .entry-header .entry-title a:hover, 
a.more_button:hover,
.product .entry-title a:hover,
.cmsms_dynamic_cart .widget_shopping_cart_content .cart_list li .quantity .amount,
.cmsms_dynamic_cart .widget_shopping_cart_content .total .amount,
.product .product_inner.in_cart .preloader:before,
.product .entry-summary .price .amount,
.shop_table thead th,
.woocommerce .shop_table.cart .product-subtotal .amount,
.cart_totals table td .amount,
.shop_table .total strong,
.widget.widget_shopping_cart .widget_shopping_cart_content .total .amount,
.widget .amount,
.widget ins {
	color:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_theme_color']; ?>;
}

.product .onsale, 
.widget_shopping_cart_content .buttons .button,
.woocommerce .shop_table.cart .actions .checkout-button,
.shipping-calculator-form > p .button {
	background-color:<?php echo $cmsms_option[CMSMS_SHORTNAME . '_theme_color']; ?>;
}
