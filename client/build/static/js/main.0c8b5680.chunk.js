(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{116:function(e,a){},118:function(e,a){},128:function(e,a,t){},129:function(e,a,t){},132:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(47),i=t.n(r),o=(t(67),t(2)),l=t(48),s=t.n(l),m=t(21),u=t.n(m),d=t(49),p=t(51),g=(t(61),t(131),t(128),function(){return c.a.createElement("header",{className:"dropShadow"},c.a.createElement("div",{className:"headerWrapper"},c.a.createElement("div",{className:"headerContainer flex"},c.a.createElement("div",{className:"headerLogoLinkWrapper"},c.a.createElement("div",{className:"headerLogoLink"},c.a.createElement("a",{href:"/"},c.a.createElement("div",{className:"headerLogo flex flex-row"},c.a.createElement("div",{className:"logoImg"}),c.a.createElement("div",{className:"logoText"},"RoboticArcade.com Video Stream"))))))))});t(129);var f=function(){return c.a.createElement("footer",null)},v=(t(130),t(52)),b=t.n(v),h=t(53),E=t.n(h),w=t(54),k=t.n(w),j=t(55),O=t.n(j),x=t(56),y=t.n(x),C=t(57),N=t.n(C),S=t(58),T=t.n(S),z=t(59),V=t.n(z),I=t(60),D=t.n(I),L=c.a.lazy((function(){return t.e(3).then(t.bind(null,134))})),P=new p.Howl({src:[D.a],loop:!0,preload:!0});var R=function(){var e,a,t,r,i,l=Object(n.useState)(""),m=Object(o.a)(l,2),p=m[0],v=m[1],h=Object(n.useState)({}),w=Object(o.a)(h,2),j=w[0],x=w[1],C=Object(n.useState)(),S=Object(o.a)(C,2),z=S[0],I=S[1],D=Object(n.useState)(!1),R=Object(o.a)(D,2),q=R[0],M=R[1],U=Object(n.useState)(""),W=Object(o.a)(U,2),A=W[0],B=W[1],F=Object(n.useState)(!1),J=Object(o.a)(F,2),Y=J[0],_=J[1],H=Object(n.useState)(),$=Object(o.a)(H,2),G=$[0],K=$[1],Q=Object(n.useState)(!1),X=Object(o.a)(Q,2),Z=X[0],ee=X[1],ae=Object(n.useState)(!1),te=Object(o.a)(ae,2),ne=te[0],ce=(te[1],Object(n.useState)("")),re=Object(o.a)(ce,2),ie=re[0],oe=re[1],le=Object(n.useState)(!1),se=Object(o.a)(le,2),me=se[0],ue=se[1],de=Object(n.useState)(""),pe=Object(o.a)(de,2),ge=pe[0],fe=pe[1],ve=Object(n.useState)(!1),be=Object(o.a)(ve,2),he=be[0],Ee=be[1],we=Object(n.useState)(!1),ke=Object(o.a)(we,2),je=ke[0],Oe=ke[1],xe=Object(n.useState)(!1),ye=Object(o.a)(xe,2),Ce=ye[0],Ne=ye[1],Se=Object(n.useState)(!1),Te=Object(o.a)(Se,2),ze=Te[0],Ve=Te[1],Ie=Object(n.useRef)(),De=Object(n.useRef)(),Le=Object(n.useRef)(),Pe=Object(n.useRef)(),Re=c.a.createElement(c.a.Fragment,null,c.a.createElement(g,null),c.a.createElement("main",null,c.a.createElement("div",{className:"u-margin-top-xxlarge u-margin-bottom-xxlarge"},c.a.createElement("div",{className:"o-wrapper-l"},c.a.createElement("div",{className:"hero flex flex-column"},c.a.createElement("div",null,c.a.createElement("div",{className:"descriptionText"})),c.a.createElement("div",null,c.a.createElement("div",{className:"actionText"},"Session ID:",c.a.createElement("span",{className:ze?"username highlight copied":"username highlight",onClick:function(){navigator.clipboard.writeText(p),Ve(!0),setInterval((function(){Ve(!1)}),1e3)}},p))),c.a.createElement("div",{className:"callBox flex"},c.a.createElement("input",{type:"text",placeholder:"Session ID",value:ie,onChange:function(e){return oe(e.target.value)},className:"form-input"}),c.a.createElement("button",{onClick:function(){return function(e){if(""===e||!j[e]||e===p)return fe("We think the username entered is wrong. Please check again and retry!"),void ue(!0);navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(a){I(a),_(!0),B(e),Ie.current&&(Ie.current.srcObject=a);var t=new u.a({initiator:!0,trickle:!1,config:{iceServers:[{urls:"stun:numb.viagenie.ca",username:"sultan1640@gmail.com",credential:"98376683"},{urls:"turn:numb.viagenie.ca",username:"sultan1640@gmail.com",credential:"98376683"}]},stream:a});Pe.current=t,t.on("signal",(function(a){Le.current.emit("callUser",{userToCall:e,signalData:a,from:p})})),t.on("stream",(function(e){De.current&&(De.current.srcObject=e)})),t.on("error",(function(e){qe()})),Le.current.on("callAccepted",(function(e){ee(!0),t.signal(e)})),Le.current.on("close",(function(){window.location.reload()})),Le.current.on("rejected",(function(){window.location.reload()}))})).catch((function(){fe("You cannot place/ receive a call without granting video and audio permissions! Please change your settings to use Cuckoo."),ue(!0)}))}(ie.toLowerCase().trim())},className:"primaryButton"},"Connect")))))),c.a.createElement(f,null));function qe(){Pe.current.destroy(),Le.current.emit("close",{to:A}),window.location.reload()}function Me(){z&&(Ee(!he),z.getAudioTracks()[0].enabled=he)}function Ue(){z&&(Oe(!je),z.getVideoTracks()[0].enabled=je)}Object(n.useEffect)((function(){Le.current=s.a.connect("/"),Le.current.on("yourID",(function(e){v(e)})),Le.current.on("allUsers",(function(e){x(e)})),Le.current.on("hey",(function(e){M(!0),P.play(),B(e.from),K(e.signal)}))}),[]),z&&(e=c.a.createElement("video",{className:"userVideo",playsInline:!0,muted:!0,ref:Ie,autoPlay:!0})),Z&&Ce?a=c.a.createElement("video",{className:"partnerVideo cover",playsInline:!0,ref:De,autoPlay:!0}):Z&&!Ce&&(a=c.a.createElement("video",{className:"partnerVideo",playsInline:!0,ref:De,autoPlay:!0})),!q||Z||ne||(t=c.a.createElement("div",{className:"incomingCallContainer"},c.a.createElement("div",{className:"incomingCall flex flex-column"},c.a.createElement("div",null,"Connecting",c.a.createElement("span",{className:"callerID"}," ",A)),(function(){return P.unload(),void navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){I(e),Ie.current&&(Ie.current.srcObject=e),ee(!0);var a=new u.a({initiator:!1,trickle:!1,stream:e});Pe.current=a,a.on("signal",(function(e){Le.current.emit("acceptCall",{signal:e,to:A})})),a.on("stream",(function(e){De.current.srcObject=e})),a.on("error",(function(e){qe()})),a.signal(G),Le.current.on("close",(function(){window.location.reload()}))})).catch((function(){fe("You cannot place/ receive a call without granting video and audio permissions! Please change your settings to use Cuckoo."),ue(!0)}))})))),r=he?c.a.createElement("span",{className:"iconContainer",onClick:function(){return Me()}},c.a.createElement("img",{src:O.a,alt:"Unmute audio"})):c.a.createElement("span",{className:"iconContainer",onClick:function(){return Me()}},c.a.createElement("img",{src:k.a,alt:"Mute audio"})),i=je?c.a.createElement("span",{className:"iconContainer",onClick:function(){return Ue()}},c.a.createElement("img",{src:E.a,alt:"Resume video"})):c.a.createElement("span",{className:"iconContainer",onClick:function(){return Ue()}},c.a.createElement("img",{src:b.a,alt:"Stop audio"}));var We=c.a.createElement("span",{className:"iconContainer",onClick:function(){navigator.mediaDevices.getDisplayMedia({cursor:!0}).then((function(e){Pe.current.replaceTrack(z.getVideoTracks()[0],e.getVideoTracks()[0],z),Ie.current.srcObject=e,e.getTracks()[0].onended=function(){Pe.current.replaceTrack(e.getVideoTracks()[0],z.getVideoTracks()[0],z),Ie.current.srcObject=z}}))}},c.a.createElement("img",{src:y.a,alt:"Share screen"}));(function(){var e,a=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(a=!0),a})()&&(We=c.a.createElement(c.a.Fragment,null));var Ae,Be=c.a.createElement("span",{className:"iconContainer",onClick:function(){return qe()}},c.a.createElement("img",{src:N.a,alt:"End call"}));return Ae=Ce?c.a.createElement("span",{className:"iconContainer",onClick:function(){Ne(!1)}},c.a.createElement("img",{src:V.a,alt:"fullscreen"})):c.a.createElement("span",{className:"iconContainer",onClick:function(){Ne(!0)}},c.a.createElement("img",{src:T.a,alt:"fullscreen"})),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{style:{display:ne||Z||Y?"none":"block"}},Re,c.a.createElement(d.a,{visible:me,onClose:function(){return ue(!1)},width:20,height:5,measure:"em",closeOnEsc:!0},c.a.createElement("div",null,ge)),t),c.a.createElement("div",{className:"callContainer",style:{display:ne||Z||Y?"block":"none"}},c.a.createElement(n.Suspense,{fallback:c.a.createElement("div",null,"Loading...")},c.a.createElement(L,null)),c.a.createElement("div",{className:"partnerVideoContainer"},a),c.a.createElement("div",{className:"userVideoContainer"},e),c.a.createElement("div",{className:"controlsContainer flex"},r,i,We,Ae,Be)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},52:function(e,a,t){e.exports=t.p+"static/media/camera.299a8f67.svg"},53:function(e,a,t){e.exports=t.p+"static/media/camera-stop.85f8745d.svg"},54:function(e,a,t){e.exports=t.p+"static/media/microphone.a2374838.svg"},55:function(e,a,t){e.exports=t.p+"static/media/microphone-stop.09d0b6c2.svg"},56:function(e,a,t){e.exports=t.p+"static/media/share.e7b143c0.svg"},57:function(e,a,t){e.exports=t.p+"static/media/hang-up.1b1f0dc8.svg"},58:function(e,a,t){e.exports=t.p+"static/media/fullscreen.8f5e7921.svg"},59:function(e,a,t){e.exports=t.p+"static/media/minimize.fff27c21.svg"},60:function(e,a,t){e.exports=t.p+"static/media/ringtone.0be3c651.mp3"},61:function(e,a,t){e.exports=t.p+"static/media/cuckoo-logo.8c9e061e.svg"},62:function(e,a,t){e.exports=t(132)},67:function(e,a,t){},98:function(e,a){}},[[62,1,2]]]);
//# sourceMappingURL=main.0c8b5680.chunk.js.map