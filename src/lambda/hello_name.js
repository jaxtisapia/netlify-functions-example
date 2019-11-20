exports.handler = async (event, context, callback) => {
    console.log("event",  event);
    console.log("context",  context.body, JSON.parse(context.body));
    
    callback(null, {
        statusCode: 301,
        headers: {
            Location: 'https://novomed-portal-qa.netlify.com/dashboard/appointments',
        },
    });
};
