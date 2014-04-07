<?php
/**
 * @package WordPress
 * @subpackage Industrial
 * @since Industrial 1.0
 * 
 * Template Name: Portfolio Timeline
 * Created by CMSMasters
 * 
 */


$cmsms_option = cmsms_get_global_options();


get_header();

$cmsms_heading = get_post_meta(get_the_ID(), 'cmsms_heading', true);

$cmsms_layout = get_post_meta(get_the_ID(), 'cmsms_layout', true);

if (!$cmsms_layout) { 
    $cmsms_layout = 'fullwidth';
}


echo '<!--_________________________ Start Content _________________________ -->' . "\n";

if ($cmsms_layout == 'r_sidebar') {
	echo '<section id="content" role="main">' . "\n";
} elseif ($cmsms_layout == 'l_sidebar') {
	echo '<section id="content" class="fr" role="main">' . "\n";
} else {
	echo '<section id="middle_content" role="main">' . "\n";
}

echo '<div class="entry">' . "\n";

if (have_posts()) : the_post();
	if (has_post_thumbnail()) {
		
		if (has_post_thumbnail() && $cmsms_heading != 'parallax') {
			if ($cmsms_layout == 'r_sidebar' || $cmsms_layout == 'l_sidebar') {
				echo '<div class="cmsms_media">' . "\n\t";
				
				cmsms_thumb(get_the_ID(), 'post-thumbnail', false, 'img_' . get_the_ID(), true, false, true, true, false);
				
				echo "\r" . '</div>';
			} else {
				echo '<div class="cmsms_media">' . "\n\t";
				
				cmsms_thumb(get_the_ID(), 'full-thumb', false, 'img_' . get_the_ID(), true, false, true, true, false);
				
				echo "\r" . '</div>';
			}
		}
		
		echo '<div class="entry-content">' . "\n";
		
		the_content();
		
		wp_link_pages(array( 
			'before' => '<div class="subpage_nav" role="navigation">' . '<strong>' . __('Pages', 'cmsmasters') . ':</strong>', 
			'after' => '</div>' . "\n", 
			'link_before' => ' [ ', 
			'link_after' => ' ] ' 
		));
		
		cmsms_content_composer(get_the_ID());
			
		echo '</div>' . "\n" . 
		'<div class="divider"></div>' . "\n";
	}
endif;

echo '</div>' . "\n";

$timeline_query = new WP_Query(array( 
	'post_type' => 'project', 
	'orderby' => 'date', 
	'order' => 'DESC', 
	'posts_per_page' => -1 
));


$timeline_array = array();


if ($timeline_query->have_posts()) :
	while ($timeline_query->have_posts()) : $timeline_query->the_post();
		if (!array_key_exists(get_the_date('Y'), $timeline_array)) {
			$timeline_array[get_the_date('Y')] = array( 
				array( 
					get_permalink(get_the_ID()), 
					cmsms_title(get_the_ID(), false), 
					theme_excerpt(55, false),
					get_the_date('F j, Y'),
					get_the_post_thumbnail(get_the_ID(), 'thumbnail', array( 
						'alt' => cmsms_title(get_the_ID(), false), 
						'title' => cmsms_title(get_the_ID(), false), 
						'style' => 'width:100px; height:100px;' 
					))
				) 
			);
		} else {
			$timeline_array[get_the_date('Y')][] = array( 
				get_permalink(get_the_ID()), 
				cmsms_title(get_the_ID(), false), 
				theme_excerpt(55, false),
				get_the_date('F j, Y'),
				get_the_post_thumbnail(get_the_ID(), 'thumbnail', array( 
					'alt' => cmsms_title(get_the_ID(), false), 
					'title' => cmsms_title(get_the_ID(), false), 
					'style' => 'width:100px; height:100px;' 
				))
			);
		}
	endwhile;
endif;


wp_reset_query();


foreach ($timeline_array as $key => $values) {
	echo '<div class="wrap_cmsms_timeline">' . "\n" . 
	'<h6 class="cmsms_timeline_title">' . $key . '</h6>' . "\n";
	
	foreach ($values as $value) {
		echo '<div class="cmsms_timeline">' . 
			'<article>' . 
				'<header class="entry-header cmsms_timeline_header">' . 
					'<abbr class="published cmsms_timeline_date">' . $value[3] . '</abbr>' .
					'<h5 class="entry-title">' . 
						'<a href="' . $value[0] . '">' . $value[1] . '</a>' .
					'</h5>' . 
					'<div class="cl"></div>' . 
				'</header>' . 
				'<div class="cmsms_timeline_content">' . 
					'<div class="entry-content">' . $value[2] . '</div>' . 
				'</div>' . 
			'</article>' . 
		'</div>' . "\n";
	}
	
	echo '</div>';
}


echo '</section>' . "\n" . 
'<!-- _________________________ Finish Content _________________________ -->' . "\n\n";


if ($cmsms_layout == 'r_sidebar') {
	echo "\n" . '<!-- _________________________ Start Sidebar _________________________ -->' . "\n" . 
	'<section id="sidebar" role="complementary">' . "\n";
	
	get_sidebar();
	
	echo "\n" . '</section>' . "\n" . 
	'<!-- _________________________ Finish Sidebar _________________________ -->' . "\n";
} elseif ($cmsms_layout == 'l_sidebar') {
	echo "\n" . '<!-- _________________________ Start Sidebar _________________________ -->' . "\n" . 
	'<section id="sidebar" class="fl" role="complementary">' . "\n";
	
	get_sidebar();
	
	echo "\n" . '</section>' . "\n" . 
	'<!-- _________________________ Finish Sidebar _________________________ -->' . "\n";
}


get_footer();

