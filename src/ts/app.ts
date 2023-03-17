import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';
import Gadget from './domain/Gadget';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(1009, 'Мсители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', 'Фантастика, боевик, фэнтези, приключения, ...', 137, 300))
cart.add(new Gadget(1010, 'Apple', 'Iphone 14', 90000, 3));
// console.log(cart.items);
console.log(cart.totalSum())
console.log(cart.finalTotalSum(5))
console.log(cart.delete(1001));
console.log(cart.countMinus(1010))
console.log(cart.countPlus(1010))
console.log(cart.countPlus(1010))

console.log(cart.items);