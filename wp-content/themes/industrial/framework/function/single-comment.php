<?php 
/**
 * @package WordPress
 * @subpackage Industrial
 * @since Industrial 1.0
 * 
 * Custom Single Comment Template
 * Created by CMSMasters
 * 
 */


function mytheme_comment($comment, $args, $depth) {
    $GLOBALS['comment'] = $comment;
    ?>
    <li <?php comment_class(); ?> id="li-comment-<?php comment_ID() ?>">
        <div id="comment-<?php comment_ID(); ?>" class="comment-body">
			<div class="fl">
				<div class="alignleft">
					<?php echo get_avatar($comment->comment_author_email, '60', get_option('avatar_default')) . "\n"; ?> 
				</div>
			</div>
			<div class="comment-content">
				<h6 class="fn">
					<?php 
						echo get_comment_author_link(); 
						
						echo "\n\t\t\t\t\t" . 
						'<abbr class="published" title="' . get_comment_time('F d, Y') . ' at ' . get_comment_time('g:i a') . '">' . "\n\t\t\t\t\t\t" . 
							get_comment_time('F d, Y') .' at ' . get_comment_time('g:i a') . 
						'</abbr>' . "\r";
					?>
				</h6>
				<?php edit_comment_link(__('Edit', 'cmsmasters')); ?>
				<div class="cl"></div>
				<?php 
					comment_text();
					
					if ($comment->comment_approved == '0') {
						echo '<p>' . 
							'<em>' . __('Your comment is awaiting moderation.', 'cmsmasters') . '</em>' . 
						'</p>';
					}
				
					comment_reply_link(array_merge($args, array( 
						'depth' => $depth, 
						'max_depth' => $args['max_depth'], 
						'reply_text' => __('Reply', 'cmsmasters') 
					))); 
				?>
			</div>
        </div>
    <?php 
}

