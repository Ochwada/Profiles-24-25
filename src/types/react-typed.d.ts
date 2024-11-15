// react-typed.d.ts
declare module 'react-typed' {
    import { Component } from 'react';

    interface TypedProps {
        strings: string[];
        typeSpeed?: number;
        backSpeed?: number;
        startDelay?: number;
        backDelay?: number;
        loop?: boolean;
        showCursor?: boolean;
        cursorChar?: string;
    }

    export default class Typed extends Component<TypedProps> { }
}
