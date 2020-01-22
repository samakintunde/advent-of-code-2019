import { moduleMasses } from "./data/module-masses";
import { calculateFuelRequired } from "../part-1/main";

/**
 * 1. Calculate fuel required
 * 2. Calculate the fuel required by result from 1
 * 3. Keep iterating until it requires no more fuel
 *
 * @param mass
 */

const calculateAdditionalFuelRequired = (
  mass: number,
  accumulator: number = 0
): number => {
  if (mass <= 0) return 0;

  const fuelRequired: number = calculateFuelRequired(mass);
  if (fuelRequired <= 0) return accumulator;
  accumulator = accumulator + fuelRequired;

  return calculateAdditionalFuelRequired(fuelRequired, accumulator);
};

/**
 * Calculate the total of the additional fuel required
 * @param masses
 */
const calculateTotalAdditionalFuelRequirements = (masses: number[]) => {
  return masses.reduce((acc, current) => {
    return acc + calculateAdditionalFuelRequired(current);
  }, 0);
};

console.log("Additional Fuel Required:", calculateAdditionalFuelRequired(14));
console.log(
  "Total Additional Fuel Requirement:",
  calculateTotalAdditionalFuelRequirements(moduleMasses)
);

export { calculateAdditionalFuelRequired };
