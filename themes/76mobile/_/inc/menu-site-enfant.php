<?php
	$argss = array(
		"post_type" => "page",
		"post_parent" => get_the_id(),
		"post_status" => "publish",
		"orderby" => "menu_order", 
		//"order" => "DESC",
		//'posts_per_page' => -1,
	);

	$qq = new WP_Query( $argss );
//trace($q->max_num_pages);
//$max = $q->max_num_pages;
	if ( $qq->have_posts() ) :
		echo '<ul class="sous_menu">';
		while ( $qq->have_posts() ) : $qq->the_post();

			$url_thumb = wp_get_attachment_image_src( get_post_thumbnail_id(), "full");
			if(!$url_thumb)
				$url_thumb[0] = 'http://placehold.it/26x48&text=Client';
			//$url_thumb = $url_thumb[0];
			$link = get_permalink(geT_the_ID());
			//include(locate_template('_/inc/jdb-article.php'));
			echo "<li class='anime_md l0'>";
				echo '<div class="sous_menu_logo"><div class="sous_menu_logo_inside" style="background-image:url('.$url_thumb[0].')"></div></div>';
				echo '<div class="sous_menu_">';
					echo "<a data-role='ajax' class='anime' href='".$link."'>".get_the_title().'</a>';
				echo '</div>';
				include(locate_template('_/inc/menu-site-enfant-clients.php'));
			echo "</li>";
			
		endwhile;
		echo '</ul>';
	endif;
	wp_reset_postdata();
?>