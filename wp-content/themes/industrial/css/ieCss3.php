<?php
/**
 * @package WordPress
 * @subpackage Industrial
 * @since Industrial 2.0
 * 
 * CSS 3 Rules for IE < 9
 * Created by CMSMasters
 * 
 */


header('Content-type: text/css');


require('../../../../wp-load.php');

?>
 span.dropcap2, 
.button_small,
.button_medium,
.button_large,
.cmsms_plus, 
.cmsmsLike, 
.cmsms_close_video, 
.comment-reply-link,
#slide_top,
a.cmsms_comments,
.product .onsale,
.products .product .out-of-stock,
.product .woocommerce-tabs .comment_container .avatar,
.widget_price_filter .ui-slider .ui-slider-handle{behavior:url(<?php echo get_template_directory_uri(); ?>/css/pie.htc);}

.p_options_block .button_small {behavior:none;}

