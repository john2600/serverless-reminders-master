'use strict';

module.exports.sendReminderDaily = (event, context, callback) => {

    var AWS = require('aws-sdk');
    AWS.config.update({region:'us-east-1'});
    var ses = new AWS.SES();
    var fs = require('fs');

    var emailHtml = fs.readFileSync('./dailyReminder.html', 'utf-8');

    var toAndFromAdress = 'ingnamespace@gmail.com'
    var params = {
        Destination: {
            ToAddresses: [toAndFromAdress]
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: emailHtml
                },
                Text: {
                    Charset: "UTF-8",
                    Data: "Recuerda continuar ayudando a la tienda de mascotas!"
                }
            },
            Subject: {
                Charset: "UTF-8",
                Data: "Recordatorio tienda Mascotas Cedritos"
            }
        },
        ReplyToAddresses: [toAndFromAdress],
        Source: toAndFromAdress,
    };

    ses.sendEmail(params, function(err, data) {
        // an error occurred
        if (err) console.log(err, err.stack);
        // successful response
        else callback(null, data);
    });
};

module.exports.sendReminderWeekend = (event, context, callback) => {

    var AWS = require('aws-sdk');
    AWS.config.update({region:'us-east-1'});
    var ses = new AWS.SES();
    var fs = require('fs');

    var emailHtml = fs.readFileSync('./weekendReminder.html', 'utf-8');

    var toAndFromAdress = 'ingnamespace@gmail.com'
    var params = {
        Destination: {
            ToAddresses: [toAndFromAdress]
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: emailHtml
                },
                Text: {
                    Charset: "UTF-8",
                    Data: "Este es una Recordatorio del fin de semana. Recuerda que las mascotas son increibles!!"
                }
            },
            Subject: {
                Charset: "UTF-8",
                Data: "Recordatorio tienda Mascotas Cedritos"
            }
        },
        ReplyToAddresses: [toAndFromAdress],
        Source: toAndFromAdress,
    };

    ses.sendEmail(params, function(err, data) {
        // an error occurred
        if (err) console.log(err, err.stack);
        // successful response
        else callback(null, data);
    });
};
