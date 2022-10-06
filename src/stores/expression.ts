import { reactive } from 'vue';
import evaluateExpression from '../model/Parser';
import { isLastSymbolValid } from '@/model/Operators';

export const store = reactive({
  expression: '',
  result: '',
  clear() {
    this.expression = '';
    this.result = '';
  },
  checkAndEval() {
    if (isLastSymbolValid(this.expression)) {
      // this.expression = addSpaces(this.expression);
      this.eval();
    } else {
      this.expression = this.expression.slice(0, -1);
    }
  },
  eval() {
    const result = evaluateExpression(this.expression);
    this.result = isNaN(result) ? '=N/A' : `=${result.toString()}`;
  },
  addSymbol(c: string) {
    this.expression += c;
    this.checkAndEval();
  },
});
