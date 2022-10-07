import { reactive } from 'vue';
import evaluateExpression from '../model/Parser';
import { isLastSymbolValid } from '@/model/Operators';

export const store = reactive({
  expression: '',
  result: '',
  clear() {
    this.expression = '';
    this.result = '';
    document.getElementById('input')?.focus();
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
    if (c === 'C') {
      this.clear();
    } else {
      this.expression += c;
      this.checkAndEval();
      document.getElementById('input')?.focus();
    }
  },
});
