import {
	Box,
	Button,
	Heading,
	Image,
	Text,
	Link as ChakraLink,
	Flex,
	useColorModeValue,
	Link,
} from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import NextLink from 'next/link';

import MotionBox from 'lib/components/motion/Box';

const Page404 = () => {
	const bgColor = useColorModeValue('gray.300', 'teal.500');

	return (
		<Flex minHeight='70vh' direction='column' justifyContent='center'>
			<NextSeo title='Not found' />
			<MotionBox
				animate={{ y: 20 }}
				transition={{ repeat: Infinity, duration: 2, repeatType: 'reverse' }}
				width={['100%', '70%', '60%', '60%']}
				margin='0 auto'
			>
				<Image src='/404 Error-pana.svg' alt='Error 404 not found Illustration' />
			</MotionBox>
			<Text textAlign='center' fontSize='xs'>
				<ChakraLink
					href='https://stories.freepik.com/web'
					isExternal
					rel='noopener noreferrer'
				>
					Illustration by Freepik Stories
				</ChakraLink>
			</Text>

			<Box marginY={4}>
				<Heading textAlign='center'>Page not Found.</Heading>

				<Box textAlign='center' marginTop={4}>
					<Text>It&apos;s Okay!</Text>
					<NextLink href='/' passHref>
						<Button as={Link} backgroundColor={bgColor}>
							Let&apos;s Head Back
						</Button>
					</NextLink>
				</Box>
			</Box>
		</Flex>
	);
};

export default Page404;
