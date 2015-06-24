<?php 
//$bg = wp_get_attachment_image_src( get_post_thumbnail_id(), "full");
//$css = 'style="background-image:url('.$bg[0].')"';
$bg = get_field("image_mobile");
$css = 'style="background-image:url('.$bg["url"].')"';

$slug = $post->post_name;
?><article class="agence_intro article_agence_<?php echo $c;?>" <?php echo $css;?>
data-slug="<?php echo $slug;?>"
id="art-<?php echo $slug;?>">
	<a href="<?php the_permalink(); ?>#brand" data-role="hash" class="action">NOS MÉTIERS</a>
	<div class="agence_content">
		<div class="surtitre"><?php the_title(); ?></div>
		<h2><?php the_field("soustitre"); ?></h2>

		<div class="contenu">
			<?php echo get_the_content(); ?>
		</div>

		
		
		
		<div class="logo ">
			<?php include(locate_template('_/img/logo-soixanteseize-blanc.svg'));?>
		</div>
	</div>
</article>