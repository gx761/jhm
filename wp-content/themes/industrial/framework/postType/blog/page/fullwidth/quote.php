<?php
/**
 * @package WordPress
 * @subpackage Industrial
 * @since Industrial 1.0
 * 
 * Blog Page Full Width Quote Post Format Template
 * Created by CMSMasters
 * 
 */


$cmsms_post_quote_text = get_post_meta(get_the_ID(), 'cmsms_post_quote_text', true);
$cmsms_post_quote_author = get_post_meta(get_the_ID(), 'cmsms_post_quote_author', true);

?>

<!--_________________________ Start Quote Article _________________________ -->
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<div class="cmsms_info">
		<div class="cmsms_like"><?php cmsmsLike(); ?></div>
	</div>
	<div class="ovh">
		<header class="entry-header">
			<?php if (!post_password_required()) { ?>
			<blockquote>
				<span class="cmsms_post_format_img"></span>
				<?php 
					if ($cmsms_post_quote_text != '') {
						echo "\t" . '<h5>' . str_replace("\n", '<br />', $cmsms_post_quote_text) . '</h5>' . "\n";
					} else {
						echo "\t" . '<p>' . theme_excerpt(55, false) . '</p>' . "\n";
					}

					if ($cmsms_post_quote_author != '') {
							echo '<h6>' . $cmsms_post_quote_author . '</h6>' . "\n";
						}
					} else {
						echo '<p>' . __('There is no excerpt because this is a protected post.', 'cmsmasters') . '</p>';
					}
				?>
			</blockquote>
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
<!--_________________________ Finish Quote Article _________________________ -->

