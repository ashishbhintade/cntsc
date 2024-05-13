import { Client } from "..";
import { Payload } from "../constants";
import { blob } from "../types/blob";
import { share } from "../types/share";

export class Blob {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    async Get(
        height: number,
        namespace: share.Namespace,
        commitment: blob.Commitment
    ): Promise<blob.Blob> {
        const jsonRequest: any = {
            ...Payload,
            method: "blob.Get",
            params: [height, namespace, commitment],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async GetAll(
        height: number,
        namespace: share.Namespace[]
    ): Promise<blob.Blob[]> {
        const jsonRequest: any = {
            ...Payload,
            method: "blob.GetAll",
            params: [height, namespace],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async GetProof(
        height: number,
        namespace: share.Namespace,
        commitment: blob.Commitment
    ): Promise<blob.Proof> {
        const jsonRequest: any = {
            ...Payload,
            method: "blob.GetProof",
            params: [height, namespace, commitment],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async Included(
        height: number,
        namespace: share.Namespace,
        proof: blob.Proof,
        commitment: blob.Commitment
    ): Promise<blob.Proof> {
        const jsonRequest: any = {
            ...Payload,
            method: "blob.Included",
            params: [height, namespace, proof, commitment],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async Submit(
        blobs: blob.Blob[],
        gasPrice: blob.GasPrice
    ): Promise<blob.Proof> {
        const jsonRequest: any = {
            ...Payload,
            method: "blob.Included",
            params: [blobs, gasPrice],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }
}
