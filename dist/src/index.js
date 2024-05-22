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
exports.Client = void 0;
const blob_1 = require("./blob");
const das_1 = require("./das");
const fraud_1 = require("./fraud");
const header_1 = require("./header");
const node_1 = require("./node");
const p2p_1 = require("./p2p");
const share_1 = require("./share");
const state_1 = require("./state");
class Client {
    constructor(url, apiKey, log = false) {
        this.url = url;
        this.apiKey = apiKey;
        this.log = log;
        this.Blob = new blob_1.Blob(this);
        this.Das = new das_1.Das(this);
        this.Fraud = new fraud_1.Fraud(this);
        this.Header = new header_1.Header(this);
        this.Node = new node_1.Node(this);
        this.P2P = new p2p_1.P2P(this);
        this.Share = new share_1.Share(this);
        this.State = new state_1.State(this);
    }
    request(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const headers = {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.apiKey}`,
            };
            try {
                const response = yield fetch(this.url, {
                    method: "POST",
                    headers,
                    body: JSON.stringify(payload),
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const jsonResponse = yield response.json();
                if (jsonResponse.error) {
                    throw new Error(`${jsonResponse.error.message}`);
                }
                // Handle the JSON-RPC response
                return jsonResponse.result;
            }
            catch (error) {
                // Handle any errors that occurred during the fetch
                throw new Error(`Error during fetch: ${error}`);
            }
        });
    }
}
exports.Client = Client;
