import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    totalSum(): number {
        return this._items.reduce((acc, item) => {
            if (item.count) {
                return acc + item.price * item.count;
            }
            return acc + item.price;
        }, 0);
    }

    finalTotalSum(discount: number): number {
        const _discount: number = this.totalSum() * discount / 100;
        return this.totalSum() - _discount;
    }

    findIndex(id: number) {
        return this._items.findIndex(item => item.id === id);
    }

    delete(id: number): void {
        this._items.splice(this.findIndex(id), 1);
    }

    countMinus(id: number): void {
        let index: number = this.findIndex(id);
        let count: number | undefined = this._items[index].count;
        if (count && count > 1) {
            this._items[index].count = count - 1
        }
        if (count === 1) {
            this.delete(id);
        }
    }

    countPlus(id: number): void {
        let index: number = this.findIndex(id);
        let count: number | undefined = this._items[index].count;
        if (count) {
            this._items[index].count = count + 1
        }
    }
}