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
exports.Share = void 0;
const constants_1 = require("../constants");
class Share {
    constructor(client) {
        this.client = client;
    }
    // TODO implement the type for returned value
    GetEDS(header) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "share.GetEDS", params: [header] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    GetShare(header, row, col) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "share.GetShare", params: [header, row, col] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    GetSharesByNamespace(header, namespace) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "share.GetSharesByNamespace", params: [header, namespace] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    SharesAvailable(header) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "share.SharesAvailable", params: [header] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
}
exports.Share = Share;
