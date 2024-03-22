require('dotenv').config();
import request from 'request';
import homepageService from './homepageService';



// Sends response messages via the Send API
let sendMessage = (sender_psid, response) => {


    return new Promise(async (resolve, reject) => {
        try {
            await homepageService.markMessageRead(sender_psid);
            await homepageService.sendTypingOn(sender_psid);
            // Construct the message body
            let request_body = {
                "recipient": {
                    "id": sender_psid
                },
                "message": response
            }


            // Send the HTTP request to the Messenger Platform
            request({
                "uri": "https://graph.facebook.com/v6.0/me/messages",
                "qs": {
                    "access_token": process.env.PAGE_ACCESS_TOKEN
                },
                "method": "POST",
                "json": request_body
            }, (err, res, body) => {
                if (!err) {
                    resolve('message sent!')
                } else {
                    reject("Unable to send message:" + err);
                }
            });
        } catch {
            reject('Try again')
        };
    });
};

let handleFirstUser = (sender_psid, response) => {
    return new Promise(async (resolve, reject) => {
        try {
            let username = await homepageService.getUserName(sender_psid);
            let firstResponse = {
                "text": `👋 សួស្ដី, ${username} ❤️! អរគុណសម្រាប់ការទំនាក់ទំនងមកកាន់យើងខ្ញុំ 🤔 \n\n តើមានអ្វីខ្ញុំអាចជួយអ្នកបាន?`
            };

            // send an image
            let secondResponse = {
                "attachment": {
                    'type': 'image',
                    'payload': {
                        'url': 'https://i.pinimg.com/564x/d9/03/0a/d9030a5696d2507a1dfb38a686ac93c2.jpg',
                    }
                }
            }

            // Quick reply to learn more about product
            let learnMore = {
                "text": "ចុចប៊ូតុងខាងក្រោមដើម្បីទទួលបានពត៍មានបន្ថែម",
                "quick_replies": [{
                    "content_type": "text",
                    "title": "ពត៍មានបន្ថែម",
                    "payload": "LEARN_MORE",
                    "image_url": "http://example.com/img/red.png"
                }],
            };

            await sendMessage(sender_psid, firstResponse);
            await sendMessage(sender_psid, secondResponse);
            await sendMessage(sender_psid, learnMore);

            resolve('DONE');
        }
        catch (e) {
            reject(e);
        }
    });
};


module.exports = {
    sendMessage,
    handleFirstUser,
};