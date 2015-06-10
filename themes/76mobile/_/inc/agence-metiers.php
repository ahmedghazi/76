<?php 
$slug = $post->post_name;
?><article class="article_agence_<?php echo $c;?>"  
data-slug="<?php echo $slug;?>"
id="art-<?php echo $slug;?>">

	<div class="metiers_header">
		<div id="metiers_close" class="close">
			<div class="stripe1 anime_md"></div>
			<div class="stripe2 anime_md"></div>
		</div>

		<div class="logo ">
			<?php include(locate_template('_/img/logo-soixanteseize-blanc.svg'));?>
		</div>		

		<div class="soustitre anime_md TimesNewRomanPS-Italic">
			<?php //the_content(); ?>
		</div>
	</div>

	<div class="metiers_map col">
		<div class="map">
			<?php include(locate_template('_/inc/disque.svg'));?>
		</div>
	</div>
	<div class="metiers_content col">
		
	<?php
	//the_ID();
		$argss = array(
			"post_type" => "page",
			"post_parent" => get_the_ID(),
			"post_status" => "publish",
			"orderby" => "menu_order", 
			//"order" => "DESC",
			'posts_per_page' => -1,
		);

		$qq = new WP_Query( $argss );

		if ( $qq->have_posts() ) :
			$idx = 0;
			while ( $qq->have_posts() ) : $qq->the_post(); 
				include(locate_template('_/inc/agence-metier.php'));
				$idx++;
			endwhile;
		endif;
		wp_reset_postdata();
	?>
	</div>

	
</article>