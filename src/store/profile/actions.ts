import { ActionTree } from 'vuex';
import { ProfileState, User } from './types';
import { RootState } from '../types';

export const actions: ActionTree<ProfileState, RootState> = {
    fetchData({ commit }): any {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const payload: User = {
                    firstName: 'zhao',
                    lastName: 'bin',
                    email: 'shunshiasla',
                };
                commit('profileLoaded', payload);
                resolve();
            }, 5000);
        });
    },
};
