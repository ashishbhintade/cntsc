import { Client } from "./index";

async function main() {
    let authTokenMainnet =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBbGxvdyI6WyJwdWJsaWMiLCJyZWFkIl19.ER8p9mNj6JDR4bqKJkUVUvVEqzsVLBULqgEcRnqyD4U";

    let node = new Client("http://localhost:26658", authTokenMainnet);

    let GetResult = await node.Blob.Get(
        42,
        "AAAAAAAAAAAAAAAAAAAAAAAAAAECAwQFBgcICRA=",
        "Bw=="
    );

    console.log(GetResult);

    let GetAllResult = await node.Blob.GetAll(42, [
        "AAAAAAAAAAAAAAAAAAAAAAAAAAECAwQFBgcICRA=",
    ]);

    let IncludedResult = await node.Blob.Included(
        42,
        "AAAAAAAAAAAAAAAAAAAAAAAAAAECAwQFBgcICRA=",
        [
            {
                end: 4,
                nodes: ["dGVzdA=="],
                is_max_namespace_ignored: true,
            },
        ],
        "Bw=="
    );

    console.log(IncludedResult);
}

main();
