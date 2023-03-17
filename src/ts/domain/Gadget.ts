import Buyable from "./Buyable"

export default class Gadget implements Buyable {
    count: number;
    constructor (
        readonly id: number,
        readonly name: string,
        readonly model: string,
        readonly price: number,
        count: number,
    ) {
        this.count = count;
    }
}