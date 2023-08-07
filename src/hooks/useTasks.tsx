import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { useAtomValue } from 'jotai';
import { TaskType } from 'types/taskType';
import { getData } from 'utils/api/apiClient';
import apiUrl from 'utils/api/apiUrl';


export const useTasks = (
    { date }: { date: string | null }
) => {

    const fetchTasks = async ({ pageParam = 1 }): Promise<TaskType> => {
        let query = pageParam.toString()

        if (date) {
            query += `&perPage=10&date=${date}`;
        }

        console.log("endpoint : ", apiUrl.tasks, query)
        const response = await getData(
            { route: apiUrl.tasks, query: query }
        );
        return response;
    };

    return useInfiniteQuery({
        queryKey: ['tasks'],
        queryFn: fetchTasks,
        staleTime: 0,
        enabled: true,
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.totalPages == lastPage.currentPage) {
                return null
            }

            return lastPage.currentPage + 1
        },
    });
};

