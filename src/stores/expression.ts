import { reactive } from 'vue';
import evaluateExpression from '../model/Parser';
import { isLastSymbolValid } from '@/model/Validation';

export const store = reactive({
  expression: '',
  result: '',
  clear() {
    this.expression = '';
    this.result = '';
    document.getElementById('input')?.focus();
  },
  checkAndEval() {
    if (this.expression === '') {
      this.clear();
      return;
    }
    if (isLastSymbolValid(this.expression)) {
      this.eval();
    } else {
      this.expression = this.expression.slice(0, -1);
      const input = document.getElementById('input')!;
      input.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
      setTimeout(() => {
        input.style.backgroundColor = 'white';
      }, 500);
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
