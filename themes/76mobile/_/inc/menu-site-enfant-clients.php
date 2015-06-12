<?php
	$argss = array(
		"post_type" => "page",
		"post_parent" => get_the_id(),
		"post_status" => "publish",
		"orderby" => "menu_order", 
		//"order" => "DESC",
		//'posts_per_page' => -1,
	);

	$qqq = new WP_Query( $argss );
//trace($q->max_num_pages);
//$max = $q->max_num_pages;
	if ( $qqq->have_posts() ) :
		echo '<div class="sous_menu_projets_bande anime">';
		echo '<ul class="sous_menu_projets">';
		while ( $qqq->have_posts() ) : $qqq->the_post();

			$url_thumb = wp_get_attachment_image_src( get_post_thumbnail_id(), "full");
			if(!$url_thumb)
				$url_thumb[0] = 'http://placehold.it/26x48&text=Client';
			//$url_thumb = $url_thumb[0];

			$slug = $link."#".basename(get_permalink());
			//include(locate_template('_/inc/jdb-article.php'));
			echo "<li>";
				echo '<div class="sous_menu_projets_thumbnail anime" style="background-image:url('.$url_thumb[0].')"></div>';
			
				echo "<a data-role='hash' class='anime' href='".$slug."'>".get_the_title().'</a>';
			
			echo "</li>";
			
		endwhile;
		echo '</ul>';
		echo '</div>';
	endif;
	wp_reset_postdata();
?>