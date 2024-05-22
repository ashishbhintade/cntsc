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
exports.Header = void 0;
const constants_1 = require("../constants");
class Header {
    constructor(client) {
        this.client = client;
    }
    GetByHash(hash) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "header.GetByHash", params: [hash] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    GetByHeight(height) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "header.GetByHeight", params: [height] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    GetRangeByHeight(from, to) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "header.GetRangeByHeight", params: [from, to] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    LocalHead() {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "header.LocalHead", params: [] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    NetworkHead() {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "header.NetworkHead", params: [] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    // TODO implement Subscribe
    SyncState() {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "header.SyncState", params: [] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    SyncWait() {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "header.SyncWait", params: [] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    WaitForHeight(height) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "header.WaitForHeight", params: [height] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
}
exports.Header = Header;
