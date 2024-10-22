import { useRegionsQuery } from '../../hooks/useRegionsQuery';
import { RegionItem } from './RegionItem';

interface Props {
	url: string;
}

export const RegionsList = ({ url }: Props) => {
	const { data: regions } = useRegionsQuery(url);

	return (
		<div className='regions-list'>
			{regions?.map((region) => (
				<RegionItem key={region.Guid} region={region} />
			))}
		</div>
	);
};
