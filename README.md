# Serverless Framework Openwhisk Slack Slash Command Example

This project is a simple example of creating a serverless/openwhisk-based function to be invoked by a Slack slash command. For this example, we will be using a free API to get a [random famous quote via Mashape](https://market.mashape.com/andruxnet/random-famous-quotes).

![example usage](https://github.com/chiefy/slashquotr/raw/master/img/slack-ex.png)

## Requirements

* Node (>=6.x)
* [npm](https://npmjs.com)
* [serverless framework](https://serverless.com/)
* [IBM Bluemix Account](https://console.bluemix.net/registration/) (free for 30 days)
* [`wsk` cli utility](https://github.com/apache/incubator-openwhisk/blob/master/docs/cli.md)

## Openwhisk Setup

In order to deploy this project to OpenWhisk, you will need to follow the [quickstart guide](https://serverless.com/framework/docs/providers/openwhisk/guide/quick-start/).

## Mashape API Key

You will need a [Mashape](https://market.mashape.com) API key, signup and export your key:

```
$ export MASHAPE_API_KEY=<your-mashape-api-key>
```

## Initial Slack Setup

![slack setup](https://github.com/chiefy/slashquotr/raw/master/img/slack-setup.png)

Create a new Slack slash command for your Slack team. Make note of the secret token. Set the method to `GET` and keep the window open, we will fill in our OpenWhisk web action's URL after deployment.

```
$ export SLACK_TOKEN=<your-slack-slash-cmd-token>
```

## Deployment

To deploy the project after OpenWhisk setup is complete:

```
$ make deploy
```

## Post-deploy

Go back to the Slack slash command editing page and insert the URL for your web action.
