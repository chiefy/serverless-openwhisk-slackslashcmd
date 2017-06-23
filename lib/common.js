'use strict';

const _unirest = require('unirest');

const HEADERS = {
    'Content-Type': 'application/json'
};

const _createResponse = rawResp => {
    rawResp = rawResp || {
        status: 200,
        body: '{}'
    };

    return {
        headers: HEADERS,
        body: new Buffer(JSON.stringify(rawResp.body)).toString('base64'),
        code: rawResp.status
    };
};

// todo
const _createSlackMessage = raw => {
    return {
    };
};

const _checkSlackToken = params => {
    params = params || {};
    return (params.token !== undefined && params.slack_token !== undefined && params.token === params.slack_token);
};

const _handleSlackToken = params => {
    if(_checkSlackToken(params)) {
        return true;
    }
    return _createResponse({
        body: { error: "bad slack token, or no token provided" },
        status: 403
    });
};

module.exports = {
    createResponse: _createResponse,
    handleSlackToken: _handleSlackToken,
    createSlackMessage: _createSlackMessage,
    unirest: _unirest
}
