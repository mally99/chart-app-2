export interface Chart {
    x: string;
    y: number;
    type: Type;
}
export enum Type {
    'bar', 'line', 'scatted'
}
export class Value {
    x: string;
    y: number;
    constructor(x: string, y: number) {
        this.x = x;
        this.y = y;
    }
}