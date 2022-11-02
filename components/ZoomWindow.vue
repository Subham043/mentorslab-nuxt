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

    const meetConfig = this.$MeetingCfg(this.meetingId, this.nickname, this.password)

    // eslint-disable-next-line no-console
    console.log(meetConfig);

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

    // Generate Signature function

    // const signature = ZoomMtg.generateSignature({
    // // const signature = ZoomMtg.generateSDKSignature({

    //   meetingNumber: meetConfig.meetingNumber,

    //   apiKey: meetConfig.apiKey,

    //   apiSecret: meetConfig.apiSecret,

    //   role: meetConfig.role,

    //   success: function(res) {

    //     // eslint-disable-next-line

    //     // eslint-disable-next-line no-console
    //     console.log("success signature: " + res.result);

    //   },
    //   error: function (error) {
    //     // eslint-disable-next-line no-console
    //     console.log(error);
    //   }

    // });
    // // eslint-disable-next-line no-console
    // console.log(signature);
    // // join function

    // ZoomMtg.init({

    //   leaveUrl: "http://www.zoom.us",

    //   isSupportAV: true,

    //   success: () => {

    //     ZoomMtg.join({

    //       meetingNumber: meetConfig.meetingNumber,

    //       userName: meetConfig.userName,

    //       signature: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZGtLZXkiOiJBM3BLcWVIY3JDVjUwdjNuUUNmOWdUOXhwT2wwUkpQdlVJTlkiLCJtbiI6ODY3NTk5NzMxNjMsInJvbGUiOjAsImlhdCI6MTY2NzQxODk4NCwiZXhwIjoxNjY3NDI2MTg0LCJhcHBLZXkiOiJBM3BLcWVIY3JDVjUwdjNuUUNmOWdUOXhwT2wwUkpQdlVJTlkiLCJ0b2tlbkV4cCI6MTY2NzQyNjE4NH0.8sXLZbJkRwXE-0lOMv1ptH--v4h57ggQ3-e6P6I3CSM',

    //       apiKey: meetConfig.apiKey,

    //       userEmail: "subham.5ine@gmail.com",

    //       passWord: meetConfig.passWord,

    //       success: function(res) {

    //         // eslint-disable-next-line

    //         // eslint-disable-next-line no-console
    //         console.log("join meeting success");

    //       },

    //       error: function(res) {

    //         // eslint-disable-next-line

    //         // eslint-disable-next-line no-console
    //         console.log(res);

    //       }

    //     });

    //   },

    //   error: function(res) {

    //     // eslint-disable-next-line

    //     // eslint-disable-next-line no-console
    //     console.log(res);

    //   }

    // });

  }

};

</script>