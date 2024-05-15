import { Client } from "../src";

async function main() {
    let adminAuthTokenMainnet =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBbGxvdyI6WyJwdWJsaWMiLCJyZWFkIiwid3JpdGUiLCJhZG1pbiJdfQ.Dlz5O9fOwNEeWNtgumqwKtQVILwfveya0dE7Y5zWPE4";
    let node = new Client("http://localhost:26658", adminAuthTokenMainnet);

    // Peers API
    let PeersResult = await node.P2P.Peers();
    console.log("Peers Result --------");
    console.log(PeersResult);

    // BandwidthForPeer API
    let BandwidthForPeerResult = await node.P2P.BandwidthForPeer(
        PeersResult[2]
    );
    console.log("Bandwidth For Peer Result --------");
    console.log(BandwidthForPeerResult);

    // BandwidthForProtocol API
    let BandwidthForProtocolResult = await node.P2P.BandwidthForProtocol(
        "/celestia/mocha/ipfs/bitswap"
    );
    console.log("Bandwidth For Protocol Result --------");
    console.log(BandwidthForProtocolResult);

    // BandwidthStats API
    let BandwidthStatsResult = await node.P2P.BandwidthStats();
    console.log("Bandwidth Stats Result --------");
    console.log(BandwidthStatsResult);

    // BlockPeer API
    const BlockedPeerAddress = PeersResult[3];
    let BlockPeerResult = await node.P2P.BlockPeer(BlockedPeerAddress);
    console.log("Block Peer Result --------");
    console.log(BlockPeerResult);

    // Connectedness API
    const IDForPeerToCheckConnectedness = PeersResult[8];
    let ConnectednessResult = await node.P2P.Connectedness(
        IDForPeerToCheckConnectedness
    );
    console.log("Connectedness Result --------");
    console.log(ConnectednessResult);

    // Info API
    let InfoResult = await node.P2P.Info();
    console.log("Info Result --------");
    console.log(InfoResult);

    // IsProtected API
    const IDForPeerToBeProtected = PeersResult[3];
    let IsProtectedResult = await node.P2P.IsProtected(
        IDForPeerToBeProtected,
        "Test"
    );
    console.log("Is Protected Result --------");
    console.log(IsProtectedResult);

    // ListBlockedPeers API
    let ListBlockedPeersResult = await node.P2P.ListBlockedPeers();
    console.log("List Blocked Peers Result --------");
    console.log(ListBlockedPeersResult);

    // NATStatus API
    let NATStatusResult = await node.P2P.NATStatus();
    console.log("NATStatus Result --------");
    console.log(NATStatusResult);

    // PeerInfo API
    let PeerInfoResult = await node.P2P.PeerInfo(PeersResult[2]);
    console.log("Peer Info Result --------");
    console.log(PeerInfoResult);

    // Protect API
    let ProtectResult = await node.P2P.Protect(IDForPeerToBeProtected, "Test");
    console.log("Protect Result --------");
    console.log(ProtectResult);

    // PubSubPeers API
    let PubSubPeersResult = await node.P2P.PubSubPeers("recent");
    console.log("PubSub Peers Result --------");
    console.log(PubSubPeersResult);

    // ResourceState API
    let ResourceStateResult = await node.P2P.ResourceState();
    console.log("Resource State Result --------");
    console.log(ResourceStateResult);

    // UnblockPeer API
    let UnblockPeerResult = await node.P2P.UnblockPeer(BlockedPeerAddress);
    console.log("Unblock Peer Result --------");
    console.log(UnblockPeerResult);

    // Unprotect API
    let UnprotectResult = await node.P2P.Unprotect(
        IDForPeerToBeProtected,
        "Test"
    );
    console.log("Unprotect Result --------");
    console.log(UnprotectResult);

    // ClosePeer API
    // const ClosedPeerAddress = PeersResult[5];
    // let ClosePeerResult = await node.P2P.ClosePeer(ClosedPeerAddress);
    // console.log("Close Peer Result --------");
    // console.log(ClosePeerResult);

    // Connect API
    // const AddrInfoForConnectingPeer = await node.P2P.PeerInfo(
    //     ClosedPeerAddress
    // );

    // let ConnectResult = await node.P2P.Connect(AddrInfoForConnectingPeer);
    // console.log("Connect Result --------");
    // console.log(ConnectResult);
}

main();
