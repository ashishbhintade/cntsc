import { Blob } from "./blob";
import { Das } from "./das";
import { Fraud } from "./fraud";
import { Header } from "./header";
import { Node } from "./node";
import { P2P } from "./p2p";
import { Share } from "./share";
import { State } from "./state";

export class Client {
    url: string;
    apiKey: string;
    log: boolean;
    Blob: Blob;
    Das: Das;
    Fraud: Fraud;
    Header: Header;
    Node: Node;
    P2P: P2P;
    Share: Share;
    State: State;

    constructor(url: string, apiKey: string, log: boolean = false) {
        this.url = url;
        this.apiKey = apiKey;
        this.log = log;

        this.Blob = new Blob(this);
        this.Das = new Das(this);
        this.Fraud = new Fraud(this);
        this.Header = new Header(this);
        this.Node = new Node(this);
        this.P2P = new P2P(this);
        this.Share = new Share(this);
        this.State = new State(this);
    }

    async request(payload: any): Promise<any> {
        const headers: HeadersInit = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.apiKey}`,
        };

        try {
            const response = await fetch(this.url, {
                method: "POST",
                headers,
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const jsonResponse = await response.json();

            if (jsonResponse.error) {
                throw new Error(`${jsonResponse.error.message}`);
            }

            // Handle the JSON-RPC response
            return jsonResponse.result;
        } catch (error) {
            // Handle any errors that occurred during the fetch
            throw new Error(`Error during fetch: ${error}`);
        }
    }
}
