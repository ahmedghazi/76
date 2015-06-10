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
		//$bg = wp_get_attachment_image_src( get_post_thumbnail_id(), "full");
		//$css = 'style="background-image:url('.$bg[0].')"';
		$bg = get_field("image_mobile");
		$css = 'style="background-image:url('.$bg["url"].')"';

		?><article class="" <?php echo $css;?>>
			<div class="contact_content slideBottom anime_lg">
				<div class="logo ">
					<?php include(locate_template('_/img/logo-soixanteseize-blanc.svg'));?>
				</div>

				<div class="adresse">
					<?php echo get_the_content(); ?>
				</div>
				
				<div class="contact_links">
					<?php 
					$link = get_field("email");
					if(!$link)$link = "adam.dupuis@soixanteseize.com";
					?>
					<a class="btn " target="" rel="external" href="mailto:<?php echo $link;?>" class="align_right">
						<span class="anime">E-MAIL</span>
					</a>
				</div>
			</div>
		</article>

	<?php endwhile; endif; ?>
	</section>

<?php get_footer(); ?>
