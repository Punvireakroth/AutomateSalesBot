require('dotenv').config();
import request from 'request';

let handleSetupProfileAPI = () => {
    return new Promise((resolve, reject) => {
        try {
            let url = `https://graph.facebook.com/v6.0/me/messenger_profile?access_token=${process.env.PAGE_ACCESS_TOKEN}`;
            let request_body = {
                "get_started": {
                    "payload": "GET_STARTED"
                },
                "persistent_menu": [{
                    "locale": "default",
                    "composer_input_disabled": false,
                    "call_to_actions": [{
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
                }],
                "whitelisted_domains": [
                    "https://e119-217-197-11-10.ngrok-free.app",

                ],

            };
            request({
                "uri": url,
                "method": "POST",
                "json": request_body,
            }, (err, res, body) => {
                if (!err) {
                    // console.log(body);
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

let getUserName = (serder_psid) => {
    let url = `https://graph.facebook.com/${serder_psid}?fields=first_name,last_name,profile_pic&access_token=${process.env.PAGE_ACCESS_TOKEN}`
    return new Promise((resolve, reject) => {
        try {
            request({
                "uri": url,
                "method": "GET",
            }, (err, res, body) => {
                if (!err) {
                    body = JSON.parse(body);
                    let username = `${body.first_name} ${body.last_name}`;
                    resolve(username);
                } else {
                    reject('Unable to send message' + err)
                }
            });

        } catch (e) {
            reject(e)
        }
    });
}

let sendTypingOn = (sender_psid) => {
    return new Promise((resolve, reject) => {
        let request_body = {
            "recipient": {
                "id": sender_psid,
            },
            "sender_action":"typing_on"
        }
        let url = `https://graph.facebook.com/v2/me/messages?access_token=${process.env.PAGE_ACCESS_TOKEN};`;
        try {
            request({
                "uri": url,
                "method": "GET",
                "json": request_body,
            }, (err, res, body) => {
                if (!err) {
                    resolve("Done");
                } else {
                    reject('Unable to send message' + err)
                }
            });
        } catch (e) {
            reject(e);
        }
    });
};

let markMessageRead = (sender_psid) => {
    return new Promise((resolve, reject) => {
        let request_body = {
            "recipient": {
                "id": sender_psid,
            },
            "sender_action":"mark_seen"
        }
        let url = `https://graph.facebook.com/v2/me/messages?access_token=${process.env.PAGE_ACCESS_TOKEN};`;
        try {
            request({
                "uri": url,
                "method": "GET",
                "json": request_body,
            }, (err, res, body) => {
                if (!err) {
                    resolve("Done");
                } else {
                    reject('Unable to send message' + err)
                }
            });
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    handleSetupProfileAPI,
    getUserName,
    sendTypingOn,
    markMessageRead,
}