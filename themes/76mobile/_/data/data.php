<?php
add_action( 'wp_ajax_get_diapo_by_id', 'handle_get_diapo_by_id' );
add_action( 'wp_ajax_nopriv_get_diapo_by_id', 'handle_get_diapo_by_id' );

function handle_get_diapo_by_id() {
    $id = $_REQUEST['id'];

    global $wp_photo_gallery;
    $gallery = new WPPGPhotoGallery($id);
    $gallery_items = WPPGPhotoGallery::getGalleryItems($id);
    //print_r($gallery_items);
    $html = '<div class="diapo">';
    foreach($gallery_items as $item){
        $css = 'style="background-image:url('.$item["image_url"].')"';
        $html .= '<div class="diapo_item">';
        $html .= '<div class="diapo_item_image" '.$css.'></div>';
        $html .= '<div class="diapo_description" '.$item["description"].'></div>';
        $html .= '</div>';
    }
    $html .= '</div>';
    echo $html;
    die();
}
