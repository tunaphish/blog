# handling-client-integration

![](attachments/client-integration-flow.png)

# timeouts
1. where is it used (client or server)
2. renewal (keep alive vs absolute)
3. granularity (connection level vs API level)

client (low) < lb (medium) < service (highest)

# retries
clients need retriers !!!
- network errors
- throttling
- things they ask you to retry on....

# exceptions vs status codes
failure status codes are somewhat pointless if they don't come with an associated message. much prefer throwing exceptions instead which work with messages, metrics, and retriers