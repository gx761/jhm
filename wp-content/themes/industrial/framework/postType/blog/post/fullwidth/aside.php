<?php
/**
 * @package WordPress
 * @subpackage Industrial
 * @since Industrial 1.0
 * 
 * Blog Post Full Width Aside Post Format Template
 * Created by CMSMasters
 * 
 */


$cmsms_post_aside_text = get_post_meta(get_the_ID(), 'cmsms_post_aside_text', true);

?>

<!--_________________________ Start Aside Article _________________________ -->
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
			if ($cmsms_post_aside_text != '') {
				echo '<h3 class="entry-content">' . $cmsms_post_aside_text . '</h3>' . "\n";
			} else {
				echo '<h3 class="entry-content">' . theme_excerpt(55, false) . '</h3>' . "\n";
			}
		} else {
			echo '<p>' . __('There is no excerpt because this is a protected post.', 'cmsmasters') . '</p>';
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
<!--_________________________ Finish Aside Article _________________________ -->

