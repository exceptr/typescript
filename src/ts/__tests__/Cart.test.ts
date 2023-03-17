import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';
import Gadget from '../domain/Gadget';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('Добавление товаров в корзину', () => {
  const cart = new Cart()
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1009, 'Мсители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', 'Фантастика, боевик, фэнтези, приключения, ...', 137, 300))
  cart.add(new Gadget(1010, 'Apple', 'Iphone 14', 90000, 3));

  expect(cart.items.length).toBe(4);
});

test('Сумма товаров в корзине', () => {
  const cart = new Cart()
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1009, 'Мсители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', 'Фантастика, боевик, фэнтези, приключения, ...', 137, 300))
  cart.add(new Gadget(1010, 'Apple', 'Iphone 14', 90000, 3));

  expect(cart.totalSum()).toBe(273200);
});

test('Итоговая сумма товаров в корзине с применённой скидкой 5%', () => {
  const cart = new Cart()
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1009, 'Мсители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', 'Фантастика, боевик, фэнтези, приключения, ...', 137, 300))
  cart.add(new Gadget(1010, 'Apple', 'Iphone 14', 90000, 3));

  expect(cart.finalTotalSum(5)).toBe(259540);
});

test('Поиск индекса товара в списке по его ID', () => {
  const cart = new Cart()
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1009, 'Мсители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', 'Фантастика, боевик, фэнтези, приключения, ...', 137, 300))
  cart.add(new Gadget(1010, 'Apple', 'Iphone 14', 90000, 3));

  expect(cart.findIndex(1010)).toBe(3);
});

test('Удаление товара из корзины по его ID', () => {
  const cart = new Cart()
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1009, 'Мсители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', 'Фантастика, боевик, фэнтези, приключения, ...', 137, 300))
  cart.add(new Gadget(1010, 'Apple', 'Iphone 14', 90000, 3));
  cart.delete(1010)

  expect(cart.items.length).toBe(3);
});

test('Уменьшение количества одного гаджета', () => {
  const cart = new Cart()
  cart.add(new Gadget(1010, 'Apple', 'Iphone 14', 90000, 3));
  cart.countMinus(1010)
  const expectedResult = [{
    id: 1010,
    name: 'Apple',
    model: 'Iphone 14',
    price: 90000,
    count: 2
  }]

  expect(cart.items).toEqual(expectedResult);
});

test('Уменьшение количества одного гаджета, если он последний в корзине', () => {
  const cart = new Cart()
  cart.add(new Gadget(1010, 'Apple', 'Iphone 14', 90000, 1));
  cart.countMinus(1010)

  expect(cart.items.length).toBe(0);
});

test('Увеличение количества одного гаджета', () => {
  const cart = new Cart()
  cart.add(new Gadget(1010, 'Apple', 'Iphone 14', 90000, 3));
  cart.countPlus(1010)
  const expectedResult = [{
    id: 1010,
    name: 'Apple',
    model: 'Iphone 14',
    price: 90000,
    count: 4
  }]

  expect(cart.items).toEqual(expectedResult);
});