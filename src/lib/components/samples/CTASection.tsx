import { Box, Button, Flex, Image, Link } from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';

const repoLink = 'https://github.com/sozonome/nextarter-chakra';

const CTASection = () => {
	return (
		<Box textAlign={{ base: 'center', md: 'left' }}>
			<Flex justifyContent='space-evenly' marginY={4}>
				<Box>
					<Button
						as={Link}
						href='https://github.com/sozonome/nextarter-chakra/generate'
						isExternal
					>
						Use This Template
					</Button>
				</Box>

				<Box>
					<Button as={Link} href={repoLink} leftIcon={<AiFillGithub />} isExternal>
						Open in Github
					</Button>
				</Box>
			</Flex>
			<Flex justifyContent='center'>
				<Link href={repoLink} isExternal rel='noopener noreferrer'>
					<Image
						align='center'
						src='https://img.shields.io/github/stars/sozonome/nextarter-chakra?style=social'
						alt='github stars'
					/>
				</Link>
			</Flex>
		</Box>
	);
};

export default CTASection;
