import React , { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getServiceOrders } from '../../features/serviceOrders';
import { getEndDate } from '../../features/endDateFilter';


// components imports
import { Header } from '../../components/Header';
import { getStartDate } from '../../features/startDateFilter';


export default function Home(){
    const dispatch = useDispatch();
    const { startDate } = useSelector(getStartDate);

    console.log(startDate)

    //const { orders } = useSelector((state) => state);
    const filters = { situation:"", startDate:'2021-10-11', endDate:'2021-10-11' };

    // consts used to prevents useEffect infinite loop
    const effectStart = filters.startDate;
    const effectEnd = filters.endDate;

    useEffect(() => {
      /*   dispatch(getServiceOrders({effectStart:effectStart,effectEnd:effectEnd}));
        async function getFilter(){
            let startDate = dispatch(getStartDate());
            let endDate = dispatch(getEndDate());
            let filterOrder = dispatch(getFilterOrder());

        } */
       
    }, []);



    return (
        <Header>
          
        </Header>   
    )
};