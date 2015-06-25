<div class="menu_scroll">
<?php

$current_id = get_the_ID();
$current_url = $_SERVER["REQUEST_URI"];
//trace($current_url);

	$args = array(
		"post_type" => "page",
		"post_parent" => 0,
		"post_status" => "publish",
		"orderby" => "menu_order",
		'post__not_in' => array( 48 ),
		"order" => "ASC",
		//'posts_per_page' => -1,
	);

	$q = new WP_Query( $args );
//trace($q->max_num_pages);
//$max = $q->max_num_pages;
	if ( $q->have_posts() ) :
		echo '<ul class="menu">';
		while ( $q->have_posts() ) : $q->the_post();
			$template = basename( get_page_template() );
			$href = get_permalink(get_the_ID());
			$class = "";
			if(get_the_ID() == $current_id)$class = "current-menu";
			if($template == "page-clients.php")$href = "#";
			echo "<li class='anime l0 ".$class."'><a data-role='ajax' class='anime ' href='".$href."'>".get_the_title().'</a></li>';

			if($template == "page-clients.php")include(locate_template('_/inc/menu-site-enfant.php'));
			//if($template == "page-clients.php")include(locate_template('_/inc/menu-site-enfant.php'));
		
		endwhile;
		echo '</ul>';
	endif;
	wp_reset_postdata();
?>
</div>