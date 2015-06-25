<?php
//var_dump($client_id);
//wp_reset_postdata();
	$argsa = array(
		"post_type" => "page",
		"post_parent" => $client_id,
		"post_status" => "publish",
		"orderby" => "menu_order", 
	);

	$qqs = new WP_Query( $argsa );
//trace($q->max_num_pages);
//$max = $q->max_num_pages;
	if ( $qqs->have_posts() ) :

		echo '<div class="sous_menu_projets_bande anime" id="bande-'.$client_id.'">';
		echo '<ul class="sous_menu_projets">';

		while ( $qqs->have_posts() ) : $qqs->the_post();

			//$arr_bande[] = get_the_ID();
			$url_thumb = wp_get_attachment_image_src( get_post_thumbnail_id(), "full");
			if(!$url_thumb)
				$url_thumb[0] = 'http://placehold.it/26x48&text=Client';
			//$url_thumb = $url_thumb[0];

//echo get_permalink(get_the_ID());
var_dump(get_permalink(get_the_ID()));
var_dump($current_url);

			$slug = $link."#".basename(get_permalink(get_the_ID()));
			//$slug = get_permalink(get_the_ID());
			$title = get_the_title();
			$is2l = explode(" ",$title);
			//trace($is2l);
			if(count($is2l)>0){
				$title = $is2l[0]."\n";
				$title .= $is2l[1]."";
			}
			

			echo "<li>";
				echo '<div class="sous_menu_projets_thumbnail anime" style="background-image:url('.$url_thumb[0].')"></div>';
				echo "<a href='".$slug."' data-role='' class='anime' title='".get_the_title()."' >";
					echo '<span>'.$title.'</span>';
				echo '</a>';		
			echo "</li>";


			
		endwhile;

		echo '</ul>';
		echo '</div>';

	endif;
	wp_reset_postdata();
?>