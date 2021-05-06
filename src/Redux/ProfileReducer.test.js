import profileReducer, {addPostActionCreator, deletePost} from "./ProfileReducer";


let initialState = {
    postsData: [
        {
            id: 1,
            message: 'Hi,How are you',
            likesCount: 12
        },
        {
            id: 2,
            message: 'It\'s my frist post?"',
            likesCount: 11
        },
        {
            id: 3,
            message: 'Yo',
            likesCount: 0
        },
        {
            id: 4,
            message: 'Yo',
            likesCount: 0
        },
        {
            id: 5,
            message: 'Yo',
            likesCount: 0
        },
        {
            id: 6,
            message: 'Yo',
            likesCount: 0
        }]
}


test('length of posts should be incremented', () => {
    let action = addPostActionCreator("new post text");
    let newState = profileReducer(initialState,action)
    expect(newState.postsData.length).toBe(7);

});

test('new post should be added', () => {
    let action = addPostActionCreator("new post text");
    let newState = profileReducer(initialState,action)
    expect(newState.postsData[newState.postsData.length-1].message).toBe("new post text");
});

test('after deleting length of messages should be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(initialState,action)
    expect(newState.postsData.length).toBe(5)
});


