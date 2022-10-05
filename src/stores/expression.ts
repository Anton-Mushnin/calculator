import { reactive } from 'vue';
import evaluateExpression from '../model/Parser';

export const store = reactive({
  expression: '',
  result: '',
  eval() {
    this.result = evaluateExpression(this.expression).toString();
  },
  addSymbol(c: string) {
    this.expression += c;
  },
});
