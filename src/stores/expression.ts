import { reactive } from 'vue';
import evaluateExpression from '../model/Parser';
import { isLastSymbolValid, addSpaces } from '@/model/Operators';

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
    this.result = evaluateExpression(this.expression).toString();
  },
  addSymbol(c: string) {
    this.expression += c;
    this.checkAndEval();
    // this.eval();
  },
});
