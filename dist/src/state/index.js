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
exports.State = void 0;
const constants_1 = require("../constants");
class State {
    constructor(client) {
        this.client = client;
    }
    AccountAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "state.AccountAddress", params: [] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    Balance() {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "state.Balance", params: [] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    BalanceForAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "state.BalanceForAddress", params: [] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    // TODO implement TxResponse Type
    BeginRedelegate(srcValAddr, dstValAddr, amount, fee, gasLimit) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "state.BeginRedelegate", params: [srcValAddr, dstValAddr, amount, fee, gasLimit] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    CancelUnbondingDelegation(valAddr, amount, height, fee, gasLimit) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "state.CancelUnbondingDelegation", params: [valAddr, amount, height, fee, gasLimit] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    Delegate(valAddr, amount, fee, gasLimit) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "state.Delegate", params: [valAddr, amount, fee, gasLimit] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    QueryDelegation(valAddr) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "state.QueryDelegation", params: [valAddr] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    QueryRedelegations(srcValAddr, dstValAddr) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "state.QueryRedelegations", params: [srcValAddr, dstValAddr] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    // TODO implement type for unbonding response
    QueryUnbonding(valAddr) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "state.QueryUnbonding", params: [valAddr] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    SubmitPayForBlob(fee, gasLimit, blobs) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "state.SubmitPayForBlob", params: [fee, gasLimit, blobs] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    SubmitTx(tx) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "state.SubmitTx", params: [tx] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    Transfer(to, amount, fee, gasLimit) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "state.Transfer", params: [to, amount, fee, gasLimit] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
    Undelegate(valAddr, amount, fee, gasLimit) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonRequest = Object.assign(Object.assign({}, constants_1.Payload), { method: "state.Undelegate", params: [valAddr, amount, fee, gasLimit] });
            // Send the fetch request
            return yield this.client.request(jsonRequest);
        });
    }
}
exports.State = State;
