# JavaScript SDK
JavaScript client for interacting with the API.stream Live, Layout and Event APIs. This SDK supports running in both a browser context and server side within NodeJS.

[SDK Documentation](https://api.stream/docs/sdk/api/js/docs/)

## Getting started
```bash
npm install @api.stream/sdk
```

### Creating an authentication token
```ts
import { ApiStream } from '@api.stream/sdk';

const client = new ApiStream({ apiKey: 'your-api-key' });

const credentials = await client.LiveAPI().backendAuthentication?.createAccessToken({
	serviceUserId: 'test-user',
});

await client.load(credentials.accessToken);
```