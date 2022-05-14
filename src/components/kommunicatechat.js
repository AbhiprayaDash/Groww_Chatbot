import React, { useState, useEffect } from 'react';

const KommunicateChat = () =>{
    useEffect(()=>{
        (function(d, m){
            var kommunicateSettings = {"appId":"25ff8cf9eb11112b6467ad19b447e13d1","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
          })(document, window.kommunicate || {});
    })
    return(
        <div></div>
    )
}

export default KommunicateChat