# Investec Card Code Generator

This is a simple script that generates Investec programmable card code using an openai. 

It is currently set to use the OpenAI API, but it can be easily modified to work with other APIs that are compatible with the OpenAI API.

GPT-4.1 is used.

The script uses nodejs and works well when paired with the investec-ipb cli application.

## Installation
```sh
npm install
```

## Configuration
Create a `.env` file in the root directory and add your OpenAI API key:
```sh
cp .env.example .env
```

Then edit the `.env` file and add your OpenAI API key.

## Usage
```sh
node . <prompt>
```
Currently the output is displayed to the terminal but it will also save it to a file named main.js in the current directory.

## Example
```sh
node . 'limit transactions to only Woolworths, Checkers and Spar'
```

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```
