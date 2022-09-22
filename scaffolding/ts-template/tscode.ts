
export const add = (a: number, b: number, c?: string | number): number => {
  console.log(a + b);
  return a + b;
};

export const fun = (s: Array<string>, a: number[]) => {
  console.log(s);
};

// 枚举
enum Gender {
  Male = 0,
  Female = 1
}
export const isMale = Gender.Male === 0;

type fun1Type = string | number | boolean;
export const fun1 = (arg1: fun1Type) => {
  console.log(arg1);
};

/**
 * 接口是用来定义一个类的结构，包含哪些属性和方法
 * 接口可以在定义类的时候去限制类的结构
 * 同时接口也可以当成类型声明去使用
 * 
 * 接口所有属性都不能有实际的值
 */
interface InterFace {
  name: string;
  age: number;
};
export const object: InterFace = {
  name: 'a',
  age: 3
};
class Cls implements InterFace {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
