import { calculateAdditionalFuelRequired } from "./main";

describe("Additional Fuel for Modules", () => {
  test("Module mass of 14 should require fuel of 2", () => {
    expect(calculateAdditionalFuelRequired(14)).toBe(2);
  });

  test("Module mass of 1969 should require fuel of 966", () => {
    expect(calculateAdditionalFuelRequired(1969)).toBe(966);
  });

  test("Module mass of 100756 should require fuel of 50346", () => {
    expect(calculateAdditionalFuelRequired(100756)).toBe(50346);
  });
});
