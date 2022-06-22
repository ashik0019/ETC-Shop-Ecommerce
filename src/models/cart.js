import { SnapshotOrInstance, types, Instance } from 'mobx-state-tree';

export const CartModel = types
	.model('CartItem', {
		id: types.identifierNumber,
		name: types.string,
		image: types.string,
		price: types.string,
		quantity: types.number,
	})
	.actions((self) => ({
		increment() {
			self.quantity++;
		},
		decrement() {
			self.quantity--;
		},
	}))
	.views((self) => ({
		get canDecrement() {
			return self.quantity < 2;
		},
		get subtotal() {
			return self.price * self.quantity;
		},
	}));
