# Import and repair the manga generator

## Outcome
- Replace the starter with the complete public GitHub project.
- Preserve the existing manga workflow and interface.
- Keep Z.ai and all nine Agnes credentials encrypted and server-only.
- Fix the verified cause of generation stopping after the first nine images.

## Work
1. Import the repository source and dependencies without Git metadata or exposed credentials.
2. Trace the tenth-image path through browser workers, server requests, key leasing, cooldowns, retries, and cancellation.
3. Correct the blocking logic at its source while retaining the requested free-only models: `glm-4.5-flash` and `agnes-image-2.5-flash`.
4. Add focused regression coverage for more than nine images and interrupted requests.
5. Validate the app, its generated-image flow, mobile layout, and metadata, then report the exact failure mechanism.

## Security
- Provider credentials are read only inside server code from encrypted project secrets.
- No credential is written into source files, browser code, logs, or generated output.