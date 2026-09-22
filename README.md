# Script to Manga Video

Turn a timestamped script into consistent 16:9 manga panels and export them as a video.

## Provider configuration

The app uses the free `glm-4.5-flash` model for script analysis and the free
`agnes-image-2.5-flash` model for images. Credentials must be configured as
encrypted server environment variables and must never be committed:

- `ZAI_API_KEY`
- `AGNES_API_KEY_1` through `AGNES_API_KEY_9`

## Development

```sh
bun install
bun run dev
```
