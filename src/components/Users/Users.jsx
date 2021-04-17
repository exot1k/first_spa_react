import React from "react";
import s from './Users.module.css';


let Users = (props) => {
    if( props.usersData.length === 0){
    props.setUsers([{
        id: 1,
        fullName: 'Alex',
        photoUrl: 'https://i.pinimg.com/236x/15/19/3c/15193c074ae8ef6f13d351602618ee7d.jpg',
        status: 'I am a Boss',
        location: {
            city: 'Moscow',
            country: 'Russia'
        },
        followed: false
    },
        {
            id: 2,
            fullName: 'John',
            photoUrl: 'https://i.pinimg.com/236x/15/19/3c/15193c074ae8ef6f13d351602618ee7d.jpg',
            status: 'I am a security',
            location: {
                city: 'Moscow',
                country: 'Russia'
            },
            followed: true
        },
        {
            id: 3,
            fullName: 'Andrey',
            photoUrl: 'https://i.pinimg.com/236x/15/19/3c/15193c074ae8ef6f13d351602618ee7d.jpg',
            status: 'I am a poor',
            location: {
                city: 'Moscow',
                country: 'Russia'
            },
            followed: true
        },
        {
            id: 4,
            fullName: 'Egor',
            photoUrl: 'https://i.pinimg.com/236x/15/19/3c/15193c074ae8ef6f13d351602618ee7d.jpg',
            status: 'I am a 4 user',
            location: {
                city: 'Minsk',
                country: 'Belarus'
            },
            followed: false
        },
        {
            id: 5,
            fullName: 'Almir',
            photoUrl: 'https://i.pinimg.com/236x/15/19/3c/15193c074ae8ef6f13d351602618ee7d.jpg',
            status: 'I am a first user in a second page',
            location: {
                city: 'Moscow',
                country: 'Russia'
            },
            followed: false
        }])
    }
    return (
        <div>
            {
                props.usersData.map(u => <div key={u.id}>
                    <span>
                        <div><img src={u.photoUrl} className={s.userPhoto}/></div>
                        <div>
                            <button onClick={() => {
                                props.changeFollow(u.id)
                            }}>
                                {u.followed ? 'Unfollow' : 'Follow'}
                            </button>
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>

                </div>)
            }
        </div>
    )
}

export default Users;