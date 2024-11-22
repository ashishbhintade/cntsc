import { Client } from "..";
import { Payload } from "../constants";
import { das } from "../types/das";


export class Das {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    async SamplingStats(): Promise<das.SamplingStats> {
        const jsonRequest: any = {
            ...Payload,
            method: "das.SamplingStats",
            params: [],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async WaitCatchUp(): Promise<any> {
        const jsonRequest: any = {
            ...Payload,
            method: "das.WaitCatchUp",
            params: [],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }
}