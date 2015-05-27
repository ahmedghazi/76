<?php 
$slug = $post->post_name;
?><article class="article_agence_<?php echo $c;?>"  
data-slug="<?php echo $slug;?>"
id="art-<?php echo $slug;?>">
	<div class="metiers_map col">
		<?php include(locate_template('_/inc/agence-map.php'));?>
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
			//'posts_per_page' => -1,
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

	<div class="metiers_footer">
		<div class="logo float_right">
			<?php include(locate_template('_/img/logo-soixanteseize-blanc.svg'));?>
		</div>
	</div>
</article>