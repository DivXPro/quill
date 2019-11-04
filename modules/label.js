import Embed from '../blots/embed';
import Quill from '../core/quill';
import Module from '../core/module';


class LabelBlot extends Embed {
  static create(value) {
    let node = super.create(value);
    if (typeof value === 'string') {
      node.setAttribute('data-value', value);
      node.textContent = value;
    }
    return node;
  }

  static value(domNode) {
    return domNode.getAttribute('data-value');
  }
}
LabelBlot.blotName = 'label';
LabelBlot.className = 'ql-label';
LabelBlot.tagName = 'SPAN';


class Label extends Module {
  static register() {
    Quill.register(LabelBlot, true);
  }
}


export { LabelBlot, Label as default };
