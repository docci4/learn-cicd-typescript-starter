import { describe, expect, it } from "vitest";

import { getAPIKey } from "./auth.js";

describe("getAPIKey", () => {
  it("returns null when authorization header is missing", () => {
    expect(getAPIKey({})).toBeNull();
  });

  it("returns null when scheme is not ApiKey", () => {
    expect(
      getAPIKey({
        authorization: "Bearer super-secret",
      }),
    ).toBeNull();
  });

  it("returns null when ApiKey token is missing", () => {
    expect(
      getAPIKey({
        authorization: "ApiKey",
      }),
    ).toBeNull();
  });

  it("returns the key when authorization header is valid", () => {
    expect(
      getAPIKey({
        authorization: "ApiKey super-secret",
      }),
    ).toBe("super-secret");
  });
});
