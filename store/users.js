// 데이터 모델
import { Users } from './SampleData';
import { User } from '@/components/MainContainer/Data/User';
import { Chat } from '@/components/MainContainer/Data/Chat';

export const state = () => ({
  users: []
})

export const mutations = {

  // 현재 Users 데이터 기준으로 users 세팅
  initUsers() {
    let self = this;
    let keys = Object.keys( Users );
    keys.forEach(function( key ){
      let user = new User( key, Users[ key ].ip );
      self.state.users.users.push( user );
    });
  },
  async initChats() {
    let self = this;
    console.log(await this.$axios.$get('/api'))
    console.log(await this.$axios.$get('/socket'));
  }

}
