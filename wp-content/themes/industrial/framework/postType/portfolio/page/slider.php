<?php
/**
 * @package WordPress
 * @subpackage Industrial
 * @since Industrial 1.0
 * 
 * Portfolio Page Full Width Slider Project Format Template
 * Created by CMSMasters
 * 
 */


global $cmsms_page_full_columns;


if (!$cmsms_page_full_columns) {
    $cmsms_page_full_columns = 'four_columns';
}

if ($cmsms_page_full_columns == 'four_columns' || $cmsms_page_full_columns == 'three_columns') {
    $pj_img_size = 'project-thumb';
}


$cmsms_project_featured_image_show = get_post_meta(get_the_ID(), 'cmsms_project_featured_image_show', true);
 
$cmsms_project_images = explode(',', str_replace(' ', '', str_replace('img_', '', get_post_meta(get_the_ID(), 'cmsms_project_images', true))));

$pj_sort_categs = get_the_terms(0, 'pj-sort-categs');

if ($pj_sort_categs != '') {
	$pj_categs = '';
	
	foreach ($pj_sort_categs as $pj_sort_categ) {
		$pj_categs .= ' ' . $pj_sort_categ->slug;
	}
	
	$pj_categs = ltrim($pj_categs, ' ');
} 

?>

<!--_________________________ Start Slider Project _________________________ -->
<article id="post-<?php the_ID(); ?>" <?php post_class('format-slider'); ?> data-category="<?php echo $pj_categs; ?>">
<?php 
	if (has_post_thumbnail() && $cmsms_project_featured_image_show == 'true') {
		echo '<div class="media_box">' . 
			cmsms_thumb(get_the_ID(), $pj_img_size, true, false, true, false, true, false, false) . 
		'</div>' . 
		'<div class="project_rollover">' . 
			'<div class="project_rollover_inner">';
				cmsms_heading(get_the_ID(), 'project', true, 'h5');
				
				cmsms_meta('project', 'page', get_the_ID(), 'pj-sort-categs', 'fullwidth');
		echo '</div>' . 
		'</div>';
	} else {
		echo '<div class="media_box">' . 
			'<figure class="preloader">' . 
				'<img src="' . get_template_directory_uri() . '/img/PFP-XL-gallery.jpg' . '" alt="' . cmsms_title(get_the_ID(), false) . '" title="' . cmsms_title(get_the_ID(), false) . '" class="fullwidth" />' . 
			'</figure>' . 
		'</div>' . 
		'<div class="project_rollover">' . 
			'<div class="project_rollover_inner">';
				cmsms_heading(get_the_ID(), 'project', true, 'h5');
				
				cmsms_meta('project', 'page', get_the_ID(), 'pj-sort-categs', 'fullwidth');
		echo '</div>' . 
		'</div>';
	}
?>
</article>
<!--_________________________ Finish Slider Project _________________________ -->

