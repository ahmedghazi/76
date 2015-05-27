<?php get_header(); ?>

	<section class="">
		<input type="hidden" id="bdc" value="" <?php body_class(); ?>>
	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
			
		<?php
			$args = array(
				"post_type" => "page",
				"post_parent" => get_the_ID(),
				"post_status" => "publish",
				"orderby" => "menu_order", 
				//"order" => "DESC",
				//'posts_per_page' => -1,
			);

			$q = new WP_Query( $args );

			if ( $q->have_posts() ) :
				
				while ( $q->have_posts() ) : $q->the_post(); 
					include(locate_template('_/inc/client-projet.php'));
				endwhile;
			endif;
			wp_reset_postdata();
		?>
	<?php endwhile; endif; ?>
	</section>

<?php get_footer(); ?>