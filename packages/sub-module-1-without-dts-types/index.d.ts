export declare function withoutdts(condition: boolean):
  | {
      type: "string";
      value: string;
    }
  | {
      type: "number";
      value: number;
    };
