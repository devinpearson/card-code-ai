#!/usr/bin/env node
import OpenAI from 'openai';
import "dotenv/config";
import fs from "fs";

const instructions = fs.readFileSync('./instructions.txt').toString();
const client = new OpenAI();
var args = process.argv.slice(2);
// node . 'send a notification after transaction via twilio sms'
// node . 'limit transactions to only Woolworths, Checkers and Spar'
// 'allow transactions that USD or ZAR'
// 'Only allow transactions that are related to petrol stations using the mcc code'
// console.log(args);
if (args.length > 0 && args[0] !== '' && args[0] !== undefined) {
    const response = await client.responses.create({
        model: 'gpt-4.1',
        instructions: instructions,
        input: args[0],
    });
  
    console.log(response.output_text);
    var output = response.output_text;
    // remove ```javascript
    output = output.replace(/```javascript/g, '');
    // remove ```
    output = output.replace(/```/g, '');
    fs.writeFileSync('./main.js', output);
}

// want to generate example transactions that would pass and one that would fail