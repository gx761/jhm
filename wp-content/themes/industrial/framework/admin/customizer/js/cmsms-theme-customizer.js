/**
 * @package WordPress
 * @subpackage Industrial
 * @since Industrial 1.0
 * 
 * Theme Customizer Scripts
 * Created by CMSMasters
 * 
 */


(function ($) { 
	// General Options Theme Color
	wp.customize('cmsms_options_industrial_general[industrial_theme_color]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_theme_color').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_theme_color"> ' + 
				'h1 a, ' + 
				'h2 a, ' + 
				'h3 a, ' + 
				'h4 a, ' + 
				'h5 a, ' + 
				'h6 a, ' + 
				'.project_rollover .entry-header .entry-title a:hover, ' + 
				'.color_3, ' + 
				'q:before, ' + 
				'.cmsms_meta_inner h5, ' + 
				'blockquote:before, ' + 
				'.comment-edit-link, ' + 
				'.comment-reply-link, ' + 
				'#cancel-comment-reply-link, ' + 
				'.widget_custom_recent_testimonials_entries .tl_author a, ' + 
				'.related_posts_content a:hover, ' + 
				'.cmsms_icon_title:hover, ' + 
				'.table tr th {color:' + newval + ';} ' + 
				'#slide_top:hover, ' + 
				'.social_but, ' + 
				'h2:before, ' + 
				'.headline:before, ' + 
				'.header_inner:after, ' + 
				'.button:hover, ' + 
				'.pricing_button:hover, ' + 
				'.button_small:hover, ' + 
				'.button_medium:hover, ' + 
				'.button_large:hover, ' + 
				'input[type="submit"]:hover, ' + 
				'.cmsmsLike:hover, ' + 
				'.cmsmsLike.active, ' + 
				'.cmsmsLike:hover span, ' + 
				'.cmsmsLike.active span, ' + 
				'.tog:hover:before, ' + 
				'.tog.current:before,  ' + 
				'ul.page-numbers span, ' + 
				'.tp-bullets.simplebullets.round .bullet:hover, ' + 
				'.tp-bullets.simplebullets.round .bullet.selected, ' + 
				'.ls-industrial .ls-bottom-slidebuttons a.ls-nav-active, ' + 
				'.ls-industrial .ls-bottom-slidebuttons a:hover, ' + 
				'.pj_sort a[name="pj_name"]:after, ' + 
				'.pj_sort a[name="pj_date"]:after, ' + 
				'a.pj_cat_filter:after {background-color:' + newval + ';} ' + 
				'.pj_filter_container ul.pj_filter_list, ' + 
				'#navigation li > ul, ' + 
				'code {border-top-color:' + newval + ';} ' + 
				'#navigation > li.current_page_item > a, ' + 
				'#navigation > li.current-menu-ancestor > a, ' + 
				'#navigation > li > ul:before {border-bottom-color:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	
	
	// Header Options Header Height
	wp.customize('cmsms_options_industrial_style_header[industrial_header_height]', function (value) { 
		value.bind(function (newval) { 
			$('#header > .header_inner').css('height', newval + 'px');
		} );
	} );
	
	// Header Options Header Navigation Top Position
	wp.customize('cmsms_options_industrial_style_header[industrial_header_nav_top]', function (value) { 
		value.bind(function (newval) { 
			$('#header nav').css('top', newval + 'px');
		} );
	} );
	
	
	
	// Background Options Background Color
	wp.customize('cmsms_options_industrial_style_bg[industrial_bg_col]', function (value) { 
		value.bind(function (newval) { 
			$('body').css('background-color', newval);
		} );
	} );
	
	// Background Options Background Image
	wp.customize('cmsms_options_industrial_style_bg[industrial_bg_img]', function (value) { 
		value.bind(function (newval) { 
			$('body').css('background-image', 'url(' + newval + ')');
		} );
	} );
	
	// Background Options Background Repeat
	wp.customize('cmsms_options_industrial_style_bg[industrial_bg_rep]', function (value) { 
		value.bind(function (newval) { 
			$('body').css('background-repeat', newval);
		} );
	} );
	
	// Background Options Background Position
	wp.customize('cmsms_options_industrial_style_bg[industrial_bg_pos]', function (value) { 
		value.bind(function (newval) { 
			$('body').css('background-position', newval);
		} );
	} );
	
	// Background Options Background Attachment
	wp.customize('cmsms_options_industrial_style_bg[industrial_bg_att]', function (value) { 
		value.bind(function (newval) { 
			$('body').css('background-attachment', newval);
		} );
	} );
	
	
	
	// Logo Options Custom Logo Image Width
	wp.customize('cmsms_options_industrial_logo_image[industrial_logo_width]', function (value) { 
		value.bind(function (newval) { 
			$('#page .header_inner > a.logo, #page .header_inner > a.logo > img').css('width', newval + 'px');
		} );
	} );
	
	// Logo Options Custom Logo Image Height
	wp.customize('cmsms_options_industrial_logo_image[industrial_logo_height]', function (value) { 
		value.bind(function (newval) { 
			$('#page .header_inner > a.logo, #page .header_inner > a.logo > img').css('height', newval + 'px');
		} );
	} );
	
	// Logo Options Custom Logo Top Position
	wp.customize('cmsms_options_industrial_logo_image[industrial_logo_top]', function (value) { 
		value.bind(function (newval) { 
			$('#page .header_inner > a.logo').css('top', newval + 'px');
		} );
	} );
	
	// Logo Options Custom Logo Left Position
	wp.customize('cmsms_options_industrial_logo_image[industrial_logo_left]', function (value) { 
		value.bind(function (newval) { 
			$('#page .header_inner > a.logo').css('left', newval + 'px');
		} );
	} );
	
	
	
	// Content Font Options System Font
	wp.customize('cmsms_options_industrial_font_content[industrial_content_font_system_font]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_content_font_system_font').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_content_font_system_font"> ' + 
				'body, ' + 
				'li p, ' + 
				'input[type="submit"], ' + 
				'table.table th {font-family:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// Content Font Options Google Font
	wp.customize('cmsms_options_industrial_font_content[industrial_content_font_google_font]', function (value) { 
		value.bind(function (newval) { 
			var newvalArray = newval.split(':'), 
				newvalResult = newvalArray[0].replace(/\+/g, ' ');
			
			
			$('html > head').append('<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=' + newval + '" type="text/css" />');
			
			
			$('html > head').find('style#industrial_content_font_google_font').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_content_font_google_font"> ' + 
				'body, ' + 
				'li p, ' + 
				'input[type="submit"], ' + 
				'table.table th {font-family:' + newvalResult + ';} ' + 
			'</style>');
		} );
	} );
	
	// Content Font Options Font Color
	wp.customize('cmsms_options_industrial_font_content[industrial_content_font_font_color]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_content_font_font_color').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_content_font_font_color"> ' + 
				'body, ' + 
				'.pj_sort a[name="pj_name"], ' + 
				'.pj_sort a[name="pj_date"], ' + 
				'a.pj_cat_filter, ' + 
				'div.jp-playlist li a:hover, ' + 
				'.project_rollover .entry-header .entry-title a, ' + 
				'.widget_custom_recent_testimonials_entries .tl_author a:hover, ' + 
				'.related_posts_content a, ' + 
				'.comment-edit-link:hover, ' + 
				'.comment-reply-link:hover,' + 
				'#cancel-comment-reply-link:hover, ' + 
				'ul.pj_filter_list li:hover a, ' + 
				'ul.pj_filter_list li.current a, ' + 
				'.jp-playlist-current, ' + 
				'.cmsms_icon_title, ' + 
				'.breadcrumbs_sep {color:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// Content Font Options Font Size
	wp.customize('cmsms_options_industrial_font_content[industrial_content_font_font_size]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_content_font_font_size').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_content_font_font_size"> ' + 
				'body, ' + 
				'li p {font-size:' + newval + 'px;} ' + 
			'</style>');
		} );
	} );
	
	// Content Font Options Line Height
	wp.customize('cmsms_options_industrial_font_content[industrial_content_font_line_height]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_content_font_line_height').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_content_font_line_height"> ' + 
				'body, ' + 
				'li p {line-height:' + newval + 'px;} ' + 
			'</style>');
		} );
	} );
	
	// Content Font Options Font Weight
	wp.customize('cmsms_options_industrial_font_content[industrial_content_font_font_weight]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_content_font_font_weight').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_content_font_font_weight"> ' + 
				'body, ' + 
				'li p {font-weight:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// Content Font Options Font Style
	wp.customize('cmsms_options_industrial_font_content[industrial_content_font_font_style]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_content_font_font_style').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_content_font_font_style"> ' + 
				'body, ' + 
				'li p {font-style:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	
	
	// Link Font Options System Font
	wp.customize('cmsms_options_industrial_font_link[industrial_link_font_system_font]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_link_font_system_font').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_link_font_system_font"> ' + 
				'a {font-family:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// Link Font Options Google Font
	wp.customize('cmsms_options_industrial_font_link[industrial_link_font_google_font]', function (value) { 
		value.bind(function (newval) { 
			var newvalArray = newval.split(':'), 
				newvalResult = newvalArray[0].replace(/\+/g, ' ');
			
			
			$('html > head').append('<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=' + newval + '" type="text/css" />');
			
			
			$('html > head').find('style#industrial_link_font_google_font').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_link_font_google_font"> ' + 
				"a {font-family:'" + newvalResult + "';} " + 
			'</style>');
		} );
	} );
	
	// Link Font Options Font Color
	wp.customize('cmsms_options_industrial_font_link[industrial_link_font_font_color]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_link_font_font_color').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_link_font_font_color"> ' + 
				'a, ' + 
				'.person_subtitle, ' + 
				'.comment-body .published {color:' + newval + ';} ' + 
				'.responsive_nav {background-color:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// Link Font Options Font Hover Color
	wp.customize('cmsms_options_industrial_font_link[industrial_link_font_hover]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_link_font_hover').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_link_font_hover"> ' + 
				'a:hover, ' + 
				'.cmsms_tags a, ' + 
				'.user_name a, ' + 
				'.cmsms_category a, ' + 
				'.jta-tweet-timestamp-link {color:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// Link Font Options Font Size
	wp.customize('cmsms_options_industrial_font_link[industrial_link_font_font_size]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_link_font_font_size').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_link_font_font_size"> ' + 
				'a {font-size:' + newval + 'px;} ' + 
			'</style>');
		} );
	} );
	
	// Link Font Options Line Height
	wp.customize('cmsms_options_industrial_font_link[industrial_link_font_line_height]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_link_font_line_height').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_link_font_line_height"> ' + 
				'a {line-height:' + newval + 'px;} ' + 
			'</style>');
		} );
	} );
	
	// Link Font Options Font Weight
	wp.customize('cmsms_options_industrial_font_link[industrial_link_font_font_weight]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_link_font_font_weight').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_link_font_font_weight"> ' + 
				'a {font-weight:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// Link Font Options Font Style
	wp.customize('cmsms_options_industrial_font_link[industrial_link_font_font_style]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_link_font_font_style').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_link_font_font_style"> ' + 
				'a {font-style:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// Footer Font Options Font Color
	wp.customize('cmsms_options_industrial_font_link[industrial_footer_font_font_color]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_footer_font_font_color').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_footer_font_font_color"> ' + 
				'#bottom, ' + 
				'#bottom a, ' + 
				'#bottom h1, ' + 
				'#bottom h2, ' + 
				'#bottom h3, ' + 
				'#bottom h4, ' + 
				'#bottom h5, ' + 
				'#bottom h6, ' + 
				'#bottom small, ' + 
				'#footer, ' + 
				'#footer a {color:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// Footer Links Font Hover Color
	wp.customize('cmsms_options_industrial_font_link[industrial_footer_font_hover]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_footer_font_hover').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_footer_font_hover"> ' + 
				'#bottom a:hover, ' + 
				'#footer a:hover, ' + 
				'#footer h1 a:hover, ' + 
				'#footer h2 a:hover, ' + 
				'#footer h3 a:hover, ' + 
				'#footer h4 a:hover, ' + 
				'#footer h5 a:hover, ' + 
				'#footer h6 a:hover {color:' + newval + ';} ' + 
			'</style>');
		} );
	} );

	
	
	// Navigation Title Font Options System Font
	wp.customize('cmsms_options_industrial_font_nav[industrial_nav_title_font_system_font]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_nav_title_font_system_font').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_nav_title_font_system_font"> ' + 
				'#navigation > li > a, ' + 
				'#navigation > li {font-family:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// Navigation Title Font Options Google Font
	wp.customize('cmsms_options_industrial_font_nav[industrial_nav_title_font_google_font]', function (value) { 
		value.bind(function (newval) { 
			var newvalArray = newval.split(':'), 
				newvalResult = newvalArray[0].replace(/\+/g, ' ');
			
			
			$('html > head').append('<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=' + newval + '" type="text/css" />');
			
			
			$('html > head').find('style#industrial_nav_title_font_google_font').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_nav_title_font_google_font"> ' + 
				"#navigation > li > a {font-family:'" + newvalResult + "';} " + 
			'</style>');
		} );
	} );
	
	// Navigation Title Font Options Font Color
	wp.customize('cmsms_options_industrial_font_nav[industrial_nav_title_font_font_color]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_nav_title_font_font_color').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_nav_title_font_font_color"> ' + 
				'#navigation > li > a {color:' + newval + ';} ' + 
				'@media only screen and (max-width: 1024px) {' + 
					'#navigation ul li a, ' + 
					'#navigation li a {color:' + newval + ';}' + 
				'}' + 
			'</style>');
		} );
	} );
	
	// Navigation Title Font Options Font Hover Color
	wp.customize('cmsms_options_industrial_font_nav[industrial_nav_title_font_hover]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_nav_title_font_hover').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_nav_title_font_hover"> ' + 
				'#navigation > li.current_page_item > a, ' + 
				'#navigation > li.current-menu-ancestor > a, ' + 
				'#navigation > li:hover > a, ' + 
				'#navigation > li > a:hover {color:' + newval + ';} ' + 
				'@media only screen and (max-width: 1024px) {' + 
					'#navigation li.current_page_item > a, ' + 
					'#navigation li.current-menu-ancestor > a, ' + 
					'#navigation ul li.current_page_item > a, ' + 
					'#navigation ul li.current-menu-ancestor > a {color:' + newval + ';} ' + 
				'}' + 
			'</style>');
		} );
	} );
	
	// Navigation Title Font Options Font Size
	wp.customize('cmsms_options_industrial_font_nav[industrial_nav_title_font_font_size]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_nav_title_font_font_size').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_nav_title_font_font_size"> ' + 
				'#navigation > li > a {font-size:' + newval + 'px;} ' + 
			'</style>');
		} );
	} );
	
	// Navigation Title Font Options Line Height
	wp.customize('cmsms_options_industrial_font_nav[industrial_nav_title_font_line_height]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_nav_title_font_line_height').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_nav_title_font_line_height"> ' + 
				'#navigation > li > a {line-height:' + newval + 'px;} ' + 
			'</style>');
		} );
	} );
	
	// Navigation Title Font Options Font Weight
	wp.customize('cmsms_options_industrial_font_nav[industrial_nav_title_font_font_weight]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_nav_title_font_font_weight').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_nav_title_font_font_weight"> ' + 
				'#navigation > li > a {font-weight:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// Navigation Title Font Options Font Style
	wp.customize('cmsms_options_industrial_font_nav[industrial_nav_title_font_font_style]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_nav_title_font_font_style').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_nav_title_font_font_style"> ' + 
				'#navigation > li > a {font-style:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	
	
	// Navigation Dropdown Font Options System Font
	wp.customize('cmsms_options_industrial_font_nav[industrial_nav_dropdown_font_system_font]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_nav_dropdown_font_system_font').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_nav_dropdown_font_system_font"> ' + 
				'#navigation ul li a {font-family:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// Navigation Dropdown Font Options Google Font
	wp.customize('cmsms_options_industrial_font_nav[industrial_nav_dropdown_font_google_font]', function (value) { 
		value.bind(function (newval) { 
			var newvalArray = newval.split(':'), 
				newvalResult = newvalArray[0].replace(/\+/g, ' ');
			
			
			$('html > head').append('<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=' + newval + '" type="text/css" />');
			
			
			$('html > head').find('style#industrial_nav_dropdown_font_google_font').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_nav_dropdown_font_google_font"> ' + 
				"#navigation ul li a {font-family:'" + newvalResult + "';} " + 
			'</style>');
		} );
	} );
	
	// Navigation Dropdown Font Options Font Color
	wp.customize('cmsms_options_industrial_font_nav[industrial_nav_dropdown_font_font_color]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_nav_dropdown_font_font_color').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_nav_dropdown_font_font_color"> ' + 
				'#navigation ul li > a {color:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// Navigation Dropdown Font Options Font Hover Color
	wp.customize('cmsms_options_industrial_font_nav[industrial_nav_dropdown_font_hover]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_nav_dropdown_font_hover').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_nav_dropdown_font_hover"> ' + 
				'#navigation ul li.current_page_item > a, ' + 
				'#navigation ul li.current-menu-ancestor > a, ' + 
				'#navigation ul li:hover > a {color:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// Navigation Dropdown Font Options Font Size
	wp.customize('cmsms_options_industrial_font_nav[industrial_nav_dropdown_font_font_size]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_nav_dropdown_font_font_size').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_nav_dropdown_font_font_size"> ' + 
				'#navigation ul li a {font-size:' + newval + 'px;} ' + 
			'</style>');
		} );
	} );
	
	// Navigation Dropdown Font Options Line Height
	wp.customize('cmsms_options_industrial_font_nav[industrial_nav_dropdown_font_line_height]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_nav_dropdown_font_line_height').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_nav_dropdown_font_line_height"> ' + 
				'#navigation ul li a {line-height:' + newval + 'px;} ' + 
			'</style>');
		} );
	} );
	
	// Navigation Dropdown Font Options Font Weight
	wp.customize('cmsms_options_industrial_font_nav[industrial_nav_dropdown_font_font_weight]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_nav_dropdown_font_font_weight').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_nav_dropdown_font_font_weight"> ' + 
				'#navigation ul li a {font-weight:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// Navigation Dropdown Font Options Font Style
	wp.customize('cmsms_options_industrial_font_nav[industrial_nav_dropdown_font_font_style]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_nav_dropdown_font_font_style').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_nav_dropdown_font_font_style"> ' + 
				'#navigation ul li a {font-style:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	
	
	// H1 Heading Font Options System Font
	wp.customize('cmsms_options_industrial_font_h1[industrial_h1_font_system_font]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_h1_font_system_font').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h1_font_system_font"> ' + 
				'h1, ' + 
				'h1 a, ' + 
				'.logo .title, ' + 
				'.cmsmsLike, ' + 
				'.pj_sort a[name="pj_name"], ' + 
				'.pj_sort a[name="pj_date"], ' + 
				'a.pj_cat_filter, ' + 
				'.post .entry-header a, ' + 
				'.cmsms_tags a, ' + 
				'.cmsms_tags,  ' + 
				'.tabs li a, ' + 
				'.tour > li a, ' + 
				'.cmsms_price_outer span, ' + 
				'.cmsms_period, ' + 
				'.colored_button a, ' + 
				'.project_rollover .entry-meta a, ' + 
				'.tl_company, ' + 
				'.tweet_time a, ' + 
				'.cmsms_post_info, ' + 
				'.cmsms_post_info a, ' + 
				'.tab.lpr .tabs li a, ' + 
				'.blog.opened-article .post .entry-header, ' + 
				'.testimonial .entry-meta, ' + 
				'.testimonial .entry-meta a, ' + 
				'.person_subtitle, ' + 
				'.cmsms_latest_rollover .cmsms_category a, ' + 
				'.cmsms_latest_rollover .cmsms_category, ' + 
				'.cmsms_icon_title, ' + 
				'.cmsms_timeline_date, ' + 
				'.tog {font-family:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// H1 Heading Font Options Google Font
	wp.customize('cmsms_options_industrial_font_h1[industrial_h1_font_google_font]', function (value) { 
		value.bind(function (newval) { 
			var newvalArray = newval.split(':'), 
				newvalResult = newvalArray[0].replace(/\+/g, ' ');
			
			
			$('html > head').append('<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=' + newval + '" type="text/css" />');
			
			
			$('html > head').find('style#industrial_h1_font_google_font').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h1_font_google_font"> ' + 
				'h1, ' + 
				'h1 a, ' + 
				'.logo .title, ' + 
				'.cmsmsLike, ' + 
				'.pj_sort a[name="pj_name"], ' + 
				'.pj_sort a[name="pj_date"], ' + 
				'a.pj_cat_filter, ' + 
				'.post .entry-header a, ' + 
				'.cmsms_tags a, ' + 
				'.cmsms_tags,  ' + 
				'.tabs li a, ' + 
				'.tour > li a, ' + 
				'.cmsms_price_outer span, ' + 
				'.cmsms_period, ' + 
				'.colored_button a, ' + 
				'.project_rollover .entry-meta a, ' + 
				'.tl_company, ' + 
				'.tweet_time a, ' + 
				'.cmsms_post_info, ' + 
				'.cmsms_post_info a, ' + 
				'.tab.lpr .tabs li a, ' + 
				'.blog.opened-article .post .entry-header, ' + 
				'.testimonial .entry-meta, ' + 
				'.testimonial .entry-meta a, ' + 
				'.person_subtitle, ' + 
				'.cmsms_latest_rollover .cmsms_category a, ' + 
				'.cmsms_latest_rollover .cmsms_category, ' + 
				'.cmsms_icon_title, ' + 
				'.cmsms_timeline_date, ' + 
				'.tog {font-family:' + newvalResult + ';} ' + 
			'</style>');
		} );
	} );
	
	// H1 Heading Font Options Font Color
	wp.customize('cmsms_options_industrial_font_h1[industrial_h1_font_font_color]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_h1_font_font_color').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h1_font_font_color"> ' + 
				'h1, ' + 
				'.logo, ' + 
				'h1 a:hover, ' + 
				'h2 a:hover, ' + 
				'h3 a:hover, ' + 
				'h4 a:hover, ' + 
				'h5 a:hover, ' + 
				'h6 a:hover {color:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// H1 Heading Font Options Font Size
	wp.customize('cmsms_options_industrial_font_h1[industrial_h1_font_font_size]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_h1_font_font_size').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h1_font_font_size"> ' + 
				'h1, ' + 
				'h1 a, ' + 
				'.logo .title {font-size:' + newval + 'px;} ' + 
			'</style>');
		} );
	} );
	
	// H1 Heading Font Options Line Height
	wp.customize('cmsms_options_industrial_font_h1[industrial_h1_font_line_height]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_h1_font_line_height').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h1_font_line_height"> ' + 
				'h1, ' + 
				'h1 a, ' + 
				'.logo .title {line-height:' + newval + 'px;} ' + 
			'</style>');
		} );
	} );
	
	// H1 Heading Font Options Font Weight
	wp.customize('cmsms_options_industrial_font_h1[industrial_h1_font_font_weight]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_h1_font_font_weight').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h1_font_font_weight"> ' + 
				'h1, ' + 
				'h1 a, ' + 
				'.logo .title {font-weight:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// H1 Heading Font Options Font Style
	wp.customize('cmsms_options_industrial_font_h1[industrial_h1_font_font_style]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_h1_font_font_style').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h1_font_font_style"> ' + 
				'h1, ' + 
				'h1 a, ' + 
				'.logo .title {font-style:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	
	
	// H2 Heading Font Options System Font
	wp.customize('cmsms_options_industrial_font_h2[industrial_h2_font_system_font]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_h2_font_system_font').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h2_font_system_font"> ' + 
				'h2, ' + 
				'h2 a {font-family:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// H2 Heading Font Options Google Font
	wp.customize('cmsms_options_industrial_font_h2[industrial_h2_font_google_font]', function (value) { 
		value.bind(function (newval) { 
			var newvalArray = newval.split(':'), 
				newvalResult = newvalArray[0].replace(/\+/g, ' ');
			
			
			$('html > head').append('<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=' + newval + '" type="text/css" />');
			
			
			$('html > head').find('style#industrial_h2_font_google_font').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h2_font_google_font"> ' + 
				'h2, ' + 
				'h2 a {font-family:' + newvalResult + ';} ' + 
			'</style>');
		} );
	} );
	
	// H2 Heading Font Options Font Color
	wp.customize('cmsms_options_industrial_font_h2[industrial_h2_font_font_color]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_h2_font_font_color').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h2_font_font_color"> ' + 
				'h2 {color:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// H2 Heading Font Options Font Size
	wp.customize('cmsms_options_industrial_font_h2[industrial_h2_font_font_size]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_h2_font_font_size').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h2_font_font_size"> ' + 
				'h2, ' + 
				'h2 a {font-size:' + newval + 'px;} ' + 
			'</style>');
		} );
	} );
	
	// H2 Heading Font Options Line Height
	wp.customize('cmsms_options_industrial_font_h2[industrial_h2_font_line_height]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_h2_font_line_height').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h2_font_line_height"> ' + 
				'h2, ' + 
				'h2 a {line-height:' + newval + 'px;} ' + 
			'</style>');
		} );
	} );
	
	// H2 Heading Font Options Font Weight
	wp.customize('cmsms_options_industrial_font_h2[industrial_h2_font_font_weight]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_h2_font_font_weight').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h2_font_font_weight"> ' + 
				'h2, ' + 
				'h2 a {font-weight:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// H2 Heading Font Options Font Style
	wp.customize('cmsms_options_industrial_font_h2[industrial_h2_font_font_style]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_h2_font_font_style').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h2_font_font_style"> ' + 
				'h2, ' + 
				'h2 a {font-style:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	
	
	// H3 Heading Font Options System Font
	wp.customize('cmsms_options_industrial_font_h3[industrial_h3_font_system_font]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_h3_font_system_font').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h3_font_system_font"> ' + 
				'h3, ' + 
				'h3 a {font-family:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// H3 Heading Font Options Google Font
	wp.customize('cmsms_options_industrial_font_h3[industrial_h3_font_google_font]', function (value) { 
		value.bind(function (newval) { 
			var newvalArray = newval.split(':'), 
				newvalResult = newvalArray[0].replace(/\+/g, ' ');
			
			
			$('html > head').append('<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=' + newval + '" type="text/css" />');
			
			
			$('html > head').find('style#industrial_h3_font_google_font').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h3_font_google_font"> ' + 
				'h3, ' + 
				'h3 a {font-family:' + newvalResult + ';} ' + 
			'</style>');
		} );
	} );
	
	// H3 Heading Font Options Font Color
	wp.customize('cmsms_options_industrial_font_h3[industrial_h3_font_font_color]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_h3_font_font_color').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h3_font_font_color"> ' + 
				'h3 {color:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// H3 Heading Font Options Font Size
	wp.customize('cmsms_options_industrial_font_h3[industrial_h3_font_font_size]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_h3_font_font_size').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h3_font_font_size"> ' + 
				'h3, ' + 
				'h3 a {font-size:' + newval + 'px;} ' + 
			'</style>');
		} );
	} );
	
	// H3 Heading Font Options Line Height
	wp.customize('cmsms_options_industrial_font_h3[industrial_h3_font_line_height]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_h3_font_line_height').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h3_font_line_height"> ' + 
				'h3, ' + 
				'h3 a {line-height:' + newval + 'px;} ' + 
			'</style>');
		} );
	} );
	
	// H3 Heading Font Options Font Weight
	wp.customize('cmsms_options_industrial_font_h3[industrial_h3_font_font_weight]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_h3_font_font_weight').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h3_font_font_weight"> ' + 
				'h3, ' + 
				'h3 a {font-weight:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// H3 Heading Font Options Font Style
	wp.customize('cmsms_options_industrial_font_h3[industrial_h3_font_font_style]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_h3_font_font_style').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h3_font_font_style"> ' + 
				'h3, ' + 
				'h3 a {font-style:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	
	
	// H4 Heading Font Options System Font
	wp.customize('cmsms_options_industrial_font_h4[industrial_h4_font_system_font]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_h4_font_system_font').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h4_font_system_font"> ' + 
				'h4, ' + 
				'h4 a, ' + 
				'.cmsms_sitemap > li > a {font-family:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// H4 Heading Font Options Google Font
	wp.customize('cmsms_options_industrial_font_h4[industrial_h4_font_google_font]', function (value) { 
		value.bind(function (newval) { 
			var newvalArray = newval.split(':'), 
				newvalResult = newvalArray[0].replace(/\+/g, ' ');
			
			
			$('html > head').append('<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=' + newval + '" type="text/css" />');
			
			
			$('html > head').find('style#industrial_h4_font_google_font').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h4_font_google_font"> ' + 
				'h4, ' + 
				'h4 a, ' + 
				'.cmsms_sitemap > li > a {font-family:' + newvalResult + ';} ' + 
			'</style>');
		} );
	} );
	
	// H4 Heading Font Options Font Color
	wp.customize('cmsms_options_industrial_font_h4[industrial_h4_font_font_color]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_h4_font_font_color').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h4_font_font_color"> ' + 
				'h4 {color:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// H4 Heading Font Options Font Size
	wp.customize('cmsms_options_industrial_font_h4[industrial_h4_font_font_size]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_h4_font_font_size').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h4_font_font_size"> ' + 
				'h4, ' + 
				'h4 a, ' + 
				'.cmsms_sitemap > li > a {font-size:' + newval + 'px;} ' + 
			'</style>');
		} );
	} );
	
	// H4 Heading Font Options Line Height
	wp.customize('cmsms_options_industrial_font_h4[industrial_h4_font_line_height]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_h4_font_line_height').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h4_font_line_height"> ' + 
				'h4, ' + 
				'h4 a, ' + 
				'.cmsms_sitemap > li > a {line-height:' + newval + 'px;} ' + 
			'</style>');
		} );
	} );
	
	// H4 Heading Font Options Font Weight
	wp.customize('cmsms_options_industrial_font_h4[industrial_h4_font_font_weight]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_h4_font_font_weight').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h4_font_font_weight"> ' + 
				'h4, ' + 
				'h4 a, ' + 
				'.cmsms_sitemap > li > a {font-weight:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// H4 Heading Font Options Font Style
	wp.customize('cmsms_options_industrial_font_h4[industrial_h4_font_font_style]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_h4_font_font_style').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h4_font_font_style"> ' + 
				'h4, ' + 
				'h4 a, ' + 
				'.cmsms_sitemap > li > a {font-style:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	
	
	// H5 Heading Font Options System Font
	wp.customize('cmsms_options_industrial_font_h5[industrial_h5_font_system_font]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_h5_font_system_font').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h5_font_system_font"> ' + 
				'h5, ' + 
				'h5 a {font-family:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// H5 Heading Font Options Google Font
	wp.customize('cmsms_options_industrial_font_h5[industrial_h5_font_google_font]', function (value) { 
		value.bind(function (newval) { 
			var newvalArray = newval.split(':'), 
				newvalResult = newvalArray[0].replace(/\+/g, ' ');
			
			
			$('html > head').append('<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=' + newval + '" type="text/css" />');
			
			
			$('html > head').find('style#industrial_h5_font_google_font').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h5_font_google_font"> ' + 
				'h5, ' + 
				'h5 a {font-family:' + newvalResult + ';} ' + 
			'</style>');
		} );
	} );
	
	// H5 Heading Font Options Font Color
	wp.customize('cmsms_options_industrial_font_h5[industrial_h5_font_font_color]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_h5_font_font_color').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h5_font_font_color"> ' + 
				'h5 {color:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// H5 Heading Font Options Font Size
	wp.customize('cmsms_options_industrial_font_h5[industrial_h5_font_font_size]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_h5_font_font_size').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h5_font_font_size"> ' + 
				'h5, ' + 
				'h5 a {font-size:' + newval + 'px;} ' + 
			'</style>');
		} );
	} );
	
	// H5 Heading Font Options Line Height
	wp.customize('cmsms_options_industrial_font_h5[industrial_h5_font_line_height]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_h5_font_line_height').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h5_font_line_height"> ' + 
				'h5, ' + 
				'h5 a {line-height:' + newval + 'px;} ' + 
			'</style>');
		} );
	} );
	
	// H5 Heading Font Options Font Weight
	wp.customize('cmsms_options_industrial_font_h5[industrial_h5_font_font_weight]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_h5_font_font_weight').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h5_font_font_weight"> ' + 
				'h5, ' + 
				'h5 a {font-weight:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// H5 Heading Font Options Font Style
	wp.customize('cmsms_options_industrial_font_h5[industrial_h5_font_font_style]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_h5_font_font_style').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h5_font_font_style"> ' + 
				'h5, ' + 
				'h5 a {font-style:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	
	
	// H6 Heading Font Options System Font
	wp.customize('cmsms_options_industrial_font_h6[industrial_h6_font_system_font]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_h6_font_system_font').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h6_font_system_font"> ' + 
				'h6, ' + 
				'h6 a, ' + 
				'.table tr th, ' + 
				'.cmsms_date_title, ' + 
				'.percent_item_colored_wrap .percent_item_text, ' + 
				'.cmsms_info .cmsms_comments_wrap {font-family:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// H6 Heading Font Options Google Font
	wp.customize('cmsms_options_industrial_font_h6[industrial_h6_font_google_font]', function (value) { 
		value.bind(function (newval) { 
			var newvalArray = newval.split(':'), 
				newvalResult = newvalArray[0].replace(/\+/g, ' ');
			
			
			$('html > head').append('<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=' + newval + '" type="text/css" />');
			
			
			$('html > head').find('style#industrial_h6_font_google_font').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h6_font_google_font"> ' + 
				'h6, ' + 
				'h6 a, ' + 
				'.table tr th, ' + 
				'.cmsms_date_title, ' + 
				'.percent_item_colored_wrap .percent_item_text, ' + 
				'.cmsms_info .cmsms_comments_wrap {font-family:' + newvalResult + ';} ' + 
			'</style>');
		} );
	} );
	
	// H6 Heading Font Options Font Color
	wp.customize('cmsms_options_industrial_font_h6[industrial_h6_font_font_color]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_h6_font_font_color').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h6_font_font_color"> ' + 
				'h6 {color:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// H6 Heading Font Options Font Size
	wp.customize('cmsms_options_industrial_font_h6[industrial_h6_font_font_size]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_h6_font_font_size').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h6_font_font_size"> ' + 
				'h6, ' + 
				'h6 a, ' + 
				'.table tr th, ' + 
				'.cmsms_date_title, ' + 
				'.percent_item_colored_wrap .percent_item_text, ' + 
				'.cmsms_info .cmsms_comments_wrap {font-size:' + newval + 'px;} ' + 
			'</style>');
		} );
	} );
	
	// H6 Heading Font Options Line Height
	wp.customize('cmsms_options_industrial_font_h6[industrial_h6_font_line_height]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_h6_font_line_height').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h6_font_line_height"> ' + 
				'h6, ' + 
				'h6 a, ' + 
				'.table tr th, ' + 
				'.cmsms_date_title, ' + 
				'.percent_item_colored_wrap .percent_item_text, ' + 
				'.cmsms_info .cmsms_comments_wrap {line-height:' + newval + 'px;} ' + 
			'</style>');
		} );
	} );
	
	// H6 Heading Font Options Font Weight
	wp.customize('cmsms_options_industrial_font_h6[industrial_h6_font_font_weight]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_h6_font_font_weight').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h6_font_font_weight"> ' + 
				'h6, ' + 
				'h6 a, ' + 
				'.table tr th, ' + 
				'.cmsms_date_title, ' + 
				'.percent_item_colored_wrap .percent_item_text, ' + 
				'.cmsms_info .cmsms_comments_wrap {font-weight:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// H6 Heading Font Options Font Style
	wp.customize('cmsms_options_industrial_font_h6[industrial_h6_font_font_style]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_h6_font_font_style').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_h6_font_font_style"> ' + 
				'h6, ' + 
				'h6 a, ' + 
				'.table tr th, ' + 
				'.cmsms_date_title, ' + 
				'.percent_item_colored_wrap .percent_item_text, ' + 
				'.cmsms_info .cmsms_comments_wrap {font-style:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	
	
	// Blockquote Font Options System Font
	wp.customize('cmsms_options_industrial_font_other[industrial_quote_font_system_font]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_quote_font_system_font').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_quote_font_system_font"> ' + 
				'blockquote, ' + 
				'q {font-family:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// Blockquote Font Options Google Font
	wp.customize('cmsms_options_industrial_font_other[industrial_quote_font_google_font]', function (value) { 
		value.bind(function (newval) { 
			var newvalArray = newval.split(':'), 
				newvalResult = newvalArray[0].replace(/\+/g, ' ');
			
			
			$('html > head').append('<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=' + newval + '" type="text/css" />');
			
			
			$('html > head').find('style#industrial_quote_font_google_font').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_quote_font_google_font"> ' + 
				'blockquote, ' + 
				'q {font-family:' + newvalResult + ';} ' + 
			'</style>');
		} );
	} );
	
	// Blockquote Font Options Font Color
	wp.customize('cmsms_options_industrial_font_other[industrial_quote_font_font_color]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_quote_font_font_color').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_quote_font_font_color"> ' + 
				'.color_2, ' + 
				'blockquote, ' + 
				'q {color:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// Blockquote Font Options Font Size
	wp.customize('cmsms_options_industrial_font_other[industrial_quote_font_font_size]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_quote_font_font_size').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_quote_font_font_size"> ' + 
				'blockquote, ' + 
				'q {font-size:' + newval + 'px;} ' + 
			'</style>');
		} );
	} );
	
	// Blockquote Font Options Line Height
	wp.customize('cmsms_options_industrial_font_other[industrial_quote_font_line_height]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_quote_font_line_height').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_quote_font_line_height"> ' + 
				'blockquote, ' + 
				'q {line-height:' + newval + 'px;} ' + 
			'</style>');
		} );
	} );
	
	// Blockquote Font Options Font Weight
	wp.customize('cmsms_options_industrial_font_other[industrial_quote_font_font_weight]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_quote_font_font_weight').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_quote_font_font_weight"> ' + 
				'blockquote, ' + 
				'q {font-weight:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// Blockquote Font Options Font Style
	wp.customize('cmsms_options_industrial_font_other[industrial_quote_font_font_style]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_quote_font_font_style').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_quote_font_font_style"> ' + 
				'blockquote, ' + 
				'q {font-style:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	
	
	// Dropcap Font Options System Font
	wp.customize('cmsms_options_industrial_font_other[industrial_dropcap_font_system_font]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_dropcap_font_system_font').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_dropcap_font_system_font"> ' + 
				'span.dropcap {font-family:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// Dropcap Font Options Google Font
	wp.customize('cmsms_options_industrial_font_other[industrial_dropcap_font_google_font]', function (value) { 
		value.bind(function (newval) { 
			var newvalArray = newval.split(':'), 
				newvalResult = newvalArray[0].replace(/\+/g, ' ');
			
			
			$('html > head').append('<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=' + newval + '" type="text/css" />');
			
			
			$('html > head').find('style#industrial_dropcap_font_google_font').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_dropcap_font_google_font"> ' + 
				'span.dropcap {font-family:' + newvalResult + ';} ' + 
			'</style>');
		} );
	} );
	
	// Dropcap Font Options Font Color
	wp.customize('cmsms_options_industrial_font_other[industrial_dropcap_font_font_color]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_dropcap_font_font_color').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_dropcap_font_font_color"> ' + 
				'span.dropcap {color:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// Dropcap Font Options Font Size
	wp.customize('cmsms_options_industrial_font_other[industrial_dropcap_font_font_size]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_dropcap_font_font_size').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_dropcap_font_font_size"> ' + 
				'span.dropcap {font-size:' + newval + 'px;} ' + 
			'</style>');
		} );
	} );
	
	// Dropcap Font Options Line Height
	wp.customize('cmsms_options_industrial_font_other[industrial_dropcap_font_line_height]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_dropcap_font_line_height').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_dropcap_font_line_height"> ' + 
				'span.dropcap {line-height:' + newval + 'px;} ' + 
			'</style>');
		} );
	} );
	
	// Dropcap Font Options Font Weight
	wp.customize('cmsms_options_industrial_font_other[industrial_dropcap_font_font_weight]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_dropcap_font_font_weight').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_dropcap_font_font_weight"> ' + 
				'span.dropcap {font-weight:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// Dropcap Font Options Font Style
	wp.customize('cmsms_options_industrial_font_other[industrial_dropcap_font_font_style]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_dropcap_font_font_style').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_dropcap_font_font_style"> ' + 
				'span.dropcap {font-style:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	
	
	// Code Tag Font Options System Font
	wp.customize('cmsms_options_industrial_font_other[industrial_code_font_system_font]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_code_font_system_font').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_code_font_system_font"> ' + 
				'code {font-family:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// Code Tag Font Options Google Font
	wp.customize('cmsms_options_industrial_font_other[industrial_code_font_google_font]', function (value) { 
		value.bind(function (newval) { 
			var newvalArray = newval.split(':'), 
				newvalResult = newvalArray[0].replace(/\+/g, ' ');
			
			
			$('html > head').append('<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=' + newval + '" type="text/css" />');
			
			
			$('html > head').find('style#industrial_code_font_google_font').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_code_font_google_font"> ' + 
				'code {font-family:' + newvalResult + ';} ' + 
			'</style>');
		} );
	} );
	
	// Code Tag Font Options Font Color
	wp.customize('cmsms_options_industrial_font_other[industrial_code_font_font_color]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_code_font_font_color').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_code_font_font_color"> ' + 
				'code {color:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// Code Tag Font Options Font Size
	wp.customize('cmsms_options_industrial_font_other[industrial_code_font_font_size]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_code_font_font_size').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_code_font_font_size"> ' + 
				'code {font-size:' + newval + 'px;} ' + 
			'</style>');
		} );
	} );
	
	// Code Tag Font Options Line Height
	wp.customize('cmsms_options_industrial_font_other[industrial_code_font_line_height]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_code_font_line_height').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_code_font_line_height"> ' + 
				'code {line-height:' + newval + 'px;} ' + 
			'</style>');
		} );
	} );
	
	// Code Tag Font Options Font Weight
	wp.customize('cmsms_options_industrial_font_other[industrial_code_font_font_weight]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_code_font_font_weight').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_code_font_font_weight"> ' + 
				'code {font-weight:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// Code Tag Font Options Font Style
	wp.customize('cmsms_options_industrial_font_other[industrial_code_font_font_style]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_code_font_font_style').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_code_font_font_style"> ' + 
				'code {font-style:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	
	
	// Small Tag Font Options System Font
	wp.customize('cmsms_options_industrial_font_other[industrial_small_font_system_font]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_small_font_system_font').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_small_font_system_font"> ' + 
				'small, ' + 
				'small a, ' + 
				'.cmsms_breadcrumbs, ' + 
				'.cmsms_breadcrumbs a {font-family:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// Small Tag Font Options Google Font
	wp.customize('cmsms_options_industrial_font_other[industrial_small_font_google_font]', function (value) { 
		value.bind(function (newval) { 
			var newvalArray = newval.split(':'), 
				newvalResult = newvalArray[0].replace(/\+/g, ' ');
			
			
			$('html > head').append('<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=' + newval + '" type="text/css" />');
			
			
			$('html > head').find('style#industrial_small_font_google_font').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_small_font_google_font"> ' + 
				'small, ' + 
				'small a, ' + 
				'.cmsms_breadcrumbs, ' + 
				'.cmsms_breadcrumbs a {font-family:' + newvalResult + ';} ' + 
			'</style>');
		} );
	} );
	
	// Small Tag Font Options Font Color
	wp.customize('cmsms_options_industrial_font_other[industrial_small_font_font_color]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_small_font_font_color').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_small_font_font_color"> ' + 
				'small {color:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// Small Tag Font Options Font Size
	wp.customize('cmsms_options_industrial_font_other[industrial_small_font_font_size]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_small_font_font_size').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_small_font_font_size"> ' + 
				'small, ' + 
				'small a, ' + 
				'.cmsms_breadcrumbs, ' + 
				'.cmsms_breadcrumbs a {font-size:' + newval + 'px;} ' + 
			'</style>');
		} );
	} );
	
	// Small Tag Font Options Line Height
	wp.customize('cmsms_options_industrial_font_other[industrial_small_font_line_height]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_small_font_line_height').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_small_font_line_height"> ' + 
				'small, ' + 
				'small a, ' + 
				'.cmsms_breadcrumbs, ' + 
				'.cmsms_breadcrumbs a {line-height:' + newval + 'px;} ' + 
			'</style>');
		} );
	} );
	
	// Small Tag Font Options Font Weight
	wp.customize('cmsms_options_industrial_font_other[industrial_small_font_font_weight]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_small_font_font_weight').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_small_font_font_weight"> ' + 
				'small, ' + 
				'small a, ' + 
				'.cmsms_breadcrumbs, ' + 
				'.cmsms_breadcrumbs a {font-weight:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// Small Tag Font Options Font Style
	wp.customize('cmsms_options_industrial_font_other[industrial_small_font_font_style]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_small_font_font_style').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_small_font_font_style"> ' + 
				'small, ' + 
				'small a, ' + 
				'.cmsms_breadcrumbs, ' + 
				'.cmsms_breadcrumbs a {font-style:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	
	
	// Text Fields Font Options System Font
	wp.customize('cmsms_options_industrial_font_other[industrial_input_font_system_font]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_input_font_system_font').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_input_font_system_font"> ' + 
				'input, ' + 
				'textarea, ' + 
				'select {font-family:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// Text Fields Font Options Google Font
	wp.customize('cmsms_options_industrial_font_other[industrial_input_font_google_font]', function (value) { 
		value.bind(function (newval) { 
			var newvalArray = newval.split(':'), 
				newvalResult = newvalArray[0].replace(/\+/g, ' ');
			
			
			$('html > head').append('<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=' + newval + '" type="text/css" />');
			
			
			$('html > head').find('style#industrial_input_font_google_font').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_input_font_google_font"> ' + 
				'input, ' + 
				'textarea, ' + 
				'select {font-family:' + newvalResult + ';} ' + 
			'</style>');
		} );
	} );
	
	// Text Fields Font Options Font Color
	wp.customize('cmsms_options_industrial_font_other[industrial_input_font_font_color]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_input_font_font_color').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_input_font_font_color"> ' + 
				'input, ' + 
				'textarea, ' + 
				'select, ' + 
				'select option {color:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// Text Fields Font Options Font Size
	wp.customize('cmsms_options_industrial_font_other[industrial_input_font_font_size]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_input_font_font_size').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_input_font_font_size"> ' + 
				'input, ' + 
				'textarea, ' + 
				'select {font-size:' + newval + 'px;} ' + 
			'</style>');
		} );
	} );
	
	// Text Fields Font Options Line Height
	wp.customize('cmsms_options_industrial_font_other[industrial_input_font_line_height]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_input_font_line_height').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_input_font_line_height"> ' + 
				'input, ' + 
				'textarea, ' + 
				'select {line-height:' + newval + 'px;} ' + 
			'</style>');
		} );
	} );
	
	// Text Fields Font Options Font Weight
	wp.customize('cmsms_options_industrial_font_other[industrial_input_font_font_weight]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_input_font_font_weight').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_input_font_font_weight"> ' + 
				'input, ' + 
				'textarea, ' + 
				'select {font-weight:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// Text Fields Font Options Font Style
	wp.customize('cmsms_options_industrial_font_other[industrial_input_font_font_style]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_input_font_font_style').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_input_font_font_style"> ' + 
				'input, ' + 
				'textarea, ' + 
				'select {font-style:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	
	
	// Footer Font Options System Font
	wp.customize('cmsms_options_industrial_font_other[industrial_footer_font_system_font]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_footer_font_system_font').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_footer_font_system_font"> ' + 
				'#footer, ' + 
				'#footer a {font-family:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// Footer Font Options Google Font
	wp.customize('cmsms_options_industrial_font_other[industrial_footer_font_google_font]', function (value) { 
		value.bind(function (newval) { 
			var newvalArray = newval.split(':'), 
				newvalResult = newvalArray[0].replace(/\+/g, ' ');
			
			
			$('html > head').append('<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=' + newval + '" type="text/css" />');
			
			
			$('html > head').find('style#industrial_footer_font_google_font').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_footer_font_google_font"> ' + 
				'#footer, ' + 
				'#footer a {font-family:' + newvalResult + ';} ' + 
			'</style>');
		} );
	} );
	
	// Footer Font Options Font Size
	wp.customize('cmsms_options_industrial_font_other[industrial_footer_font_font_size]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_footer_font_font_size').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_footer_font_font_size"> ' + 
				'#footer, ' + 
				'#footer a {font-size:' + newval + 'px;} ' + 
			'</style>');
		} );
	} );
	
	// Footer Font Options Line Height
	wp.customize('cmsms_options_industrial_font_other[industrial_footer_font_line_height]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_footer_font_line_height').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_footer_font_line_height"> ' + 
				'#footer, ' + 
				'#footer a {line-height:' + newval + 'px;} ' + 
			'</style>');
		} );
	} );
	
	// Footer Font Options Font Weight
	wp.customize('cmsms_options_industrial_font_other[industrial_footer_font_font_weight]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_footer_font_font_weight').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_footer_font_font_weight"> ' + 
				'#footer, ' + 
				'#footer a {font-weight:' + newval + ';} ' + 
			'</style>');
		} );
	} );
	
	// Footer Font Options Font Style
	wp.customize('cmsms_options_industrial_font_other[industrial_footer_font_font_style]', function (value) { 
		value.bind(function (newval) { 
			$('html > head').find('style#industrial_footer_font_font_style').remove();
			
			
			$('html > head').append('<style type="text/css" id="industrial_footer_font_font_style"> ' + 
				'#footer, ' + 
				'#footer a {font-style:' + newval + ';} ' + 
			'</style>');
		} );
	} );
} ) (jQuery);

