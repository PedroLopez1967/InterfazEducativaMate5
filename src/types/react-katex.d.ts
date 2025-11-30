declare module 'react-katex' {
  import { Component } from 'react';

  interface MathProps {
    children?: string;
    math?: string;
    block?: boolean;
    errorColor?: string;
    renderError?: (error: Error) => React.ReactNode;
  }

  export class InlineMath extends Component<MathProps> {}
  export class BlockMath extends Component<MathProps> {}
}
