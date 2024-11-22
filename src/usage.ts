import { Client } from "./index";

async function main() {
    let authTokenMainnet =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBbGxvdyI6WyJwdWJsaWMiLCJyZWFkIl19.ER8p9mNj6JDR4bqKJkUVUvVEqzsVLBULqgEcRnqyD4U";
    let adminAuthTokenMainnet = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBbGxvdyI6WyJwdWJsaWMiLCJyZWFkIiwid3JpdGUiLCJhZG1pbiJdfQ.Dlz5O9fOwNEeWNtgumqwKtQVILwfveya0dE7Y5zWPE4"
    let node = new Client("http://localhost:26658", authTokenMainnet);

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

    let FraudGetResult = await node.Fraud.Get("badencodingv0.1");

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
}

main();
