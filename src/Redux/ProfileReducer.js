const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


//const ADD_POST = 'ADD-POST';
//const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {

        myPostsData: {
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
                }],
            newPostText: undefined
        },

}
 const profileReducer = (state = initialState , action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.myPostsData.newPostText,
                likesCount: 0
            };

            state.myPostsData.postsData.push(newPost);
            state.myPostsData.newPostText = '';
            break;
        case UPDATE_NEW_POST_TEXT:
            state.myPostsData.newPostText = action.newText;
            break;
    }

    return state;
}

export const addPostActionCreator = () =>
    ({type: ADD_POST})

export const updateNewPostActionCreator = (newText) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: newText})
export default profileReducer;


