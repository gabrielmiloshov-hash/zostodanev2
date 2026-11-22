import { test } from "node:test";
import { deepStrictEqual, strictEqual } from "node:assert";
import { normobaricPackages } from "./treatment-pricing";

test("normal-pressure treatment offers 1 treatment for 370 and 20 treatments for 7,400 denars", () => {
  deepStrictEqual(normobaricPackages, [
    { treatments: 1, priceDenars: 370 },
    { treatments: 20, priceDenars: 7400 },
  ]);
});

test("the removed 10-treatment package for 3,700 denars does not return", () => {
  strictEqual(normobaricPackages.some((offer) => Number(offer.priceDenars) === 3700), false);
});
