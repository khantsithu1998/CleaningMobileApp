import { useQuery } from '@tanstack/react-query';

import { postData } from 'utils/api/apiClient';
import apiUrl from 'utils/api/apiUrl';

export const useTasksDurationPerWeek = (
    weekStartDate: { weekStartDate: string | null }
) => {

    const fetchTasksDurationPerWeek= async (): Promise<TasksDurationPerWeekType> => {

        const response = await postData(
            { route: apiUrl.totalTasksDurationPerWeek, raw: { weekStartDate: weekStartDate } }
        );
        return response;
    };

    return useQuery({
        queryKey: ['total-tasks-duration-per-week'],
        queryFn: fetchTasksDurationPerWeek,
    });
};

