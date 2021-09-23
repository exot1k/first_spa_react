type bestFriendsType = {
    id:number
    name:string
    icon:string
}

let initialState = {
        bestFriends: [
            {
                id: 1,
                name: 'Dimych',
                icon: ''
            },
            {
                id: 2,
                name: 'Dimych',
                icon: ''
            },
            {
                id: 3,
                name: 'Dimych',
                icon: ''
            }] as Array<bestFriendsType>
}

type initialStateType = typeof initialState

const sidebarReducer = (state = initialState,action :any):initialStateType => {
    return state;
}

export default sidebarReducer;