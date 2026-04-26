import { assertAlmostEquals } from "@std/assert";
import { convertToMeters } from "./conversion.ts";

Deno.test("imperial units", () => {
  assertAlmostEquals(convertToMeters(1, "mile"), 1609.344);
});
