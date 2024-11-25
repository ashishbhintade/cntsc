import { Client } from "..";
import { Payload } from "../constants";
import { fraud } from "../types/fraud";

export class Fraud {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    async Get(proofType: fraud.ProofType): Promise<fraud.Proof[]> {
        const jsonRequest: any = {
            ...Payload,
            method: "fraud.Get",
            params: [proofType],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    // TODO implemet Subscribe method 
}
