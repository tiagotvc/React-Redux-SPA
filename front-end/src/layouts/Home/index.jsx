import React , { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getServiceOrders } from '../../features/serviceOrders';


// components imports
import { Header } from '../../components/Header';


export default function Home(){
    const dispatch = useDispatch();
    const { orders } = useSelector((state) => state);

    const filters = { situation:"", startDate:'2021-10-11', endDate:'2021-10-11' };
    const effectStart = filters.startDate;
    const effectEnd = filters.endDate;

    useEffect(() => {
        dispatch(getServiceOrders(filters));
    }, [effectStart,effectEnd]);



    return (
        <Header>
          
        </Header>   
    )
};