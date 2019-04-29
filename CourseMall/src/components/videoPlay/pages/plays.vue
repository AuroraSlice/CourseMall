<template>
	<div>
		<video-player  class="video-player vjs-custom-skin"
     ref="videoPlayer"
     :playsinline="true"
     :options="playerOptions"
		></video-player>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				playerOptions : {
       			playbackRates: [0.7, 1.0, 1.5, 2.0],
        		autoplay: false, 
        		muted: false, 
        		loop: false, 
        		preload: 'auto', 
        		language: 'zh-CN',
        		aspectRatio: '16:9', 
        		fluid: true, 
        		sources: [{
          			type: "video/mp4",
          			src: require("@/assets/video/S.H.E - 你曾是少年.mp4")
        		}],
        		notSupportedMessage: '此视频暂无法播放，请稍后再试', 
        		controlBar: {
          		timeDivider: true,
          		durationDisplay: true,
          		remainingTimeDisplay: false,
          		fullscreenToggle: true  //全屏按钮
       			 }
    			}
			}

		}
	}
</script>

<style scoped>
	
</style>