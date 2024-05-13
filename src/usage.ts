import { Client } from "./index";

async function main() {
    let authTokenMainnet =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBbGxvdyI6WyJwdWJsaWMiLCJyZWFkIl19.ER8p9mNj6JDR4bqKJkUVUvVEqzsVLBULqgEcRnqyD4U";

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

}

main();
