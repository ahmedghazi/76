<?php
	define("WP_DEBUG", true);
    // Translations can be filed in the /languages/ directory
    load_theme_textdomain( 'html5reset', TEMPLATEPATH . '/languages' );

    $locale = get_locale();
    $locale_file = TEMPLATEPATH . "/languages/$locale.php";
    if ( is_readable($locale_file) )
        require_once($locale_file);
	
	// Add RSS links to <head> section
	automatic_feed_links();
	
	//remove_filter('the_content', 'wpautop');
	/**
	 * Remove empty paragraphs created by wpautop()
	 * @author Ryan Hamilton
	 * @link https://gist.github.com/Fantikerz/5557617
	 */
	function remove_empty_p( $content ) {
	    $content = force_balance_tags( $content );
	    $content = preg_replace( '#<p>\s*+(<br\s*/*>)?\s*</p>#i', '', $content );
	    $content = preg_replace( '~\s?<p>(\s|&nbsp;)+</p>\s?~', '', $content );
	    return $content;
	}
	//add_filter('the_content', 'remove_empty_p', 20, 1);

	include('_/data/data.php');

	// Clean up the <head>
	function removeHeadLinks() {
    	remove_action('wp_head', 'rsd_link');
    	remove_action('wp_head', 'wlwmanifest_link');
    }
    add_action('init', 'removeHeadLinks');
    remove_action('wp_head', 'wp_generator');

    function disable_emojis() {
		remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
		remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
		remove_action( 'wp_print_styles', 'print_emoji_styles' );
		remove_action( 'admin_print_styles', 'print_emoji_styles' );	
		remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
		remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );	
		remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
		add_filter( 'tiny_mce_plugins', 'disable_emojis_tinymce' );
	}
	add_action( 'init', 'disable_emojis' );
    
    //remove_filter( 'the_content', 'wpautop' );
	//remove_filter( 'the_excerpt', 'wpautop' );
    
    add_theme_support( 'post-formats', array('aside', 'gallery', 'link', 'image', 'quote', 'status', 'audio', 'chat', 'video')); // Add 3.1 post format theme support.
	// Utils
	add_theme_support('post-thumbnails');
	show_admin_bar(false);
	add_theme_support( 'menus' );
	add_image_size( "thumb_square_small_60", 60, 60, false);

	
	add_post_type_support( 'page', 'excerpt' );
	
	function remove_pingback_url( $output, $show ) {
	    if ( $show == 'pingback_url' ) $output = '';
	    return $output;
	}
	add_filter( 'bloginfo_url', 'remove_pingback_url', 10, 2 );
	
	// Load jQuery
	//////////////////////////////////////////////////////////////
	add_action('wp_enqueue_scripts', 'my_scripts_method', 200);
	function my_scripts_method() {
		$templatedir = get_stylesheet_directory_uri();

		wp_deregister_script( 'comment-reply' );

	   	wp_deregister_script('jquery');
	   	wp_register_script('jquery', ("http://code.jquery.com/jquery-latest.min.js"), false);
	   	wp_enqueue_script('jquery');

	   	wp_deregister_script('cycle');
	   	wp_register_script('cycle', ($templatedir."/_/js/vendor/jquery.cycle.all.js"), false);
	   	wp_enqueue_script('cycle');

	   	wp_deregister_script('color-thief');
	   	wp_register_script('color-thief', ($templatedir."/_/js/vendor/color-thief.js"), false);
	   	wp_enqueue_script('color-thief');
	   	
	   	wp_deregister_script('navigate');
	   	wp_register_script('navigate', ($templatedir."/_/js/vendor/navigate.js"), false);
	   	wp_enqueue_script('navigate');

	   	wp_deregister_script('MetiersController');
	   	wp_register_script('MetiersController', ($templatedir."/_/js/MetiersController.js"), false);
	   	wp_enqueue_script('MetiersController');

	   	wp_deregister_script('NavigateController');
	   	wp_register_script('NavigateController', ($templatedir."/_/js/NavigateController.js"), false);
	   	wp_enqueue_script('NavigateController');

	   	wp_register_script('plugins', ($templatedir."/_/js/plugins.js"), false);
	   	wp_enqueue_script('plugins');

	   	wp_register_script('Btn', ($templatedir."/_/js/Btn.js"), false);
	   	wp_enqueue_script('Btn');

	   	wp_register_script('ScrollController', ($templatedir."/_/js/ScrollController.js"), false);
	   	wp_enqueue_script('ScrollController');

	   	wp_register_script('AnimeController', ($templatedir."/_/js/AnimeController.js"), false);
	   	wp_enqueue_script('AnimeController');
	   	

	   	wp_register_script('functions', ($templatedir."/_/js/functions.js"), false);
	   	wp_enqueue_script('functions');
	}
	//////////////////////////////////////////////////////////////
	// Load JS
	//////////////////////////////////////////////////////////////
	//add_action('wp_footer', 'handle_script', 200);
	function handle_script(){
		$templatedir = get_stylesheet_directory_uri();
		$scripts = '';
		$scripts .= '<script type="text/javascript" src="'.$templatedir.'/_/js/plugins.js"></script>'."\n";
		$scripts .= '<script type="text/javascript" src="'.$templatedir.'/_/js/Btn.js"></script>'."\n";
		$scripts .= '<script type="text/javascript" src="'.$templatedir.'/_/js/ViewController.js"></script>'."\n";
		$scripts .= '<script type="text/javascript" src="'.$templatedir.'/_/js/ScrollController.js"></script>'."\n";
		$scripts .= '<script type="text/javascript" src="'.$templatedir.'/_/js/functions.js"></script>'."\n";
		echo $scripts;
	}

	function trace($o){
		echo '<pre>';
		print_r($o);
		echo '</pre>';
	}

?>