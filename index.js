exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello this change made from github commit'),
    };
    return response;
};