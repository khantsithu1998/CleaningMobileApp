import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { useAtomValue } from 'jotai';
import { TaskType } from 'types/taskType';
import { getData } from 'utils/api/apiClient';
import apiUrl from 'utils/api/apiUrl';


export const useTasks = (
    { startDate, endDate }: { startDate: string | null, endDate: string | null }
) => {

    const fetchTasks = async ({ pageParam = 1 }): Promise<TaskType> => {
        let query = pageParam.toString()

        if (startDate && endDate) {
            query += `&startDate=${startDate}&endDate=${endDate}`;
        }
        const response = await getData(
            { route: apiUrl.tasks, query : query }
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

