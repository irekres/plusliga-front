import { RegionsList } from './regions/RegionsList';

const baseUrl = 'http://localhost:3000';

export const PlusLiga = () => {
	return <RegionsList url={`${baseUrl}/region`} />;
};
