import { Client } from "..";
import { metrics } from "../types/metrics";
import { network } from "../types/network";
import { peer } from "../types/peer";
export declare class P2P {
    client: Client;
    constructor(client: Client);
    BandwidthForPeer(id: string): Promise<metrics.Stats>;
    BandwidthForProtocol(protocol: string): Promise<metrics.Stats>;
    BandwidthStats(): Promise<metrics.Stats>;
    BlockPeer(peer: string): Promise<undefined>;
    ClosePeer(peer: string): Promise<undefined>;
    Connect(peer: peer.AddrInfo): Promise<undefined>;
    Connectedness(peer: peer.ID): Promise<network.Connectedness>;
    Info(): Promise<peer.AddrInfo>;
    IsProtected(peer: peer.ID, tag: string): Promise<boolean>;
    ListBlockedPeers(): Promise<peer.ID[]>;
    NATStatus(): Promise<network.Reachability>;
    PeerInfo(peer: peer.ID): Promise<peer.AddrInfo>;
    Peers(): Promise<peer.ID[]>;
    Protect(peer: peer.ID, tag: string): Promise<undefined>;
    PubSubPeers(topic: string): Promise<peer.ID[]>;
    ResourceState(): Promise<any>;
    UnblockPeer(peer: peer.ID): Promise<undefined>;
    Unprotect(peer: peer.ID, tag: string): Promise<boolean>;
}
//# sourceMappingURL=index.d.ts.map