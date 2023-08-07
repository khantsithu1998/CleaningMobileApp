import { useQuery } from '@tanstack/react-query';

import { TasksCountCompletedByWeekType } from 'types/tasksCountCompletedByWeekType';
import { postData } from 'utils/api/apiClient';
import apiUrl from 'utils/api/apiUrl';

export const useTasksCountCompletedByWeek = (
    weekStartDate: { weekStartDate: string | null }
) => {

    const fetchTasksCompletedByWeek = async (): Promise<TasksCountCompletedByWeekType> => {

        const response = await postData(
            { route: apiUrl.tasksCompletedByWeek, raw: { weekStartDate: weekStartDate } }
        );
        return response;
    };

    return useQuery({
        queryKey: ['tasks-count-per-week'],
        queryFn: fetchTasksCompletedByWeek,
    });
};

