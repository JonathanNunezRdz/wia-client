import { Box } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import type { FC } from 'react';

import SomeImage from 'lib/components/samples/SomeImage';
import SomeText from 'lib/components/samples/SomeText';

const Home: FC = () => {
	return (
		<Box display={{ md: 'flex' }} alignItems='center' minHeight='60vh' gap={8} mb={8} w='full'>
			<NextSeo title='Home' />
			<SomeImage />
			<SomeText />
		</Box>
	);
};

export default Home;
