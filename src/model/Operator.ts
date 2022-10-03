abstract class Operator {
  image?: string;
  evaluate: Function;
  symbol: string;

  constructor(symbol: string, evaluate: Function, image?: string) {
    this.symbol = symbol;
    this.evaluate = evaluate;
    this.image = image;
  }
}

class UnaryOperator extends Operator {
  declare evaluate: (val: number) => number;

  constructor(
    symbol: string,
    evaluate: (val: number) => number,
    image?: string
  ) {
    super(symbol, evaluate, image);
  }
}

class BinaryOperator extends Operator {
  priority: number;
  declare evaluate: (val1: number, val2: number) => number;
  constructor(
    symbol: string,
    evaluate: (val1: number, val2: number) => number,
    priority: number,
    image?: string
  ) {
    super(symbol, evaluate, image);
    this.evaluate = evaluate;
    this.priority = priority;
  }
}

export { UnaryOperator, BinaryOperator };
