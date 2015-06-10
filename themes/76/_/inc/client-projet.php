<?php 
$bg = wp_get_attachment_image_src( get_post_thumbnail_id(), "full");
$css = 'style="background-image:url('.$bg[0].')"';
global $post; 
$slug = $post->post_name;
?><article class="projet " <?php echo $css;?> 
data-type="background" 
data-speed="20" 
data-slug="<?php echo $slug;?>"
id="art-<?php echo $slug;?>">
	<div class="projet_content anime_lg ">
		<div class="surtitre"><?php the_field("surtitre"); ?></div>
		<h2><?php the_title(); ?></h2>

		<div class="contenu">
			<?php echo get_the_content(); ?>
		</div>
		<div class="contenu_en">
			<?php echo get_field("contenu_en"); ?>
		</div>
		
		<div class="actionsBtn">
			<?php include(locate_template('_/inc/btn-media.php'));?>
		</div>
		<div class="clear"></div>

		<!--div class="cl-effect-2">
			<a href="#"><span data-hover="Ratatouille">Ratatouille</span></a>
		</div-->
		
		<div class="logo align_right">
			<?php include(locate_template('_/img/logo-soixanteseize-blanc.svg'));?>
		</div>
	</div>
</article>