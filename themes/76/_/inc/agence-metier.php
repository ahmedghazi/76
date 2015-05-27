<?php 
$slug = $post->post_name;
?><div class="agence_metier article_agence_<?php echo $idx;?>"  
data-slug="<?php echo $slug;?>"
id="art-<?php echo $slug;?>">
	<div class="agence_metier_content">
		<div class="surtitre">
			<?php //the_field("surtitre"); ?>
			NOS MÉTIERS
		</div>
		<h2><?php the_title(); ?></h2>
		<div class="soustitre"><?php the_field("soustitre"); ?></div>
		<div class="contenu">
			<?php the_content(); ?>
		</div>
	</div>
</div>