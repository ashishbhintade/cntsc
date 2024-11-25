import { Client } from "..";
import { Payload } from "../constants";
import { header } from "../types/header";

export class Header {
    client: Client

    constructor(client: Client) {
        this.client = client
    }

    async GetByHash(hash: string): Promise<header.ExtendedHeader> {
        const jsonRequest: any = {
            ...Payload,
            method: "header.GetByHash",
            params: [hash],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async GetByHeight(height: number): Promise<header.ExtendedHeader> {
        const jsonRequest: any = {
            ...Payload,
            method: "header.GetByHeight",
            params: [height],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async GetRangeByHeight(from: header.ExtendedHeader, to: number): Promise<header.ExtendedHeader> {
        const jsonRequest: any = {
            ...Payload,
            method: "header.GetRangeByHeight",
            params: [from, to],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async LocalHead(): Promise<header.ExtendedHeader> {
        const jsonRequest: any = {
            ...Payload,
            method: "header.LocalHead",
            params: [],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async NetworkHead(): Promise<header.ExtendedHeader> {
        const jsonRequest: any = {
            ...Payload,
            method: "header.NetworkHead",
            params: [],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    // TODO implement Subscribe

    async SyncState(): Promise<header.ExtendedHeader> {
        const jsonRequest: any = {
            ...Payload,
            method: "header.SyncState",
            params: [],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async SyncWait(): Promise<header.ExtendedHeader> {
        const jsonRequest: any = {
            ...Payload,
            method: "header.SyncWait",
            params: [],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async WaitForHeight(height: number): Promise<header.ExtendedHeader> {
        const jsonRequest: any = {
            ...Payload,
            method: "header.WaitForHeight",
            params: [height],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }
}