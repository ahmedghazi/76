<?php 
$slug = $post->post_name;
?><div class="agence_metier article_agence_<?php echo $idx;?>"  
data-slug="<?php echo $slug;?>"
id="art-<?php echo $slug;?>">
	<div class="agence_metier_content">
		<div class="surtitre slideBottom anime_md">
			<?php //the_field("surtitre"); ?>
			NOS MÉTIERS
		</div>
		<h2 class="slideBottom anime_md"><?php the_title(); ?></h2>
		<div class="soustitre slideBottom anime_md"><?php the_field("soustitre"); ?></div>
		
		<div class="slideBottom anime_md">
			<div class="actionsBtn ">
				<?php
				$diapo = get_field("diaporama_id");
				if($diapo){
					$diapo_label = get_field("diaporama_label"); ?>
					
					<!--a class="btn btn_diapo" href="diapo-<?php echo $diapo?>">
						<?php echo $diapo_label?>
					</a-->
					<button type="button" class="btn btn_diapo" data-href="diapo-<?php echo $diapo?>"><?php echo $diapo_label?></button>
				<?php }?>

				<?php
				$video = get_field("video_url");
				if($video){
					$video_label = get_field("video_label"); ?>
				
					<!--a class="btn btn_video" href="video-<?php echo $video?>">
						<?php echo $video_label?>
					</a-->
					<button type="button" class="btn btn_video" data-href="video-<?php echo $video?>"><?php echo $video_label?></button>
				<?php }?>
			</div>
		</div>

		<div class="stripes stripesBottom">
			<div class="stripe0 anime"></div>
			<div class="stripe1 anime"></div>
			<div class="stripe2 anime"></div>
			<div class="stripe3 anime"></div>
			<div class="stripe4 anime"></div>
			<div class="stripe5 anime"></div>
			<div class="stripe6 anime"></div>
		</div>

		<div class="contenu slideBottom anime_md">
			<?php the_content(); ?>
			<div class="clear"></div>
		</div>
		
		
	</div>
</div>