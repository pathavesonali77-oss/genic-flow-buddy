import { afterEach, describe, expect, test } from "bun:test";
import { releaseAllImageKeys, withImageKey } from "./keys.server";

const names = Array.from({ length: 9 }, (_, index) => `AGNES_API_KEY_${index + 1}`);

afterEach(() => {
  releaseAllImageKeys();
  for (const name of names) delete process.env[name];
});

describe("Agnes key scheduling", () => {
  test("spreads the first nine slots across all nine keys", async () => {
    names.forEach((name, index) => {
      process.env[name] = `test-key-${index + 1}`;
    });

    const selected = await Promise.all(
      names.map((_, slot) => withImageKey(slot, 0, async (_key, keyIndex) => keyIndex)),
    );

    expect(new Set(selected).size).toBe(9);
    expect(selected.sort((a, b) => a - b)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  });
});