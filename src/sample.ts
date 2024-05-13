import { Client } from "./index";
import { Blob } from "./blob";

async function main() {
    let authToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBbGxvdyI6WyJwdWJsaWMiLCJyZWFkIl19.ER8p9mNj6JDR4bqKJkUVUvVEqzsVLBULqgEcRnqyD4U";

    let node = new Client("http://localhost:26658", authToken);

    let proof = [
        {
            end: 4,
            nodes: ["dGVzdA=="],
            is_max_namespace_ignored: true,
        },
    ];

    let blobResult = await node.Blob.Included(
        42,
        "AAAAAAAAAAAAAAAAAAAAAAAAAAECAwQFBgcICRA=",
        proof,
        "Bw=="
    );

    console.log(blobResult);
}

main();
