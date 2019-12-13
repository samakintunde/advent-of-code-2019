import { moduleMasses } from "./data/module-masses";
import { calculateFuelRequired } from "../part-1/main";

/**
 * 1. Calculate fuel required
 * 2. Calculate the fuel required by result from 1
 * 3. Keep iterating until it requires no more fuel
 *
 * @param mass
 */

const calculateAdditionalFuelRequired = (mass: number): number => {
  let accumulator: number = 0;

  const calculate = (mass: number): number => {
    const fuelRequired: number = calculateFuelRequired(mass);

    accumulator = accumulator + fuelRequired;

    if (fuelRequired <= 5) return fuelRequired;

    return calculate(fuelRequired);
  };

  calculate(mass);

  return accumulator;
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

console.log(calculateTotalAdditionalFuelRequirements(moduleMasses));

export { calculateAdditionalFuelRequired };
