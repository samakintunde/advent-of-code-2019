import { gravityAssist } from "../data/gravity-assist";
import { modifyInput, runIntCode } from "../part-1/main";

const runAdvancedIntCode = (gravityAssist: number[]) => {
  let output: number = 0;

  for (let noun = 0; noun <= 99; noun++) {
    for (let verb = 0; verb <= 99; verb++) {
      const gravityAssistClone: number[] = Array.from(gravityAssist);

      gravityAssistClone[1] = noun;
      gravityAssistClone[2] = verb;
      output = runIntCode(gravityAssistClone)[0];

      if (output === 19690720) {
        return 100 * noun + verb;
      }
    }
  }
};

console.log(runAdvancedIntCode(gravityAssist));
