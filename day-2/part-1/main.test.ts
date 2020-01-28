import { runIntCode } from "./main";

describe("Run IntCode Programs", () => {
  test("IntCode of (1,0,0,0,99) should give (2,0,0,0,99)", () => {
    expect(runIntCode([1, 0, 0, 0, 99])).toStrictEqual([2, 0, 0, 0, 99]);
  });

  test("IntCode of (2,4,4,5,99,0) should give (2,0,0,0,99)", () => {
    expect(runIntCode([2, 4, 4, 5, 99, 0])).toStrictEqual([
      2,
      4,
      4,
      5,
      99,
      9801
    ]);
  });

  test("IntCode of (1,1,1,4,99,5,6,0,99) should give (30,1,1,4,2,5,6,0,99)", () => {
    expect(runIntCode([1, 1, 1, 4, 99, 5, 6, 0, 99])).toStrictEqual([
      30,
      1,
      1,
      4,
      2,
      5,
      6,
      0,
      99
    ]);
  });
});
