<?php
/*
Template Name: CONTACTS
*/
?>

<?php get_header(); ?>

	<section>
		<input type="hidden" id="bdc" value="" <?php body_class(); ?>>
	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
			
		<?php 
		$bg = wp_get_attachment_image_src( get_post_thumbnail_id(), "full");
		$css = 'style="background-image:url('.$bg[0].')"';
		?><article class="" <?php echo $css;?>>
			<div class="contact_content slideBottom anime_md">
				<div class="logo ">
					<?php include(locate_template('_/img/logo-soixanteseize-blanc.svg'));?>
				</div>

				<div class="adresse">
					<?php echo get_the_content(); ?>
				</div>
				
				<div class="contact_links">
					<a class="outline " href="#" class="align_right">E-MAIL</a>
				</div>
				<div class="clear"></div>
			</div>
		</article>

	<?php endwhile; endif; ?>
	</section>

<?php get_footer(); ?>
