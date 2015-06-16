<?php
$photos = get_field("photos");
if($photos){
	foreach($photos as $photo){
		$label_photo = $photo["label_photo"];
		$id_diaporama = $photo["id_diaporama"];
		?>
		<button 
			type="button" 
			class="btn btn_diapo" 
			data-href="<?php echo $id_diaporama?>" 
			data-surtitre="<?php the_field("surtitre");?>" 
			data-titre="<?php the_title();?>" 
			><span class="anime"><?php echo $label_photo?></span></button>
	<?php }?>
	
<?php }?>

<?php
$videos = get_field("videos");
//var_dump($videos);
if($videos){
	foreach($videos as $video){
		$label_video = $video["label_video"];
		$url_video = $video["url_video"];
		$thumbnail_video = $video["thumbnail_video"]["url"];
		?>
		<button 
			type="button" 
			class="btn btn_video" 
			data-href="<?php echo $url_video?>" 
			data-thumbnail-video="<?php echo $thumbnail_video?>" 
			data-surtitre="<?php the_field("surtitre");?>" 
			data-titre="<?php the_title();?>" 
			><span class="anime"><?php echo $label_video?></span></button>
	<?php }?>
	
<?php }?>

<?php

$medias = get_field("diaporama");
if($medias){
	
	foreach($medias as $media){
		$diaporam_titre = $media["diaporama_titre"];
		
		$arr_video = array();
		$arr_diapo = array();

		foreach($media as $mm){

			foreach($mm as $m){
				if($m["video_url"]){
					$arr_video[] = $m;
				}
				if($m["diaporama_id"]){
					$arr_diapo[] = $m;
				}
			}
		}
		
		$arr_video = json_encode($arr_video);
		$arr_diapo = json_encode($arr_diapo);
		
		?>
		<button 
			type="button" 
			class="btn btn_diapo_video" 
			data-diaporama='<?php echo $arr_diapo?>' 
			data-video='<?php echo $arr_video?>' 
			data-surtitre="<?php the_field("surtitre");?>" 
			data-titre="<?php the_title();?>" 
			><span class="anime"><?php echo $diaporam_titre?></span></button>
	<?php }?>
	
<?php }?>