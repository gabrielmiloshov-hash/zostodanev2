import { test } from "node:test";
import { deepStrictEqual, strictEqual } from "node:assert";
import { normobaricPackages } from "./treatment-pricing";

test("normal-pressure treatment offers only the 20-treatment package for 7,400 denars", () => {
  deepStrictEqual(normobaricPackages, [{ treatments: 20, priceDenars: 7400 }]);
  strictEqual(normobaricPackages.some((offer) => Number(offer.priceDenars) === 3700), false);
  strictEqual(normobaricPackages.some((offer) => Number(offer.priceDenars) === 370), false);
});