<?php
/**
 * @package WordPress
 * @subpackage Industrial
 * @since Industrial 1.0.1
 * 
 * Blog Post Full Width Audio Post Format Template
 * Created by CMSMasters
 * 
 */


$cmsms_heading = get_post_meta(get_the_ID(), 'cmsms_heading', true);


$cmsms_post_featured_image_show = get_post_meta(get_the_ID(), 'cmsms_post_featured_image_show', true);

$cmsms_post_audio_links = get_post_meta(get_the_ID(), 'cmsms_post_audio_links', true);

?>

<!--_________________________ Start Audio Article _________________________ -->
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<?php cmsms_heading_nolink(get_the_ID(), 'post', true) . "\n"; ?>
		<span class="cmsms_post_format_img"></span>
		<div class="cmsms_like"><?php cmsmsLike(); ?></div>
		<?php 
			cmsms_post_date('post', 'post');
			
			if (!post_password_required()) {
				cmsms_comments('post');
			} 
			
			cmsms_meta('post', 'post');
		?>
	</header>
	<?php 
		if (!post_password_required()) {
			if (has_post_thumbnail() && $cmsms_post_featured_image_show == 'true' && $cmsms_heading != 'parallax') {
				cmsms_thumb(get_the_ID(), 'full-thumb', false, 'img_' . get_the_ID(), true, false, true, true, false);
			}
			
			if (sizeof($cmsms_post_audio_links) > 0) {
				foreach ($cmsms_post_audio_links as $cmsms_post_audio_link_url) {
					$audio_link[$cmsms_post_audio_link_url[0]] = $cmsms_post_audio_link_url[1];
				}
				
				echo '<div class="cmsms_blog_media">' . "\n\t\t" . 
					cmsmastersSingleAudioPlayer($audio_link) . "\r\t" . 
				'</div>' . "\r";
			}
		}
	?>
	<footer class="entry-meta">
		<?php 
			echo '<div class="entry-content">' . "\n";
			
			the_content();
			
			wp_link_pages(array( 
				'before' => '<div class="subpage_nav" role="navigation">' . '<strong>' . __('Pages', 'cmsmasters') . ':</strong>', 
				'after' => '</div>' . "\n", 
				'link_before' => ' [ ', 
				'link_after' => ' ] ' 
			));
			
			cmsms_content_composer(get_the_ID());
			
			echo "\t\t" . '</div>' . "\n";
			
			cmsms_tags(get_the_ID(), 'post', 'post');
		?>
	</footer>
</article>
<!--_________________________ Finish Audio Article _________________________ -->

