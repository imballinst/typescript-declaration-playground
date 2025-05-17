export declare function withdts(condition: boolean):
  | {
      type: "string";
      value: string;
    }
  | {
      type: "number";
      value: number;
    };
