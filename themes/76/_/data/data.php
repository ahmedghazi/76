<?php
add_action( 'wp_ajax_get_diapo_by_id', 'handle_get_diapo_by_id' );
add_action( 'wp_ajax_nopriv_get_diapo_by_id', 'handle_get_diapo_by_id' );

function handle_get_diapo_by_id() {
    $id = $_REQUEST['id'];

    global $wp_photo_gallery;
    $gallery = new WPPGPhotoGallery($id);
    $gallery_items = WPPGPhotoGallery::getGalleryItems($id);
    print_r($gallery_items);
    $html = '<div class="diapo">';
    foreach($gallery_items as $item){
        $css = 'style="background-image:url('.$item["image_url"].')"';
        $html .= '<div class="diapo_item">';
        $html .= '<div class="diapo_item_image" '.$css.'></div>';
        
        $desc = $item["description"];
        if($desc == "")$desc = "desciption de l'image";
        $desc = str_replace("_", " ", $item["alt_text"]);
        $html .= '<div class="diapo_description">'.$desc.'</div>';
        
        $html .= '</div>';
    }
    $html .= '</div>';
    echo $html;
    die();
}


add_action( 'wp_ajax_get_oembed_by_url', 'handle_get_oembed_by_url' );
add_action( 'wp_ajax_nopriv_get_oembed_by_url', 'handle_get_oembed_by_url' );

function handle_get_oembed_by_url() {
    $url = $_REQUEST['url'];
    $embed_code = wp_oembed_get($url, array('width'=>'100%', 'height'=>'100%'));
    echo $embed_code;

    die();
}