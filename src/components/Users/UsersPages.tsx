import React from 'react';
import {useSelector} from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {getFetching} from "../../Redux/Selectors/UsersSelectors";

export const UsersPages = () => {
    const isFetching = useSelector(getFetching)
    return <>
        {isFetching ? <Preloader/> : null}
        <Users/>
    </>
}
