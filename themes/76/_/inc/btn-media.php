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
$diaporama = get_field("diaporama");
if($diaporama){
	foreach($diaporama as $diapo){
		$diaporam_titre = $diapo["diaporama_titre"];
		$diaporam_id = $diapo["diaporama_id"];
		$video_url = $diapo["video_url"];
		$video_thumbnail = $diapo["video_thumbnail"]["url"];
		//trace($diapo);
		?>
		<button 
			type="button" 
			class="btn btn_diapo_video" 
			data-diaporama-id="<?php echo $diaporam_id?>" 
			data-href="<?php echo $video_url?>" 
			data-thumbnail-video="<?php echo $video_thumbnail?>" 
			data-surtitre="<?php the_field("surtitre");?>" 
			data-titre="<?php the_title();?>" 
			><span class="anime"><?php echo $diaporam_titre?></span></button>
	<?php }?>
	
<?php }?>