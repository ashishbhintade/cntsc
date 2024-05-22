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
exports.Node = void 0;
const constants_1 = require("../constants");
class Node {
    constructor(client) {
        this.client = client;
    }
    AuthNew(perms) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "node.AuthNew", params: [perms] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    AuthVerify(perms) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "node.AuthVerify", params: [perms] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    Info() {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "node.Info", params: [] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    LogLevelSet(name, level) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "node.LogLevelSet", params: [name, level] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    Ready() {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "node.Ready", params: [] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
}
exports.Node = Node;
