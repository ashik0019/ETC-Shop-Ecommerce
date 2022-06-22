import {types} from 'mobx-state-tree';
import {User} from './user';
import { CartModel } from './cart';

export const RootStore = types
  .model('RootStore', {
    user: User,
    cart: types.map(CartModel),
  })
  .actions(self => ({
    addToCart(item) {
			if (self.cart.has(item.id)) {
				return console.log('Product is already in the cart', item.id);
			}
      console.log(item)
			self.cart.put(item);
		},
    clearCart() {
			self.cart.clear();
		},
    removeFromCart(id) {
			self.cart.delete(id);
		},
  }))
  .views(self => ({
    get cartArray() {
			return [...self.cart.values()];
		},
    get subTotal() {
			return [...self.cart.values()].reduce(
				(prev, { price, quantity }) => prev + price * quantity,
				0
			);
		},

  }));
