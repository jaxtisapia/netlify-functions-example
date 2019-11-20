exports.handler = async (event, context, callback) => {
    callback(null, {
        statusCode: 301,
        headers: {
            Location: 'https://novomed-portal-qa.netlify.com',
        },
    });
};
