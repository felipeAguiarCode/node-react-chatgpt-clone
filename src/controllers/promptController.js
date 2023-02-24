const express = require("express")
const open = require("../config/openIA")
const InputPrompt = require("../models/input-prompt")

const { Configuration, OpenAIApi } = require('openai')

require("dotenv").config()

module.exports = {
	async sendText(req, res){

		//const openai = await open.createOpenAIApi()

		const configuration = new Configuration({
			apiKey: process.env.OPEN_AI_KEY,
		})

		const openai = new OpenAIApi(configuration)

		const prompt = req.body.prompt
		console.log(prompt)

		try {
			const response = await openai.createCompletion({
				model:"text-davinci-003",
				prompt:`
					${prompt}
					###
				`,
				max_tokens: 64,
				temperature:0,
				top_p:1.0,
				frequency_penalty: 0.0,
				presence_penalty: 0.0,
				stop: ["\n"]
			})

			return res.status(200).json({
				sucess: true,
				data: response.data.choices[0].text
			})

		} catch (error) {

			return res.status(400).json({
				sucess: false,
				error: error.response
				? error.response.data
				: 'There was an inssue on the server'
			})

		}
	}

}




