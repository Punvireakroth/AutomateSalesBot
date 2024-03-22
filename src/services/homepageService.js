import request from 'request';

let handleSetupProfileAPI = () => {
    return new Promise((resolve, reject) => {
        try {
            let url = `https://graph.facebook.com/v18.0/me/messenger_profile?access_token=${process.env.PAGE_ACCESS_TOKEN}`;
            let request_body = { 
                "greeting":[
                    {
                      "locale":"default",
                      "text":"Hello!"
                    }, {
                      "locale":"en_US",
                      "text":"Timeless apparel for the masses."
                    },
                ],
                "persistent_menu": [
                    {
                        "locale": "default",
                        "composer_input_disabled": false,
                        "call_to_actions": [
                            {
                                "type": "postback",
                                "title": "Talk to an agent",
                                "payload": "CARE_HELP"
                            },
                            {
                                "type": "postback",
                                "title": "Outfit suggestions",
                                "payload": "CURATION"
                            },
                            {
                                "type": "web_url",
                                "title": "Shop now",
                                "url": "https://www.originalcoastclothing.com/",
                                "webview_height_ratio": "full"
                            }
                        ]
                    }
                ],
                "whitelisted_domains":[
                    "https://punvireakroth.github.io/VireakRoth-Portfolio/",
                    
                ],

            };
            request({
                "uri": url,
                "method": "POST",
                "json": request_body,
            }, (err, res, body) => {
                if (!err) {
                    resolve('DONE')
                } else {
                    reject('Unable to send message' + err)
                }
            });
        } catch (e) {
            reject(e);
        }
    });
}


module.exports = {
    handleSetupProfileAPI,
}