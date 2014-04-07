<?php
/**
 * The template for displaying product content within loops.
 *
 * Override this template by copying it to yourtheme/woocommerce/content-product.php
 *
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     1.6.4
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

global $product, $woocommerce_loop;

// Store loop count we're currently on
if ( empty( $woocommerce_loop['loop'] ) )
	$woocommerce_loop['loop'] = 0;

// Store column count for displaying the grid
if ( empty( $woocommerce_loop['columns'] ) )
	$woocommerce_loop['columns'] = apply_filters( 'loop_shop_columns', 4 );

// Ensure visibility
if ( ! $product->is_visible() )
	return;

// Increase loop count
$woocommerce_loop['loop']++;

// Extra post classes
$classes = array();
if ( 0 == ( $woocommerce_loop['loop'] - 1 ) % $woocommerce_loop['columns'] || 1 == $woocommerce_loop['columns'] )
	$classes[] = 'first';
if ( 0 == $woocommerce_loop['loop'] % $woocommerce_loop['columns'] )
	$classes[] = 'last';

$handler = apply_filters( 'woocommerce_add_to_cart_handler', $product->product_type, $product );
?>
<li <?php post_class( $classes ); ?>>
	<div class="product_inner">
		<?php woocommerce_show_product_loop_sale_flash();
		
		$availability = $product->get_availability();

		if (esc_attr($availability['class']) == 'out-of-stock') {
			echo apply_filters('woocommerce_stock_html', '<span class="' . esc_attr( $availability['class'] ) . '">' . esc_html( $availability['availability'] ) . '</span>', $availability['availability']);
		}
		?>
		<figure>
			<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" class="preloader">
				<?php woocommerce_template_loop_product_thumbnail(); ?>
			</a>
			<?php woocommerce_template_loop_rating(); ?>
		</figure>
		<header class="entry-header">
			<h3 class="entry-title">
				<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
			</h3>
		</header>
		<footer class="entry-meta">
			<?php woocommerce_template_loop_price(); ?>
		</footer>
		<div class="product_buttons">
			<?php cmsms_woocommerce_add_to_cart_button(); ?>
		</div>
	</div>
</li>