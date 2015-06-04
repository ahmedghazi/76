<?php 
$bg = wp_get_attachment_image_src( get_post_thumbnail_id(), "full");
$css = 'style="background-image:url('.$bg[0].')"';
$slug = $post->post_name;
?><article class="agence_intro article_agence_<?php echo $c;?>" <?php echo $css;?>
data-slug="<?php echo $slug;?>"
id="art-<?php echo $slug;?>">
	<div class="agence_content">
		<div class="surtitre"><?php the_title(); ?></div>
		<h2><?php the_field("soustitre"); ?></h2>

		<div class="contenu">
			<?php echo get_the_content(); ?>
		</div>
		
		<?php $redirect = get_field("redirect");?>
		<?php if($redirect){?>
			<?php $redirect_label = get_field("redirect_label");?>
			<div class="actionsBtn">
				<a class="btn" data-role="hash" href="<?php echo $redirect; ?>"><?php echo $redirect_label; ?></a>
			</div>
			
		<?php } ?>

		<div class="contenu_en">
			<?php echo get_field("contenu_en"); ?>
		</div>
		<div class="sep_9"></div>

		<div class="clear"></div>
		<div class="logo ">
			<?php include(locate_template('_/img/logo-soixanteseize-blanc.svg'));?>
		</div>
	</div>
</article>