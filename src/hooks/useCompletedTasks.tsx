import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { useAtomValue } from 'jotai';
import { TaskType } from 'types/taskType';
import fetchData from 'utils/api/apiClient';
import apiUrl from 'utils/api/apiUrl';


export const useCompletedTasks = (

) => {

    const fetchTasks = async ({ pageParam = 1 }): Promise<TaskType> => {

        const response = await fetchData(
            { route: apiUrl.completedTasks, raw: { page: pageParam } }
        );
        return response;
    };

    return useInfiniteQuery({
        queryKey: ['completed-tasks'],
        queryFn: fetchTasks,
        staleTime: 0,
        enabled: true,
        getNextPageParam: (lastPage, pages) => lastPage.currentPage + 1,
    });
};

