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
const src_1 = require("../src");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let adminAuthTokenMainnet = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBbGxvdyI6WyJwdWJsaWMiLCJyZWFkIiwid3JpdGUiLCJhZG1pbiJdfQ.Dlz5O9fOwNEeWNtgumqwKtQVILwfveya0dE7Y5zWPE4";
        let node = new src_1.Client("http://localhost:26658", adminAuthTokenMainnet);
        // Peers API
        let PeersResult = yield node.P2P.Peers();
        console.log("Peers Result --------");
        console.log(PeersResult);
        // BandwidthForPeer API
        let BandwidthForPeerResult = yield node.P2P.BandwidthForPeer(PeersResult[2]);
        console.log("Bandwidth For Peer Result --------");
        console.log(BandwidthForPeerResult);
        // BandwidthForProtocol API
        let BandwidthForProtocolResult = yield node.P2P.BandwidthForProtocol("/celestia/mocha/ipfs/bitswap");
        console.log("Bandwidth For Protocol Result --------");
        console.log(BandwidthForProtocolResult);
        // BandwidthStats API
        let BandwidthStatsResult = yield node.P2P.BandwidthStats();
        console.log("Bandwidth Stats Result --------");
        console.log(BandwidthStatsResult);
        // BlockPeer API
        const BlockedPeerAddress = PeersResult[3];
        let BlockPeerResult = yield node.P2P.BlockPeer(BlockedPeerAddress);
        console.log("Block Peer Result --------");
        console.log(BlockPeerResult);
        // Connectedness API
        const IDForPeerToCheckConnectedness = PeersResult[8];
        let ConnectednessResult = yield node.P2P.Connectedness(IDForPeerToCheckConnectedness);
        console.log("Connectedness Result --------");
        console.log(ConnectednessResult);
        // Info API
        let InfoResult = yield node.P2P.Info();
        console.log("Info Result --------");
        console.log(InfoResult);
        // IsProtected API
        const IDForPeerToBeProtected = PeersResult[3];
        let IsProtectedResult = yield node.P2P.IsProtected(IDForPeerToBeProtected, "Test");
        console.log("Is Protected Result --------");
        console.log(IsProtectedResult);
        // ListBlockedPeers API
        let ListBlockedPeersResult = yield node.P2P.ListBlockedPeers();
        console.log("List Blocked Peers Result --------");
        console.log(ListBlockedPeersResult);
        // NATStatus API
        let NATStatusResult = yield node.P2P.NATStatus();
        console.log("NATStatus Result --------");
        console.log(NATStatusResult);
        // PeerInfo API
        let PeerInfoResult = yield node.P2P.PeerInfo(PeersResult[2]);
        console.log("Peer Info Result --------");
        console.log(PeerInfoResult);
        // Protect API
        let ProtectResult = yield node.P2P.Protect(IDForPeerToBeProtected, "Test");
        console.log("Protect Result --------");
        console.log(ProtectResult);
        // PubSubPeers API
        let PubSubPeersResult = yield node.P2P.PubSubPeers("recent");
        console.log("PubSub Peers Result --------");
        console.log(PubSubPeersResult);
        // ResourceState API
        let ResourceStateResult = yield node.P2P.ResourceState();
        console.log("Resource State Result --------");
        console.log(ResourceStateResult);
        // UnblockPeer API
        let UnblockPeerResult = yield node.P2P.UnblockPeer(BlockedPeerAddress);
        console.log("Unblock Peer Result --------");
        console.log(UnblockPeerResult);
        // Unprotect API
        let UnprotectResult = yield node.P2P.Unprotect(IDForPeerToBeProtected, "Test");
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
    });
}
main();
