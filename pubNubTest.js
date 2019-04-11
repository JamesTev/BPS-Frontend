var PubNub = require('pubnub');
let pubnub = "";

   
    pubnub = new PubNub({
        publishKey : 'pub-c-3a435a19-3855-453a-85c2-6df1ece3f54c',
        subscribeKey : 'sub-c-353ccd88-5c41-11e9-94f2-3600c194fb1c'
    })
       
    function publishSampleMessage() {
        console.log("Since we're publishing on subscribe connectEvent, we're sure we'll receive the following publish.");
        var publishConfig = {
            channel : "ch1",
            message : {
                title: "Test Message",
                description: "Hellow howsit"
            }
        }
        pubnub.publish(publishConfig, function(status, response) {
            console.log(status, response);
            process.exit(1);
        })
    }
       
    pubnub.addListener({
        status: function(statusEvent) {
            if (statusEvent.category === "PNConnectedCategory") {
                publishSampleMessage();
            }
        },
        message: function(msg) {
            console.log(msg.message.title);
            console.log(msg.message.description);
        },
        presence: function(presenceEvent) {
            // handle presence
        }
    })      
    console.log("Subscribing..");
    pubnub.subscribe({
        channels: ['ch1'] 
    });

    

// pubnub.publish(
//     {
//         message: {
//             such: 'object'
//         },
//         channel: 'ch1',
//         sendByPost: false, // true to send via POST
//         storeInHistory: false, //override default storage options
//         meta: {
//             "cool": "meta"
//         } // publish extra meta with the request
//     },
//     function (status, response) {
//         // handle status, response
//     }
// );