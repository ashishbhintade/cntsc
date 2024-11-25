import { Client } from "..";
import { Payload } from "../constants";
import { header } from "../types/header";
import { share } from "../types/share";

export class Share {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    // TODO implement the type for returned value
    async GetEDS(header: header.ExtendedHeader): Promise<any> {
        const jsonRequest: any = {
            ...Payload,
            method: "share.GetEDS",
            params: [header],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async GetShare(
        header: header.ExtendedHeader,
        row: number,
        col: number
    ): Promise<share.Share> {
        const jsonRequest: any = {
            ...Payload,
            method: "share.GetShare",
            params: [header, row, col],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async GetSharesByNamespace(
        header: header.ExtendedHeader,
        namespace: share.Namespace
    ): Promise<share.NamespacedShare[]> {
        const jsonRequest: any = {
            ...Payload,
            method: "share.GetSharesByNamespace",
            params: [header, namespace],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async SharesAvailable(header: header.ExtendedHeader): Promise<undefined> {
        const jsonRequest: any = {
            ...Payload,
            method: "share.SharesAvailable",
            params: [header],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }
}
