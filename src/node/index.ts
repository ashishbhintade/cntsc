import { Client } from "..";
import { Payload } from "../constants";

interface Info {
    type: string;
    api_version: string;
}

export class Node {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    async AuthNew(perms: string[]): Promise<string> {
        const jsonRequest: any = {
            ...Payload,
            method: "node.AuthNew",
            params: [perms],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async AuthVerify(perms: string): Promise<string> {
        const jsonRequest: any = {
            ...Payload,
            method: "node.AuthVerify",
            params: [perms],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async Info(): Promise<Info> {
        const jsonRequest: any = {
            ...Payload,
            method: "node.Info",
            params: [],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async LogLevelSet(name: string, level: string): Promise<any> {
        const jsonRequest: any = {
            ...Payload,
            method: "node.LogLevelSet",
            params: [name, level],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async Ready(): Promise<boolean> {
        const jsonRequest: any = {
            ...Payload,
            method: "node.Ready",
            params: [],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }
}
