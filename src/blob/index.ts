import { Client } from "..";
import { Payload } from "../constants";
import { blob } from "../types/blob";
import { share } from "../types/share";

export class Blob {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Retrieves the blob by commitment under the given namespace and height.
     * @param height - The height at which the blob exists.
     * @param namespace - The namespace under which the blob exists.
     * @param commitment - The commitment of the blob.
     * @returns A Promise resolving to the retrieved blob.
     */
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

    /**
     * Returns all blobs at the given height under the given namespaces.
     * @param height - The height at which the blobs exist.
     * @param namespaces - The namespaces under which the blobs exist.
     * @returns A Promise resolving to an array of blobs.
     */
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

    /**
     * Retrieves proofs in the given namespaces at the given height by commitment.
     * @param height - The height at which the proofs exist.
     * @param namespace - The namespace under which the proof exists.
     * @param commitment - The commitment of the proof.
     * @returns A Promise resolving to the retrieved proof.
     */
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

    /**
     * Checks whether a blob's given commitment (Merkle subtree root) is included at given height and under the namespace.
     * @param height - The height at which to check inclusion.
     * @param namespace - The namespace under which to check inclusion.
     * @param proof - The proof of inclusion.
     * @param commitment - The commitment of the blob.
     * @returns A Promise resolving to a boolean indicating inclusion.
     */
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

    /**
     * Submits Blobs and returns the height in which they were included.
     * @param blobs - The blobs to be submitted.
     * @param gasPrice - The gas price for the submission.
     * @returns A Promise resolving to the height in which the blobs were included.
     */
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
