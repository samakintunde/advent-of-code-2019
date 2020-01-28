import { gravityAssist } from "../data/gravity-assist";

/**
 * This modifies the data by replacing the second and third elements of the data
 * @param gravityAssist
 */
const modifyInput = (gravityAssist: number[]) => {
  gravityAssist[1] = 12;
  gravityAssist[2] = 2;

  return gravityAssist;
};

/**
 * Runs the Int Code
 * @param gravityAssist
 */
const runIntCode = (gravityAssist: number[]) => {
  let index: number = 0;

  let gravityAssistClone = Array.from(gravityAssist);

  while (index < gravityAssistClone.length) {
    const opCode = gravityAssistClone[index];

    switch (opCode) {
      // Use addition if OpCode is 1
      case 1:
        const sum =
          gravityAssistClone[gravityAssistClone[index + 1]] +
          gravityAssistClone[gravityAssistClone[index + 2]];
        gravityAssistClone[gravityAssistClone[index + 3]] = sum;
        index += 4;
        break;

      // Use multiplication if OpCode is 2
      case 2:
        const product =
          gravityAssistClone[gravityAssistClone[index + 1]] *
          gravityAssistClone[gravityAssistClone[index + 2]];
        gravityAssistClone[gravityAssistClone[index + 3]] = product;
        index += 4;
        break;

      // For Case 99 and other stuff, just halt and move long
      case 99:
        index++;
        return gravityAssistClone;

      default:
        index++;
        break;
    }
  }
  return gravityAssistClone;
};

console.log("First Position:", runIntCode(modifyInput(gravityAssist))[0]);

export { modifyInput, runIntCode };
