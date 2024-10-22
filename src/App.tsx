import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PlusLiga } from './components/PlusLiga';

const queryClient = new QueryClient();

export const App = () => (
	<QueryClientProvider client={queryClient}>
		<PlusLiga />
	</QueryClientProvider>
);
