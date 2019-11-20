exports.handler = async (event, context, callback) => {
    console.log("event",  event.body, typeof event.body);
    console.log("context",  context);
    
    callback(null, {
        statusCode: 301,
        headers: {
            Location: 'https://novomed-portal-qa.netlify.com/dashboard/appointments',
        },
    });
};
