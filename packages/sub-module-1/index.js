export function withdts(condition) {
  if (condition) return { type: "string", value: "123" };

  return { type: "number", value: 123 };
}
