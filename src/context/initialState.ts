import { IUserInfo } from '@/types/user'


export interface IState {
  userInfo: IUserInfo
}

const initialState = (): IState => {
  return {
    userInfo: {
      nickname: 'Ares',
      avatar: 'http://vipres.top/imgs/avatar.jpg',
    },
  }
}

export default initialState
