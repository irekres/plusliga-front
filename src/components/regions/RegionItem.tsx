import { RegionInterface } from '../../interfaces/region.interface';

interface Props {
	region: RegionInterface;
}

export const RegionItem = ({ region }: Props) => (
	<div className='cursor-pointer'>{region.name}</div>
);
