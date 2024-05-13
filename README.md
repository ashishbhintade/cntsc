# Celestia Node Typescript Client

TypeScript library to interact with the Celestia Node.

## Installation

While the library hasn't been published on any registry yet, you can still work with it by cloning it to your machine.

```bash
git clone https://github.com/ashishbhintade/cntsc.git
```

## Request & Response

Invalid Namespace Error Response:
```json
{
  jsonrpc: '2.0',
  id: 1,
  error: {
    code: 1,
    message: 'invalid namespace length: expected 29, got 42\n' +
      'invalid namespace length: expected 29, got 42'
  }
}
```

Syncing Header Error Response:
```json
{
  jsonrpc: '2.0',
  id: 1,
  error: {
    code: 1,
    message: 'header: syncing in progress: localHeadHeight: 50177, requestedHeight: 1433532'
  }
}
```
