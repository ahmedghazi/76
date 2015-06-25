<?php 
$bg = wp_get_attachment_image_src( get_post_thumbnail_id(), "full");
$bg = get_field("image_mobile");
//var_dump($bg);
$css = 'style="background-image:url('.$bg["url"].')"';
$slug = $post->post_name;
?><article class="creation_intro article_creation_<?php echo $c;?>" <?php echo $css;?>
data-slug="<?php echo $slug;?>"
id="art-<?php echo $slug;?>">
	
	<?php $redirect = get_field("redirect");?>
		<?php if($redirect){?>
			<?php $redirect_label = get_field("redirect_label");?>
			<div class="actionsBtn">
				
				<a class="action" data-role="hash" href="<?php echo $redirect; ?>">
					
					<span class="anime">
						<?php echo $redirect_label;?>
					</span>
				</a>
			</div>
			
		<?php } ?>
	
	
	<div class="creation_content">
		<div class="surtitre"><?php the_title(); ?></div>
		<h2><?php the_field("soustitre"); ?></h2>

		<div class="contenu">
			<?php the_content(); ?>
		</div>
		
		
		
		<div class="logo ">
			<?php include(locate_template('_/img/logo-soixanteseize-blanc.svg'));?>
		</div>
	</div>
</article>