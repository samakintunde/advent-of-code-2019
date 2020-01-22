import { moduleMasses } from "./data/module-masses";

/**
 * Fuel Required by module
 * @param mass
 */
const calculateFuelRequired = (mass: number): number => {
  const fuelRequired: number = Math.floor(mass / 3) - 2;
  return fuelRequired;
};

/**
 * Total Fuel Required by module
 * @param masses
 */
const calculateTotalFuelRequirements = (masses: number[]): number => {
  return masses.reduce(
    (acc, current) => acc + calculateFuelRequired(current),
    0
  );
};

console.log("Fuel Requirements:", calculateFuelRequired(14));
console.log(
  "Total Fuel Requirements:",
  calculateTotalFuelRequirements(moduleMasses)
);

export { calculateFuelRequired, calculateTotalFuelRequirements };
