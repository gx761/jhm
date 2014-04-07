<?php
/**
 * @package WordPress
 * @subpackage Industrial
 * @since Industrial 1.0.1
 * 
 * Portfolio Project Full Width Video Project Format Template
 * Created by CMSMasters
 * 
 */


$cmsms_option = cmsms_get_global_options();


$cmsms_heading = get_post_meta(get_the_ID(), 'cmsms_heading', true);


$cmsms_project_sharing_box = get_post_meta(get_the_ID(), 'cmsms_project_sharing_box', true);
$cmsms_project_featured_image_show = get_post_meta(get_the_ID(), 'cmsms_project_featured_image_show', true);

$cmsms_project_features = get_post_meta(get_the_ID(), 'cmsms_project_features', true);
$cmsms_project_pj_link_text = get_post_meta(get_the_ID(), 'cmsms_project_pj_link_text', true);
$cmsms_project_pj_link_url = get_post_meta(get_the_ID(), 'cmsms_project_pj_link_url', true);
$cmsms_project_pj_link_target = get_post_meta(get_the_ID(), 'cmsms_project_pj_link_target', true);

$cmsms_project_video_type = get_post_meta(get_the_ID(), 'cmsms_project_video_type', true);
$cmsms_project_video_link = get_post_meta(get_the_ID(), 'cmsms_project_video_link', true);
$cmsms_project_video_links = get_post_meta(get_the_ID(), 'cmsms_project_video_links', true);

?>

<!--_________________________ Start Video Project _________________________ -->
<article id="post-<?php the_ID(); ?>" <?php post_class('format-video'); ?>>
	<div class="project_content">
		<?php 
			if ($cmsms_option[CMSMS_SHORTNAME . '_portfolio_project_title']) {
				cmsms_heading_nolink(get_the_ID(), true, 'h1');
			}
		?>
		<div class="resize">
			<?php 
				if ($cmsms_project_video_type == 'selfhosted' && !empty($cmsms_project_video_links) && sizeof($cmsms_project_video_links) > 0) {
					foreach ($cmsms_project_video_links as $cmsms_project_video_link_url) {
						$video_link[$cmsms_project_video_link_url[0]] = $cmsms_project_video_link_url[1];
					}
					
					if (has_post_thumbnail()) {
						$poster = wp_get_attachment_image_src(get_post_thumbnail_id(get_the_ID()), 'project-thumb-full');
						
						$video_link['poster'] = $poster[0];
					}
					
					echo '<div class="cmsms_blog_media">' . 
						cmsmastersSingleVideoPlayer($video_link) . 
					'</div>';
				} elseif ($cmsms_project_video_type == 'embedded' && $cmsms_project_video_link != '') {
					echo '<div class="cmsms_blog_media">' . 
						'<div class="resizable_block">' . 
							get_video_iframe($cmsms_project_video_link) . 
						'</div>' . 
					'</div>';
				} else if (has_post_thumbnail() && $cmsms_project_featured_image_show == 'true' && $cmsms_heading != 'parallax') {
					cmsms_thumb(get_the_ID(), 'project-thumb-full', true, false, true, false, true, true, false);
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
				
				echo "\t\t" . '</div>' . "\n";
			?>
		</div>
	</div>
	<footer class="entry-meta">
		<div class="cmsms_meta_inner">
			<?php 
				echo '<h5>' . __('Project details', 'cmsmasters') . '</h5>' . "\n\t\t";
				
				echo '<ul class="cmsms_details">' . "\n\t\t\t";
				
				cmsms_pj_date('post');
				
				cmsms_pj_cat(get_the_ID(), 'pj-sort-categs', 'post');
				
				cmsms_pj_author('post');
				
				cmsms_pj_comments('post');
				
				cmsms_pj_tag(get_the_ID(), 'pj-tags', 'post');
				
				cmsms_link(get_the_ID(), 'project');
				
				foreach ($cmsms_project_features as $cmsms_project_feature) {
					if ($cmsms_project_feature[0] != '' && $cmsms_project_feature[1] != '') {
						$cmsms_project_feature_lists = explode("\n", $cmsms_project_feature[1]);
						
						echo '<li>' . 
							$cmsms_project_feature[0] . ':';
						
						foreach ($cmsms_project_feature_lists as $cmsms_project_feature_list) {
							echo '<span class="cmsms_details_links">' . trim($cmsms_project_feature_list) . '</span>';
						}
						
						echo '</li>' . "\n\t\t\t";
					}
				}
			?>
			</ul>
			<?php 
				if ($cmsms_project_sharing_box == 'true') { 
				
				echo '<h5 class="cmsms_like">' . 
					__('Like it', 'cmsmasters') . '?' . 
				'</h5>' . 
				'<div class="cmsms_like">';
					cmsmsLike();
				echo '</div>' . "\n\t\t\t" . 
				'<div class="cl"></div>';
			?>
			<div class="fl">
				<a href="https://twitter.com/share" class="twitter-share-button" data-lang="en"><?php _e('Tweet', 'cmsmasters'); ?></a>
				<script type="text/javascript">
					!function (d, s, id) { 
						var js = undefined, 
							fjs = d.getElementsByTagName(s)[0];
						
						if (d.getElementById(id)) { 
							d.getElementById(id).parentNode.removeChild(d.getElementById(id));
						}
						
						js = d.createElement(s);
						js.id = id;
						js.src = '//platform.twitter.com/widgets.js';
						
						fjs.parentNode.insertBefore(js, fjs);
					} (document, 'script', 'twitter-wjs');
				</script>
			</div>
			<div class="fl">
				<div class="g-plusone" data-size="medium"></div>
				<script type="text/javascript">
					(function () { 
						var po = document.createElement('script'), 
							s = document.getElementsByTagName('script')[0];
						
						po.type = 'text/javascript';
						po.async = true;
						po.src = 'https://apis.google.com/js/plusone.js';
						
						s.parentNode.insertBefore(po, s);
					} )();
				</script>
			</div>
			<div class="fl">
				<a href="http://pinterest.com/pin/create/button/?url=<?php echo urlencode(get_permalink(get_the_ID())); ?>" class="pin-it-button" count-layout="horizontal">
					<img border="0" src="//assets.pinterest.com/images/PinExt.png" title="<?php _e('Pin It', 'cmsmasters'); ?>" />
				</a>
				<script type="text/javascript">
					(function (d, s, id) { 
						var js = undefined, 
							fjs = d.getElementsByTagName(s)[0];
						
						if (d.getElementById(id)) { 
							d.getElementById(id).parentNode.removeChild(d.getElementById(id));
						}
						
						js = d.createElement(s);
						js.id = id;
						js.src = '//assets.pinterest.com/js/pinit.js';
						
						fjs.parentNode.insertBefore(js, fjs);
					} (document, 'script', 'pinterest-wjs'));
				</script>
			</div>
			<div class="fl">
				<div class="fb-like" data-send="false" data-layout="button_count" data-width="200" data-show-faces="false" data-fon="arial"></div>
				<script type="text/javascript">
					(function (d, s, id) { 
						var js = undefined, 
							fjs = d.getElementsByTagName(s)[0];
						
						if (d.getElementById(id)) { 
							d.getElementById(id).parentNode.removeChild(d.getElementById(id));
						}
						
						js = d.createElement(s);
						js.id = id;
						js.src = '//connect.facebook.net/en_US/all.js#xfbml=1';
						
						fjs.parentNode.insertBefore(js, fjs);
					} (document, 'script', 'facebook-jssdk'));
				</script>
			</div>
			<div class="cl"></div>
			<a class="cmsms_share" href="#"><span><?php _e('More sharing options', 'cmsmasters'); ?></span></a>
			<div class="cmsms_social cl"></div>
			<?php 
				echo '<div class="cmsms_post_excerpt">';
					
					the_excerpt();
				
					echo '</div>' . "\n";
				}
			?>
		</div>
	</footer>
	<div class="cl"></div>
</article>
<!--_________________________ Finish Video Project _________________________ -->

