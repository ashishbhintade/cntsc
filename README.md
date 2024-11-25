# Celestia Node Typescript Client

TypeScript SDK to interact with the Celestia Node.

## Motivation

I decided to work on this project because it was suggested during the Celestia hackathon brainstorming session. In any case, I found it useful for another project I'm working on which is balance tracker for Celestia. Even though finishing that project on time seems unlikely, at least this library is ready to use.

Another reason is that I wanted to try publishing something on NPM to see how it works. 

## Installation

Use following command to use library in your project:

```bash
npm install https://github.com/ashishbhintade/cntsc.git
```

## Quick Start

To use this library, you'll first need to initiate your own Celestia node and generate an authentication token. You need node url and the auth token to instantiate the Client. Here is the guide on [how to run the Celestia light node](https://docs.celestia.org/nodes/light-node).

```ts
import { Client } from "cntsc";

let client: Client = new Client("YOUR_NODE_URL", "AUTH_TOKEN");

await client.Blob.GetAll(42, ["AAAAAAAAAAAAAAAAAAAAAAAAAAECAwQFBgcICRA="]);
```

## Supported Enpoints

- Blob
- DAS
- Fraud
- Header
- Node
- P2P
- Share
- State

## Next Steps

Right now, all endpoints are tested manually. However, I want write tests, create more examples for each endpoint along with better explanation and complete the implementation of the remaining types, which are currently substituted with "any".