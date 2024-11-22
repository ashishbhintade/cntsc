import { Client } from "../src";

async function main() {
    let adminAuthTokenMainnet =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBbGxvdyI6WyJwdWJsaWMiLCJyZWFkIiwid3JpdGUiLCJhZG1pbiJdfQ.Dlz5O9fOwNEeWNtgumqwKtQVILwfveya0dE7Y5zWPE4";
    let node = new Client("http://localhost:26658", adminAuthTokenMainnet);

    let header = await node.Header.GetByHeight(1454409)

    console.log(header)
    
}

main()