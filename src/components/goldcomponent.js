import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin';

const GoldComponent = () =>{
    useEffect(()=>{
        (function(d, m){
            /*---------------- Kommunicate settings start ----------------*/
            // var kommunicateSettings = {
            //     "appId":"25ff8cf9eb11112b6467ad19b447e13d1",  // Replace <APP_ID> with your APP_ID which you can find in install section of dashboard
            //     "automaticChatOpenOnNavigation":false,
            //     "botIds":["alex-t0w2q"]
            // };

            var kommunicateSettings = {
                "appId":"25ff8cf9eb11112b6467ad19b447e13d1",  // Replace <APP_ID> with your APP_ID which you can find in install section of dashboard
                "automaticChatOpenOnNavigation":true,
                "botIds":["alex-t0w2q"],
                "defaultBotIds": ["alex-t0w2q"], // Optional. Replace <BOT_ID> with your bot ID which you can find in bot section of dashboard. Include this parameter if you want to assign the conversation to a bot.
                "defaultAssignee": "alex-t0w2q",
                // "onInit": function() {
                //     Kommunicate.launchConversation();
                // }
            };
            /*----------------- Kommunicate settings end ------------------*/
            var s = document.createElement("script");
            s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0];
            h.appendChild(s);
            window.kommunicate = m;
            m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    },[]);
    return(
        <Fragment>
            <h1> Welcome to gold component</h1>
        </Fragment>
    )
}

export default GoldComponent