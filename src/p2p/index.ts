import { Client } from "..";
import { Payload } from "../constants";
import { metrics } from "../types/metrics";
import { network } from "../types/network";
import { peer } from "../types/peer";

export class P2P {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    async BandwidthForPeer(id: string): Promise<metrics.Stats> {
        const jsonRequest: any = {
            ...Payload,
            method: "p2p.BandwidthForPeer",
            params: [id],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }
    
    async BandwidthForProtocol(protocol: string): Promise<metrics.Stats> {
        const jsonRequest: any = {
            ...Payload,
            method: "p2p.BandwidthForProtocol",
            params: [protocol],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }
    
    async BandwidthStats(): Promise<metrics.Stats> {
        const jsonRequest: any = {
            ...Payload,
            method: "p2p.BandwidthStats",
            params: [],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async BlockPeer(peer: string): Promise<undefined> {
        const jsonRequest: any = {
            ...Payload,
            method: "p2p.BlockPeer",
            params: [peer],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async ClosePeer(peer: string): Promise<undefined> {
        const jsonRequest: any = {
            ...Payload,
            method: "p2p.ClosePeer",
            params: [peer],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async Connect(peer: peer.AddrInfo): Promise<undefined> {
        const jsonRequest: any = {
            ...Payload,
            method: "p2p.Connect",
            params: [peer],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async Connectedness(peer: peer.ID): Promise<network.Connectedness> {
        const jsonRequest: any = {
            ...Payload,
            method: "p2p.Connectedness",
            params: [peer],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async Info(): Promise<peer.AddrInfo> {
        const jsonRequest: any = {
            ...Payload,
            method: "p2p.Info",
            params: [],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async IsProtected(peer: peer.ID, tag: string): Promise<boolean> {
        const jsonRequest: any = {
            ...Payload,
            method: "p2p.IsProtected",
            params: [peer, tag],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async ListBlockedPeers(): Promise<peer.ID[]> {
        const jsonRequest: any = {
            ...Payload,
            method: "p2p.ListBlockedPeers",
            params: [],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async NATStatus(): Promise<network.Reachability> {
        const jsonRequest: any = {
            ...Payload,
            method: "p2p.NATStatus",
            params: [],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async PeerInfo(peer: peer.ID): Promise<peer.AddrInfo> {
        const jsonRequest: any = {
            ...Payload,
            method: "p2p.PeerInfo",
            params: [peer],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async Peers(): Promise<peer.ID[]> {
        const jsonRequest: any = {
            ...Payload,
            method: "p2p.Peers",
            params: [],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async Protect(peer: peer.ID, tag: string): Promise<undefined> {
        const jsonRequest: any = {
            ...Payload,
            method: "p2p.Protect",
            params: [peer, tag],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async PubSubPeers(topic: string): Promise<peer.ID[]> {
        const jsonRequest: any = {
            ...Payload,
            method: "p2p.PubSubPeers",
            params: [topic],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    // TODO implement the type for returned value
    async ResourceState(): Promise<any> {
        const jsonRequest: any = {
            ...Payload,
            method: "p2p.ResourceState",
            params: [],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async UnblockPeer(peer: peer.ID): Promise<undefined> {
        const jsonRequest: any = {
            ...Payload,
            method: "p2p.UnblockPeer",
            params: [peer],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async Unprotect(peer: peer.ID, tag: string): Promise<boolean> {
        const jsonRequest: any = {
            ...Payload,
            method: "p2p.Unprotect",
            params: [peer, tag],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }
}