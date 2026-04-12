# Ai Vendor Sla Monitor

![npm](https://img.shields.io/npm/v/@phoenix-assistant/ai-vendor-sla-monitor)
![CI](https://github.com/phoenix-assistant/ai-vendor-sla-monitor/actions/workflows/ci.yml/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

> Automated regression testing against model API quality baselines

## Installation

```bash
npm install @phoenix-assistant/ai-vendor-sla-monitor
```

## Quick Start

```bash
npx @phoenix-assistant/ai-vendor-sla-monitor --help
npx @phoenix-assistant/ai-vendor-sla-monitor file1.md file2.md
```

```typescript
import { run } from '@phoenix-assistant/ai-vendor-sla-monitor';

const result = await run({ inputs: ['file.md'] });
console.log(result.success);
```

## API

### `run(config?)`

Run the tool with the given configuration.

### `formatResults(result, format?)`

Format results for display.

## Development

```bash
npm install
npm test
npm run build
```

## License

MIT © [Phoenix Assistant](https://github.com/phoenix-assistant)
