import s from './Users.module.css';
import userPhoto from '../../Assets/Images/15193c074ae8ef6f13d351602618ee7d.jpg'
import {NavLink} from "react-router-dom";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return (
                    <span className={props.currentPage === p ? s.selectedPage : '' }
                          onClick={(e) => {
                              props.onPageChanged(p)
                          }}>
                                {p}
                            </span>
                )
            })}
        </div>
        {
            props.usersData.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                     className={s.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            <button
                            disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => {
                                    props.followUpdate(u.id, u.followed)
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
                </div>
            )
        }
        <div>
            <button>show more</button>
        </div>
    </div>
};


export default Users;

