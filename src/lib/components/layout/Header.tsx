import { Box, Flex, Heading, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

import ThemeToggle from './ThemeToggle';

const Header = () => {
	return (
		<Flex as='header' width='full' align='center'>
			<Heading as='h1' size='md'>
				<NextLink href='/' passHref>
					<Link>wia</Link>
				</NextLink>
			</Heading>

			<Box marginLeft='auto'>
				<ThemeToggle />
			</Box>
		</Flex>
	);
};

export default Header;
