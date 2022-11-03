import Vue from 'vue'

// import { ZoomMtg } from '@zoomus/websdk';
const { ZoomMtg } = require("@zoomus/websdk");


// CDN version default

// ZoomMtg.setZoomJSLib('https://dmogdx0jrul3u.cloudfront.net/1.3.7/lib', '/av'); 
ZoomMtg.setZoomJSLib('https://source.zoom.us/2.8.0/lib', '/av'); 

ZoomMtg.preLoadWasm();

ZoomMtg.prepareJssdk();

// const API_KEY = "h3H8771mT3-pkNXlAUj5cg";

// const API_SECRET = "98PlDLy4MDpdNU3Vn9aLXcUk0A3oLaddu4fF";
const API_KEY = "A3pKqeHcrCV50v3nQCf9gT9xpOl0RJPvUINY";

const API_SECRET = "DKCC4lPKRR9NovjVAScFGr3rFITwPZvegGr3";

const MeetingCfg = (meetingId, nickname, password) => ({

  apiKey: API_KEY,

  apiSecret: API_SECRET,

  meetingNumber: meetingId,

  userName: nickname,

  passWord: password,

  leaveUrl: "https://zoom.us",

  role: 1

})

// what variable you hook into Vue's prototype will be available on ANY vue component

Vue.prototype.$ZoomMtg = ZoomMtg

Vue.prototype.$MeetingCfg = MeetingCfg