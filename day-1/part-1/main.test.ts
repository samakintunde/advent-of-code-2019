import { calculateFuelRequired } from "./main";

describe("Fuel Required for modules", () => {
  test("Module mass of 12 should require fuel of 2", () => {
    expect(calculateFuelRequired(12)).toBe(2);
  });
  test("Module mass of 14 should require fuel of 2", () => {
    expect(calculateFuelRequired(14)).toBe(2);
  });
  test("Module mass of 1969 should require fuel of 654", () => {
    expect(calculateFuelRequired(1969)).toBe(654);
  });
  test("Module mass of 100756 should require fuel of 33583", () => {
    expect(calculateFuelRequired(100756)).toBe(33583);
  });
});
