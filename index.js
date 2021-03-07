exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello ollie from Lambda and Github!'),
    };
    return response;
};