export default handler => async (event, context, callback) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, body: {} };
  }
  return handler(event, context, callback);
};
