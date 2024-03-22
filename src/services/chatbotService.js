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
            };

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
        } catch (e) {
            reject(e);
        }
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
                        'url': 'https://i.pinimg.com/564x/4f/a9/65/4fa965953eca58e83539070ba49bc800.jpg',
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
        } catch (e) {
            reject(e);
        }
    });
};

let sendLearnMore = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Send a generic template message
            let response = {
                "attachment": {
                    "type": "template",
                    "payload": {
                        "template_type": "generic",
                        "elements": [
                            {
                                "title": "សេវាកម្ម",
                                "image_url": "https://i.pinimg.com/736x/67/6f/61/676f616b3aa4ad242863d94c89df75e3.jpg",
                                "subtitle": "សេវាកម្មរបស់ពួកយើង",
                                "default_action": {
                                    "type": "web_url",
                                    "url": "https://www.originalcoastclothing.com/",
                                    "webview_height_ratio": "tall"
                                },
                                "buttons": [{
                                    "type": "postback",
                                    "title": "ពត៍មានបន្ថែម",
                                    "payload": "DETIAL_INFO"
                                }]
                            },
                            {
                                "title": "តម្លៃ",
                                "image_url": "https://i.pinimg.com/564x/2a/e0/15/2ae015b00d2f9dea172c6ca256f2196f.jpg",
                                "subtitle": "លោកអ្នកអាចជ្រើសរើសនូវជម្រើសតម្លៃដ៏ច្រើនបែប",
                                "default_action": {
                                    "type": "web_url",
                                    "url": "https://www.originalcoastclothing.com/",
                                    "webview_height_ratio": "tall"
                                },
                                "buttons": [{
                                    "type": "postback",
                                    "title": "ពត៍មានបន្ថែម",
                                    "payload": "DETIAL_INFO"
                                }]
                            },
                            {
                                "title": "សេវាកម្ម",
                                "image_url": "https://i.pinimg.com/736x/67/6f/61/676f616b3aa4ad242863d94c89df75e3.jpg",
                                "subtitle": "សេវាកម្មរបស់ពួកយើង",
                                "default_action": {
                                    "type": "web_url",
                                    "url": "https://www.originalcoastclothing.com/",
                                    "webview_height_ratio": "tall"
                                },
                                "buttons": [{
                                    "type": "postback",
                                    "title": "ពត៍មានបន្ថែម",
                                    "payload": "DETIAL_INFO"
                                }]
                            },
                            {
                                "title": "តម្លៃ",
                                "image_url": "https://i.pinimg.com/564x/4d/68/fc/4d68fc547649d93b7e9d3e6f5b04b819.jpg",
                                "subtitle": "លោកអ្នកអាចជ្រើសរើសនូវជម្រើសតម្លៃដ៏ច្រើនបែប",
                                "default_action": {
                                    "type": "web_url",
                                    "url": "https://www.originalcoastclothing.com/",
                                    "webview_height_ratio": "tall"
                                },
                                "buttons": [{
                                    "type": "postback",
                                    "title": "ពត៍មានបន្ថែម",
                                    "payload": "DETIAL_INFO"
                                }]
                            },
                        ],
                    }
                }
            };
            await sendMessage(sender_psid, response);
            resolve('Done');
        } catch (e) {
            reject(e);
        }
    });
};

let handleProductDetial = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log('Inside handleProductDetial function');
            
            // Send a generic template message
            let response = { 
                "text": `តើលោកអ្នកពិបាកក្នុងការធ្វើទីផ្សារផលិតផលឬសេវាកម្មលើប្រពន្ធ័ផ្សព្វផ្សាយ ដើម្បីជម្រុញការលក់ណាស់មែនទេ?

                😍
                ជ្រើសរើសយកសេវាកម្មរបស់យើងខ្ញុំ ធានាថាអតិថិជន និងតាមដាន Facebook Page ជាប្រចាំមិនខាន
                👍🏻
                រៀបចំ Facebook Page អោយមានស្តង់ដារ
                👍🏻
                សរសេរ Caption និងរៀបចំ Post អោយមានភាពទាក់ទាញ 
                👍🏻
                រៀបចំ Boost Post អោយចំអតិជនគោលដៅ និងកាត់បន្ថយថ្លៃចំនាយ 
                👍🏻
                រៀបចំ Messages ឆ្លើយតបជាមួយអតិថិជនដោយស្វ័យប្រវត្តិ 
                👍🏻
                ដោះស្រាយបញ្ហា Facebook Page 
                👍🏻
                វិភាគលើរបាយការណ៍អតិថិជនចាស់ និងអតិថិជនថ្មី
                🥰
                ក្រុមហ៊ុនយើងខ្ញុំ ជាក្រុមហ៊ុនបច្ចេកវិទ្យាប្រព័ន្ធផ្សព្វផ្សាយឈានមុខគេប្រកបដោយភាពច្នៃប្រឌិតថ្មី មានប្រសិទ្ធិភាពខ្ពស់ដោយភ្ជាប់ទៅអ្នកប្រើប្រាស់ និងអ្នកផ្សាយពាណិជ្ជកម្ម 
                `
            };
            await sendMessage(sender_psid, response);
            resolve('Done');
        } catch (e) {
            console.error('Error in handleProductDetial:', e);
            reject(e);
        }
    });
}


let requestTalkToAgent = (sender_psid) => {
    return new Promise((resolve, reject) => {
        try {

        } catch (e) {
            reject(e);
        }
    });
};




module.exports = {
    sendMessage,
    handleFirstUser,
    sendLearnMore,
    requestTalkToAgent,
    handleProductDetial,
};