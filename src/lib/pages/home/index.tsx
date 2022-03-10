import { Box } from '@chakra-ui/react';

import SomeImage from 'lib/components/samples/SomeImage';
import SomeText from 'lib/components/samples/SomeText';

const Home = () => {
	return (
		<Box display={{ md: 'flex' }} alignItems='center' minHeight='60vh' gap={8} mb={8} w='full'>
			<SomeImage />
			<SomeText />
		</Box>
	);
};

export default Home;
