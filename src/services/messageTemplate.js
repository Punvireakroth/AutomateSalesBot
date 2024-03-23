let sendLearnMoreTemplate = () => {
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
    return response;
}

module.exports = {
    sendLearnMore,
};