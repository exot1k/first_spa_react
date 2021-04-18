import React from "react";
import s from './Users.module.css';
import * as axios from "axios";
import userPhoto from '../../Assets/Images/15193c074ae8ef6f13d351602618ee7d.jpg'

class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {

            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <div>
                {
                    this.props.usersData.map(u => <div key={u.id}>
                    <span>
                        <div><img src={u.photos.small != null ? u.photos.small : userPhoto}
                                  className={s.userPhoto}/></div>
                        <div>
                            <button onClick={() => {
                                this.props.changeFollow(u.id)
                            }}>
                                {u.followed ? 'Unfollow' : 'Follow'}
                            </button>
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>

                    </div>)
                }
            </div>
        )
    }
}

export default Users;

