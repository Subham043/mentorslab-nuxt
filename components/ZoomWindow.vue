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
		default: 'Subham'
	},

    meetingId:{
		type: String,
		default: '89425649191'
	},
    
    password:{
		type: String,
		default: 'kkr6b9'
	},

  },

  mounted () {

    document.getElementById("zmmtg-root").style.display = "block";
    
    const meetConfig = this.$MeetingCfg(this.meetingId, this.nickname, this.password)
    
    const ZoomMtg = this.$ZoomMtg
    
    ZoomMtg.init({
        
        leaveUrl: "http://www.zoom.us",
        
        isSupportAV: true,
        
        success: () => {
            ZoomMtg.join({
                signature: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZGtLZXkiOiJBM3BLcWVIY3JDVjUwdjNuUUNmOWdUOXhwT2wwUkpQdlVJTlkiLCJtbiI6ODk0MjU2NDkxOTEsInJvbGUiOjAsImlhdCI6MTY2NzQyMTQ1OSwiZXhwIjoxNjY3NDI4NjU5LCJhcHBLZXkiOiJBM3BLcWVIY3JDVjUwdjNuUUNmOWdUOXhwT2wwUkpQdlVJTlkiLCJ0b2tlbkV4cCI6MTY2NzQyODY1OX0.WuZeVs1cyH1MARDBAUk8RWuyaMZeuMkm1wCKV-g8BdQ',
                sdkKey: meetConfig.apiKey,
                userName: 'eeee',
                meetingNumber: this.meetingId,
                passWord: this.password
            })
        }
    });
    
},

beforeDestroy(){
      document.getElementById("zmmtg-root").style.display = "none";

  }

};

</script>