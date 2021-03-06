import { Box } from '@chakra-ui/react';
import type { FC } from 'react';

import Footer from './Footer';
import Header from './Header';

const Layout: FC = ({ children }) => {
	return (
		<Box margin='0 auto' maxWidth={1000} transition='0.5s ease-out'>
			<Box margin='8'>
				<Header />
				<Box as='main' marginY={22}>
					{children}
				</Box>
				<Footer />
			</Box>
		</Box>
	);
};

export default Layout;
