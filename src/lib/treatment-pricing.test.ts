import { test } from "node:test";
import { deepStrictEqual, strictEqual } from "node:assert";
import { normobaricPackages } from "./treatment-pricing";

test("normal-pressure treatment offers only the 20-treatment package for 7,400 denars", () => {
  deepStrictEqual(normobaricPackages, [
    { treatments: 20, priceDenars: 7400 },
  ]);
});

test("the removed 10-treatment package for 3,700 denars does not return", () => {
  strictEqual(normobaricPackages.some((offer) => Number(offer.priceDenars) === 3700), false);
});

test("the removed 1-treatment offer for 370 denars does not return", () => {
  strictEqual(normobaricPackages.some((offer) => Number(offer.priceDenars) === 370), false);
});
