import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { useAtomValue } from 'jotai';
import { TaskType } from 'types/taskType';
import fetchData from 'utils/api/apiClient';


export const useTasks = (
    // filterParams:
    //     {
    //         transaction_types: string[] | null,
    //         start_date: string | null,
    //         end_date: string | null
    //     }
        ) => {

    const fetchTasks = async ({ pageParam = 1 }): Promise<TaskType> => {

        // console.log('filterParams', filterParams)
        // const { transaction_types, start_date, end_date } = filterParams;
        let data: any = {
           
            // ...(transaction_types && { transaction_types }),
            // ...(start_date && { start_date }),
            // ...(end_date && { end_date }),
        };

        const response = await fetchData(
            pageParam
        );
        return response;
    };

    return useInfiniteQuery( {
        queryKey : ['tasks'],
        queryFn : fetchTasks,
        staleTime: 0,
        enabled: true,
        getNextPageParam: (lastPage, pages) => lastPage.currentPage + 1,
    });
};

