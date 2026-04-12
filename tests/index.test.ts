import { describe, it } from 'node:test';
import assert from 'node:assert';
import { run, formatResults } from '../src/index.js';

describe('Ai Vendor Sla Monitor', () => {
  it('should run with empty inputs', async () => {
    const result = await run({ inputs: [] });
    assert.strictEqual(result.success, true);
    assert.strictEqual(result.summary.total, 0);
  });

  it('should process inputs', async () => {
    const result = await run({ inputs: ['test.md'] });
    assert.strictEqual(result.items.length, 1);
    assert.strictEqual(result.items[0].status, 'pass');
  });

  it('should format as json', () => {
    const result = { success: true, items: [], summary: { total: 0, passed: 0, failed: 0 } };
    const output = formatResults(result, 'json');
    assert.ok(JSON.parse(output));
  });
});
