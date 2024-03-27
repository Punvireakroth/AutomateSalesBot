


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
};


let handleProductDetialTemplate = () => {

    // let information = {
    //     'text': `តើលោកអ្នកពិបាកក្នុងការធ្វើទីផ្សារផលិតផលឬសេវាកម្មលើប្រពន្ធ័ផ្សព្វផ្សាយ ដើម្បីជម្រុញការលក់ណាស់មែនទេ?

    //         😍ជ្រើសរើសយកសេវាកម្មរបស់យើងខ្ញុំ ធានាថាអតិថិជន និងតាមដាន Facebook Page ជាប្រចាំមិនខាន

    //         👍🏻រៀបចំ Facebook Page អោយមានស្តង់ដារ

    //         👍🏻សរសេរ Caption និងរៀបចំ Post អោយមានភាពទាក់ទាញ 

    //         👍🏻រៀបចំ Boost Post អោយចំអតិជនគោលដៅ និងកាត់បន្ថយថ្លៃចំនាយ 

    //         👍🏻រៀបចំ Messages ឆ្លើយតបជាមួយអតិថិជនដោយស្វ័យប្រវត្តិ 

    //         👍🏻ដោះស្រាយបញ្ហា Facebook Page 

    //         👍🏻វិភាគលើរបាយការណ៍អតិថិជនចាស់ និងអតិថិជនថ្មី
            
    //         🥰ក្រុមហ៊ុនយើងខ្ញុំ ជាក្រុមហ៊ុនបច្ចេកវិទ្យាប្រព័ន្ធផ្សព្វផ្សាយឈានមុខគេប្រកបដោយភាពច្នៃប្រឌិតថ្មី មានប្រសិទ្ធិភាពខ្ពស់ដោយភ្ជាប់ទៅអ្នកប្រើប្រាស់ និងអ្នកផ្សាយពាណិជ្ជកម្ម 
    //         `,
    // }

    // let askPrice = {
    //     "text": "ចុចប៊ូតុងខាងក្រោមដើម្បីទទួលបានពត៍មានពីតម្លៃ",
    //     "quick_replies": [{
    //         "content_type": "text",
    //         "title": "សាកសួរតម្លៃ",
    //         "payload": "ASK_PRICE",
    //         "image_url": "http://example.com/img/red.png"
    //     }],
    // };

    let response = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "តើលោកអ្នកពិបាកក្នុងការធ្វើទីផ្សារផលិតផលឬសេវាកម្មលើប្រពន្ធ័ផ្សព្វផ្សាយ ដើម្បីជម្រុញការលក់ណាស់មែនទេ?\n\n😍ជ្រើសរើសយកសេវាកម្មរបស់យើងខ្ញុំ ធានាថាអតិថិជន និងតាមដាន Facebook Page ជាប្រចាំមិនខាន\n\n👍🏻រៀបចំ Facebook Page អោយមានស្តង់ដារ\n\n👍🏻សរសេរ Caption និងរៀបចំ Post អោយមានភាពទាក់ទាញ\n\n👍🏻រៀបចំ Boost Post អោយចំអតិជនគោលដៅ និងកាត់បន្ថយថ្លៃចំនាយ\n\n👍🏻រៀបចំ Messages ឆ្លើយតបជាមួយអតិថិជនដោយស្វ័យប្រវត្តិ\n\n👍🏻ដោះស្រាយបញ្ហា Facebook Page\n\n👍🏻វិភាគលើរបាយការណ៍អតិថិជនចាស់ និងអតិថិជនថ្មី🥰\n\nក្រុមហ៊ុនយើងខ្ញុំ ជាក្រុមហ៊ុនបច្ចេកវិទ្យាប្រព័ន្ធផ្សព្វផ្សាយឈានមុខគេប្រកបដោយភាពច្នៃប្រឌិតថ្មី មានប្រសិទ្ធិភាពខ្ពស់ដោយភ្ជាប់ទៅអ្នកប្រើប្រាស់ និងអ្នកផ្សាយពាណិជ្ជកម្ម ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "សាកសួរតម្លៃ",
                        "payload": "ASK_PRICE"
                    }
                ]
            }
        }
    }


    return response;
}


let requestPricesOptionsTemplate = () => {
    
        let response = {
            "attachment": {
                "type": "template",
                "payload": {
                    "template_type": "button",
                    "text": "👉🏻 សម្រាប់កញ្ចប់ Bronze តម្លៃ 200$/ខែ\n👉🏻 សម្រាប់កញ្ចប់ Silver តម្លៃ 300$/ខែ\n👉🏻 សម្រាប់កញ្ចប់ Gold តម្លៃ 300$/ខែ\n👉🏻 សម្រាប់កញ្ចប់ Platinum តម្លៃ 300$/ខែ\n👉🏻 សម្រាប់កញ្ចប់ Silver តម្លៃ 15%/ខែ នៃតម្លៃ ad",
                    "buttons": [
                        {
                            "type": "postback",
                            "title": "ពត៍មានទំនាក់ទំនង",
                            "payload": "ASK_INFO"
                        }
                    ]
                }
            }
        }

    return response;
}

let vendorInformationTemplate = () => {
    let response = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🏢 ជាន់ទី 6 អាគារ S&C ផ្លូវលេខ 1984A ខណ្ឌសែនសុខ សង្កាត់ភ្នំពេញថ្មី រាជធានីភ្នំពេញ \n\n☎️ ឬអាចទំនាក់មកកាន់លេខទូរស័ព្ទខាងក្រោម",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://www.messenger.com",
                        "title": "011 12345678"
                    },
                    {
                        "type": "web_url",
                        "url": "https://punvireakroth.github.io/VireakRoth-Portfolio/",
                        "title": "Website"
                    },
                    {
                        "type": "web_url",
                        "url": "https://www.messenger.com",
                        "title": "Map"
                    }
                ]
            }
        }
    }
    
    return response;
    }

    module.exports = {
        sendLearnMoreTemplate,
        handleProductDetialTemplate,
        requestPricesOptionsTemplate,
        vendorInformationTemplate
    };