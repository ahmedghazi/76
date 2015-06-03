<?php 
$slug = $post->post_name;
?><div class="agence_metier article_agence_<?php echo $idx;?>"  
data-slug="<?php echo $slug;?>"
id="art-<?php echo $slug;?>">
	<div class="agence_metier_content">
		<div class="surtitre slideRight anime_md">
			<?php //the_field("surtitre"); ?>
			NOS MÉTIERS
		</div>
		<h2 class="slideRight anime_md"><?php the_title(); ?></h2>
		<div class="soustitre slideRight anime_md"><?php the_field("soustitre"); ?></div>	

		<div class="contenu slideRight anime_md">
			<?php the_content(); ?>
			<div class="clear"></div>
		</div>
		
		<div class="slideRight anime_md abtn">
			<?php include(locate_template('_/inc/btn-media.php'));?>
		</div>
		
	</div>
</div>