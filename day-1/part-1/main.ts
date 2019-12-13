import { moduleMasses } from "./data/module-masses";

const calculateFuelRequired = (mass: number): number => {
  const fuelRequired: number = Math.floor(mass / 3) - 2;
  return fuelRequired;
};

const calculateTotalFuelRequirements = (masses: number[]): number => {
  return masses.reduce(
    (acc, current) => acc + calculateFuelRequired(current),
    0
  );
};

console.log(calculateTotalFuelRequirements(moduleMasses));

export { calculateFuelRequired, calculateTotalFuelRequirements };
