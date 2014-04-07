<?php
/**
 * @package WordPress
 * @subpackage Industrial
 * @since Industrial 1.0
 * 
 * Blog Page with Sidebar Link Post Format Template
 * Created by CMSMasters
 * 
 */


$cmsms_post_link_text = get_post_meta(get_the_ID(), 'cmsms_post_link_text', true);
$cmsms_post_link_address = get_post_meta(get_the_ID(), 'cmsms_post_link_address', true);

if ($cmsms_post_link_text == '') {
	$cmsms_post_link_text = __('Enter link text', 'cmsmasters');
}

if ($cmsms_post_link_address == '') {
	$cmsms_post_link_address = '#';
}

?>

<!--_________________________ Start Link Article _________________________ -->
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<div class="cmsms_info">
		<span class="cmsms_post_format_img"></span>
		<div class="cmsms_like"><?php cmsmsLike(); ?></div>
	</div>
	<div class="ovh">
		<header class="entry-header">
			<?php 
				if (!post_password_required()) {
					echo '<h3 class="entry-title">' . 
						'<a href="' . $cmsms_post_link_address . '" target="_blank">' . $cmsms_post_link_text . '</a>' . 
					'</h3>' . "\n" . 
					'<h6>- ' . $cmsms_post_link_address . ' -</h6>';
				} else {
					echo '<h2 class="entry-title">' . $cmsms_post_link_text . '</h2>';
				}
			?>
			<div class="cmsms_post_info">
				<?php 
					cmsms_post_date();
					
					if (!post_password_required()) {
						cmsms_comments();
					}
					
					cmsms_meta(); 
				?>
			</div>
		</header>
		<footer class="entry-meta">				
			<?php cmsms_tags(get_the_ID(), 'post', 'page'); ?>
		</footer>
	</div>
</article>
<!--_________________________ Finish Link Article _________________________ -->

