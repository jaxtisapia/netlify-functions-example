exports.handler = async (event, context) => {
  const name = event.queryStringParameters.name || "World";
  
  console.log("test justice", name)

  return {
    statusCode: 200,
    body: `Hello, ${name}`
  };
};
