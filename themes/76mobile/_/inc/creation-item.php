<?php 
//$bg = wp_get_attachment_image_src( get_post_thumbnail_id(), "full");
$bg = get_field("image_mobile");
$css = 'style="background-image:url('.$bg["url"].')"';
//$css = 'style="background-image:url('.$bg[0].')"';
$slug = $post->post_name;
?><article class="article_creation_<?php echo $c;?>" <?php echo $css;?> 
data-slug="<?php echo $slug;?>"
id="art-<?php echo $slug;?>">
	<div class="creation_content">
		<div class="surtitre"><?php the_field("surtitre"); ?></div>
		<h2><?php the_title(); ?></h2>

		<div class="contenu">
			<?php echo get_the_content(); ?>
		</div>
		
		

		<div class="clear"></div>
		<div class="logo ">
			<?php include(locate_template('_/img/logo-soixanteseize-blanc.svg'));?>
		</div>
	</div>
</article>