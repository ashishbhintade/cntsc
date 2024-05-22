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
exports.P2P = void 0;
const constants_1 = require("../constants");
class P2P {
    constructor(client) {
        this.client = client;
    }
    BandwidthForPeer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "p2p.BandwidthForPeer", params: [id] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    BandwidthForProtocol(protocol) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "p2p.BandwidthForProtocol", params: [protocol] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    BandwidthStats() {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "p2p.BandwidthStats", params: [] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    BlockPeer(peer) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "p2p.BlockPeer", params: [peer] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    ClosePeer(peer) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "p2p.ClosePeer", params: [peer] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    Connect(peer) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "p2p.Connect", params: [peer] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    Connectedness(peer) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "p2p.Connectedness", params: [peer] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    Info() {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "p2p.Info", params: [] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    IsProtected(peer, tag) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "p2p.IsProtected", params: [peer, tag] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    ListBlockedPeers() {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "p2p.ListBlockedPeers", params: [] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    NATStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "p2p.NATStatus", params: [] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    PeerInfo(peer) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "p2p.PeerInfo", params: [peer] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    Peers() {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "p2p.Peers", params: [] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    Protect(peer, tag) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "p2p.Protect", params: [peer, tag] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    PubSubPeers(topic) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "p2p.PubSubPeers", params: [topic] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    // TODO implement the type for returned value
    ResourceState() {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "p2p.ResourceState", params: [] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    UnblockPeer(peer) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "p2p.UnblockPeer", params: [peer] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    Unprotect(peer, tag) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "p2p.Unprotect", params: [peer, tag] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
}
exports.P2P = P2P;
