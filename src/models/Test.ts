export default interface SomeTesting {
  test: (asd: string) => () => any;
}

function func1() {
  const name: string = 'gosho'

  return function func2() {
    console.log(name);
  }
}



func1