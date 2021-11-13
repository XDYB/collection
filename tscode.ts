
export const add = (a: number, b: number, c?: string | number): number => {
  console.log(a + b);
  return a + b;
};
add(1, 2);

export const fun = (s: Array<string>, a: number[]) => {
  console.log(s);
};

type fun1Type = string | number | boolean;
export const fun1 = (arg1: fun1Type) => {
  console.log(arg1);
};
fun1(123);

// 枚举
enum Gender {
  Male = 0,
  Female = 1
}
export const isMale = Gender.Male === 0;

