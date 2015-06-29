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