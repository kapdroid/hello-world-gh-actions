const core = require('@actions/core');
const github = require('@actions/github');
import {PushEvent} from '@octokit/webhooks-definitions/schema'

try{
    if (github.context.eventName === 'push') {
        const pushPayload = github.context.payload
        core.info(`The head commit is: ${pushPayload.head_commit}`)
    }
    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Hello ${nameToGreet}!`);
    const time=(new Date()).toTimeString();
    core.setOutput("time",time);
}
catch (error){
    core.setFailed(error.message);
}




