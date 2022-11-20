<template>

    <div>
    </div>

</template>

<script>

export default {
  name: 'ZoomWindow',

  props: {

  nickname:{
		type: String,
		default: 'Anonymous'
	},

  },

beforeDestroy(){
      document.getElementById("zmmtg-root").style.display = "none";

},

methods: {
  startZoom(meetingId, password, signature){
    document.getElementById("zmmtg-root").style.display = "block";
    
    const meetConfig = this.$MeetingCfg(this.meetingId, this.nickname, this.password)
    
    const ZoomMtg = this.$ZoomMtg

    // eslint-disable-next-line no-console
    // console.log({
    //   signature,
    //   sdkKey: meetConfig.apiKey,
    //   userName: this.nickname,
    //   meetingNumber: meetingId,
    //   passWord: password
    // });
    
    ZoomMtg.init({
        
        leaveUrl: `${this.$config.mainURL}/`,
        
        isSupportAV: true,
        
        success: () => {
            ZoomMtg.join({
              signature,
              sdkKey: meetConfig.apiKey,
              userName: this.nickname,
              meetingNumber: meetingId,
              passWord: password
            })
        }
    });
  }
}

};

</script>