import { useQuery } from '@tanstack/react-query';
import { RegionInterface } from '../interfaces/region.interface';

export const useRegionsQuery = (url: string) => {
	const { data } = useQuery({
		queryKey: ['regions'],
		queryFn: async () => {
			const res = await fetch(url);
			return res.json() as Promise<RegionInterface[]>;
		},
	});

	return { data };
};
