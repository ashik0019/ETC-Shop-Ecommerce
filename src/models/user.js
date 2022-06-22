import { types } from 'mobx-state-tree';

const UserInfo = types.model('UserInfo', {
    id: types.maybeNull(types.string),
    name: types.maybeNull(types.string),
    // email: types.maybeNull(types.string),
    // phone: types.maybeNull(types.string),
    // token: types.maybeNull(types.string),
    // image: types.maybeNull(types.string),
});

export const User = types
    .model('User', {
        user: types.maybe(UserInfo),
    })
    .actions(self => ({

        storeData(user) {
            self.user = user;
        },
        setName(value) {
            self.user.name = value;
        },
        setPhone(value) {
            self.user.phone = value;
        },
        setEmail(value) {
            self.user.email = value;
        },
    
        logout() {
            self.user = undefined;
        },
        setImage(value) {
            self.user.image = value;
        }
    }))
    .views(self => ({
        get userData() {
            return self.user;
        },
        get getName() {
            return self.user?.name;
        },
        get getPhone() {
            return self.user?.phone;
        },
    }));
