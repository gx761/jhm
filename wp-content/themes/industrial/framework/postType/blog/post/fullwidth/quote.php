<?php
/**
 * @package WordPress
 * @subpackage Industrial
 * @since Industrial 1.0
 * 
 * Blog Post Full Width Quote Post Format Template
 * Created by CMSMasters
 * 
 */


$cmsms_post_quote_text = get_post_meta(get_the_ID(), 'cmsms_post_quote_text', true);
$cmsms_post_quote_author = get_post_meta(get_the_ID(), 'cmsms_post_quote_author', true);

?>

<!--_________________________ Start Quote Article _________________________ -->
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<?php cmsms_heading_nolink(get_the_ID(), 'post', true) . "\n"; ?>
		<span class="cmsms_post_format_img"></span>
		<div class="cmsms_like"><?php cmsmsLike(); ?></div>
		<?php 
			cmsms_post_date('post', 'post');
			
			cmsms_meta('post', 'post');
			
			if (!post_password_required()) {
				cmsms_comments('post');
			}
		?>
	</header>
	<?php if (!post_password_required()) { ?>
		<blockquote>
		<?php 
			if ($cmsms_post_quote_text != '') {
				echo "\t" . '<h3>' . str_replace("\n", '<br />', $cmsms_post_quote_text) . '</h3>' . "\n";
			} else {
				echo "\t" . '<h3>' . theme_excerpt(55, false) . '</h3>' . "\n";
			}
		?>
		</blockquote>
	<?php 
			if ($cmsms_post_quote_author != '') {
				echo '<h6>' . $cmsms_post_quote_author . '</h6>' . "\n";
			}
		} else {
			echo '<h6>' . __('There is no excerpt because this is a protected post.', 'cmsmasters') . '</h6>';
		}
	?>
	<div class="entry-content">
		<?php 
			the_content();
			
			wp_link_pages(array( 
				'before' => '<div class="subpage_nav" role="navigation">' . '<strong>' . __('Pages', 'cmsmasters') . ':</strong>', 
				'after' => '</div>' . "\n", 
				'link_before' => ' [ ', 
				'link_after' => ' ] ' 
			));
			
			cmsms_content_composer(get_the_ID()); 
			
			cmsms_tags(get_the_ID(), 'post', 'post');
		?>
	</div>
</article>
<!--_________________________ Finish Quote Article _________________________ -->

