# Music Recommendation Chatbot

This chatbot utilizes Dialogflow, AWS Lambda, and the Spotify API to identify the most famous song by a given artist. Users can ask the chatbot about the most famous song by an artist, and the chatbot will provide the appropriate response using the Spotify API to fetch the top track for the specified artist.

![img](./path/to/screenshot.png)

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Built With](#built-with)
- [License](#license)
- [Contact](#contact)

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Dialogflow account
- AWS account
- Spotify Developer account

### Installation

1. Clone the repository:
git clone https://github.com/RikiyaT/Music-Conversational-Recommender-System.git


2. Set up a Dialogflow agent, intents, and entities as described in the project documentation.

3. Set up an AWS Lambda function and API Gateway as described in the project documentation.

4. Configure the Spotify API in the AWS Lambda function.

5. Add your Lambda function's API Gateway Invoke URL to your Dialogflow agent's webhook.

## Usage

You can test the chatbot in the Dialogflow simulator or integrate it into your desired platform. Just ask the chatbot about the most famous song by an artist, like "What is the most famous song by The Beatles?", and it will respond with the appropriate song.

## Built With

- [Dialogflow](https://cloud.google.com/dialogflow) - Natural Language Processing platform
- [AWS Lambda](https://aws.amazon.com/lambda) - Serverless compute service
- [Spotify API](https://developer.spotify.com/documentation/web-api) - Music data API

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
