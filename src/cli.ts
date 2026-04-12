#!/usr/bin/env node
/**
 * Ai Vendor Sla Monitor — CLI entry point
 */
import { run, formatResults } from './index.js';

async function main(): Promise<void> {
  const args = process.argv.slice(2);

  if (args.includes('--help') || args.includes('-h')) {
    console.log(`Usage: ai-vendor-sla-monitor [options] [files...]

Options:
  --format <json|text>  Output format (default: text)
  --verbose             Enable verbose output
  --help, -h            Show this help
  --version, -v         Show version
`);
    return;
  }

  if (args.includes('--version') || args.includes('-v')) {
    console.log('0.1.0');
    return;
  }

  const format = (args.find((_, i, a) => a[i - 1] === '--format') ?? 'text') as 'json' | 'text';
  const verbose = args.includes('--verbose');
  const inputs = args.filter(a => !a.startsWith('--') && !['json', 'text', 'table'].includes(a));

  const result = await run({ inputs, format, verbose });
  console.log(formatResults(result, format));
  process.exit(result.success ? 0 : 1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
