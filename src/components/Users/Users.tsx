import s from './Users.module.css';
import userPhoto from '../../Assets/Images/15193c074ae8ef6f13d351602618ee7d.jpg'
import {NavLink, useHistory} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import {FC, useEffect} from "react";
import {UsersSearchForm} from "./UsersSearchForm";
import {FilterType, getUsers} from "../../Redux/UserReducer";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFollowingProgress,
    getPageSize,
    getTotalUsersCount,
    getUsersFilter,
    getUsersSuper
} from "../../Redux/Selectors/UsersSelectors";
import * as queryString from 'querystring';

type PropsType = {}

let Users: FC<PropsType> = (props) => {

    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const usersData = useSelector(getUsersSuper)
    const followingInProgress = useSelector(getFollowingProgress)
    const history = useHistory();
    const dispatch = useDispatch()

    const followUpdate = (userId: number, isFollow: boolean) => {
        dispatch(followUpdate(userId, isFollow))
    }
    const onPageChanged = (pageNumber: number) => {
        dispatch(getUsers(pageNumber, pageSize, filter));
    }
    const onFilterChanged = (filter: FilterType) => {
        dispatch(getUsers(1, pageSize, filter));
    }

    useEffect(() => {
        const parsed = queryString.parse(history.location.search.substr(1)) as { term: string, page: string, friend: string }
        let actualPage = currentPage
        let actualFilter = filter
        if (parsed.page) actualPage = Number(parsed.page)
        if (!!parsed.term) actualFilter = {...actualFilter, term: parsed.term as string}
        if (!!parsed.friend) actualFilter = {
            ...actualFilter,
            friend: parsed.friend === "null" ? null : parsed.friend === "true" ? true : false
        }
        dispatch(getUsers(actualPage, pageSize, actualFilter));
    }, [])

    useEffect(() => {
        history.push({
            pathname: '/users',
            search: `?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`
        })

    }, [filter, currentPage])

    return <div>
        <UsersSearchForm onFilterChanged={onFilterChanged}/>
        <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize}
                   currentPage={currentPage}
                   onPageChanged={onPageChanged}/>
        {
            usersData.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={`/profile/${u.id}`}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                     className={s.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            <button
                                disabled={followingInProgress.some(id => id === u.id)}
                                onClick={() => {
                                    followUpdate(u.id, u.followed)
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

