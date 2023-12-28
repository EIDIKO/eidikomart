import { execSync } from 'child_process';
import { join } from 'path';

describe('CLI tests', () => {
  it('should print a message', () => {
    const cliPath = join(process.cwd(), 'eidiko-monorepo/apps/eidiko-monorepo-plans');
    console.log('CLI Path:', cliPath);
    const output = execSync(`node ${cliPath}`).toString();
    console.log('output:', output);

    expect(output).toMatch("");
  });
});
