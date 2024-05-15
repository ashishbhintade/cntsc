import { Blob } from "./blob";
import { Das } from "./das";
import { Fraud } from "./fraud";
import { Node } from "./node";

export class Client {
    url: string;
    apiKey: string;
    log: boolean;
    Blob: Blob;
    Das: Das;
    Fraud: Fraud;
    Node: Node;

    constructor(url: string, apiKey: string, log: boolean = false) {
        this.url = url;
        this.apiKey = apiKey;
        this.log = log;

        this.Blob = new Blob(this);
        this.Das = new Das(this);
        this.Fraud = new Fraud(this);
        this.Node = new Node(this);
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
