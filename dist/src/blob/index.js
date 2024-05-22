"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blob = void 0;
const constants_1 = require("../constants");
class Blob {
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves the blob by commitment under the given namespace and height.
     * @param height - The height at which the blob exists.
     * @param namespace - The namespace under which the blob exists.
     * @param commitment - The commitment of the blob.
     * @returns A Promise resolving to the retrieved blob.
     */
    Get(height, namespace, commitment) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "blob.Get", params: [height, namespace, commitment] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    /**
     * Returns all blobs at the given height under the given namespaces.
     * @param height - The height at which the blobs exist.
     * @param namespaces - The namespaces under which the blobs exist.
     * @returns A Promise resolving to an array of blobs.
     */
    GetAll(height, namespace) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "blob.GetAll", params: [height, namespace] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    /**
     * Retrieves proofs in the given namespaces at the given height by commitment.
     * @param height - The height at which the proofs exist.
     * @param namespace - The namespace under which the proof exists.
     * @param commitment - The commitment of the proof.
     * @returns A Promise resolving to the retrieved proof.
     */
    GetProof(height, namespace, commitment) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "blob.GetProof", params: [height, namespace, commitment] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    /**
     * Checks whether a blob's given commitment (Merkle subtree root) is included at given height and under the namespace.
     * @param height - The height at which to check inclusion.
     * @param namespace - The namespace under which to check inclusion.
     * @param proof - The proof of inclusion.
     * @param commitment - The commitment of the blob.
     * @returns A Promise resolving to a boolean indicating inclusion.
     */
    Included(height, namespace, proof, commitment) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "blob.Included", params: [height, namespace, proof, commitment] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    /**
     * Submits Blobs and returns the height in which they were included.
     * @param blobs - The blobs to be submitted.
     * @param gasPrice - The gas price for the submission.
     * @returns A Promise resolving to the height in which the blobs were included.
     */
    Submit(blobs, gasPrice) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "blob.Included", params: [blobs, gasPrice] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
}
exports.Blob = Blob;
