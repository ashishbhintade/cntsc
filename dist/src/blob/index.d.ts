import { Client } from "..";
import { blob } from "../types/blob";
import { share } from "../types/share";
export declare class Blob {
    client: Client;
    constructor(client: Client);
    /**
     * Retrieves the blob by commitment under the given namespace and height.
     * @param height - The height at which the blob exists.
     * @param namespace - The namespace under which the blob exists.
     * @param commitment - The commitment of the blob.
     * @returns A Promise resolving to the retrieved blob.
     */
    Get(height: number, namespace: share.Namespace, commitment: blob.Commitment): Promise<blob.Blob>;
    /**
     * Returns all blobs at the given height under the given namespaces.
     * @param height - The height at which the blobs exist.
     * @param namespaces - The namespaces under which the blobs exist.
     * @returns A Promise resolving to an array of blobs.
     */
    GetAll(height: number, namespace: share.Namespace[]): Promise<blob.Blob[]>;
    /**
     * Retrieves proofs in the given namespaces at the given height by commitment.
     * @param height - The height at which the proofs exist.
     * @param namespace - The namespace under which the proof exists.
     * @param commitment - The commitment of the proof.
     * @returns A Promise resolving to the retrieved proof.
     */
    GetProof(height: number, namespace: share.Namespace, commitment: blob.Commitment): Promise<blob.Proof>;
    /**
     * Checks whether a blob's given commitment (Merkle subtree root) is included at given height and under the namespace.
     * @param height - The height at which to check inclusion.
     * @param namespace - The namespace under which to check inclusion.
     * @param proof - The proof of inclusion.
     * @param commitment - The commitment of the blob.
     * @returns A Promise resolving to a boolean indicating inclusion.
     */
    Included(height: number, namespace: share.Namespace, proof: blob.Proof, commitment: blob.Commitment): Promise<blob.Proof>;
    /**
     * Submits Blobs and returns the height in which they were included.
     * @param blobs - The blobs to be submitted.
     * @param gasPrice - The gas price for the submission.
     * @returns A Promise resolving to the height in which the blobs were included.
     */
    Submit(blobs: blob.Blob[], gasPrice: blob.GasPrice): Promise<blob.Proof>;
}
//# sourceMappingURL=index.d.ts.map