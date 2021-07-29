import execa from 'execa';

describe('cli', () => {
  test('run my-ink-cli', async () => {
    const result = await run();
    expect(result.stdout).toMatchInlineSnapshot(`
"Checkup ran the following task(s) successfully:
 ember-types
 ember-dependencies
 ember-test"
`);
  });

  function run() {

    return execa(
      process.execPath,
      [require.resolve('../bin/my-ink-cli'), 'run'],
    );
  }
});
