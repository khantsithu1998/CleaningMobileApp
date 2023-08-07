import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { useAtomValue } from 'jotai';
import { TaskType } from 'types/taskType';
import { getData } from 'utils/api/apiClient';
import apiUrl from 'utils/api/apiUrl';


export const useCompletedTasks = (
    { date }: { date: string | null}
) => {

    const fetchTasks = async ({ pageParam = 1 }): Promise<TaskType> => {
        let query = `${pageParam}`

        if (date) {
            query += `&perPage=10&date=${date}`;
        }

        console.log(query)

        const response = await getData(
            { route: apiUrl.completedTasks, query: query }
        );
        return response;
    };

    return useInfiniteQuery({
        queryKey: ['completed-tasks'],
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

