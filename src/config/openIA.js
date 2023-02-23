const { Configuration, OpenAIApi } = require('openai')

async function createOpenAIApi() {
  const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_KEY,
  })

  return new OpenAIApi(configuration)
}

module.exports = createOpenAIApi;
