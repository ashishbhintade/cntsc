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
const index_1 = require("./index");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let authTokenMainnet = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBbGxvdyI6WyJwdWJsaWMiLCJyZWFkIl19.ER8p9mNj6JDR4bqKJkUVUvVEqzsVLBULqgEcRnqyD4U";
        let adminAuthTokenMainnet = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBbGxvdyI6WyJwdWJsaWMiLCJyZWFkIiwid3JpdGUiLCJhZG1pbiJdfQ.Dlz5O9fOwNEeWNtgumqwKtQVILwfveya0dE7Y5zWPE4";
        let node = new index_1.Client("http://localhost:26658", authTokenMainnet);
        // let GetResult = await node.Blob.Get(
        //     42,
        //     "AAAAAAAAAAAAAAAAAAAAAAAAAAECAwQFBgcICRA=",
        //     "Bw=="
        // );
        // console.log(GetResult);
        // let GetAllResult = await node.Blob.GetAll(42, [
        //     "AAAAAAAAAAAAAAAAAAAAAAAAAAECAwQFBgcICRA=",
        // ]);
        // console.log(GetAllResult);
        // let GetProofResult = await node.Blob.GetProof(
        //     42,
        //     "AAAAAAAAAAAAAAAAAAAAAAAAAAECAwQFBgcICRA=",
        //     "Bw=="
        // );
        // console.log(GetProofResult);
        // let IncludedResult = await node.Blob.Included(
        //     42,
        //     "AAAAAAAAAAAAAAAAAAAAAAAAAAECAwQFBgcICRA=",
        //     [
        //         {
        //             end: 4,
        //             nodes: ["dGVzdA=="],
        //             is_max_namespace_ignored: true,
        //         },
        //     ],
        //     "Bw=="
        // );
        // console.log(IncludedResult);
        // let SamplingStatsResult = await node.Das.SamplingStats();
        // console.log(SamplingStatsResult)
        // let WaitCatchUpResult = await node.Das.WaitCatchUp();
        // console.log(WaitCatchUpResult)
        let FraudGetResult = yield node.Fraud.Get("badencodingv0.1");
        console.log(FraudGetResult);
        // // let newToken = await node.Node.AuthNew(["admin"]);
        // let newTokenPerms = await node.Node.AuthVerify(authTokenMainnet);
        // console.log(newTokenPerms);
        // let InfoResult = await node.Node.Info();
        // console.log(InfoResult);
        // let LogLevelSetResult = await node.Node.LogLevelSet("das", "info");
        // console.log(LogLevelSetResult);
        // let ReadyResult = await node.Node.Ready();
        // console.log(ReadyResult);
    });
}
main();
