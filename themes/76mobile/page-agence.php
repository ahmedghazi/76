<?php
/*
Template Name: AGENCE
*/
?>

<?php get_header(); ?>

	<section class="">

		<input type="hidden" id="bdc" value="" <?php body_class(); ?>>
	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
		<?php $id = get_the_id();?>
		<?php include(locate_template('_/inc/agence-intro.php'));?>
		<?php
		//echo "$id : ".$id;
			$args = array(
				"post_type" => "page",
				"post_parent" => $id,
				"post_status" => "publish",
				"orderby" => "menu_order", 
				//"order" => "DESC",
				'posts_per_page' => 1,
			);

			$q = new WP_Query( $args );

			if ( $q->have_posts() ) :
				$c = 1;
				while ( $q->have_posts() ) : $q->the_post(); 
					//the_ID();
					include(locate_template('_/inc/agence-metiers.php'));
					$c++;
				endwhile;
			endif;
			wp_reset_postdata();
		?>
	<?php endwhile; endif; ?>
		
		<?php 
		$c = 1;
		//include(locate_template('_/inc/page-controls.php'));?>
	</section>

<?php get_footer(); ?>
