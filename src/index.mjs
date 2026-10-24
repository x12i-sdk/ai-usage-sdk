import assert from 'node:assert/strict';
import { randomBytes } from 'node:crypto';
import { encryptWithNewSalt, decrypt } from '@x12i/ai-usage-sdk';

const password = randomBytes(32).toString('hex');
const record = { provider: 'demo', settings: { enabled: true } };
const encrypted = await encryptWithNewSalt(password, record);
assert.deepEqual(await decrypt(password, encrypted), record);
await assert.rejects(() => decrypt('wrong-fixture-password', encrypted));
console.log({ version: encrypted.version, roundTrip: true });
// No password, ciphertext or real provider credential is printed. No usage API is contacted.
