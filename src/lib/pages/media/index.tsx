import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Button, Grid, Heading, IconButton, Stack } from '@chakra-ui/react';
import { useState } from 'react';

import MediaCard from 'lib/components/media/MediaCard';
import type { Media, MediaType } from 'lib/components/media/MediaCard';
import MediaControls from 'lib/components/media/MediaControls';

const media: Media[] = [
	{
		id: 0,
		title: 'Naruto',
		type: 'anime',
	},
	{
		id: 1,
		title: 'Bleach',
		type: 'anime',
	},
	{
		id: 2,
		title: 'One Piece',
		type: 'manga',
	},
	{
		id: 3,
		title: 'Jujutsu Kaisen',
		type: 'anime',
	},
	{
		id: 4,
		title: 'Horimiya',
		type: 'manga',
	},
	{
		id: 5,
		title: 'Hyouka',
		type: 'anime',
	},
	{
		id: 6,
		title: 'Genshin Impact',
		type: 'videogame',
	},
	{
		id: 7,
		title: 'Dragon Ball Series',
		type: 'anime',
	},
	{
		id: 8,
		title: 'Final Fantasy VII',
		type: 'videogame',
	},
	{
		id: 9,
		title: 'One Punch Man',
		type: 'manga',
	},
];

const MediaPage = () => {
	const [activeType, setActiveType] = useState<Set<MediaType>>(new Set<MediaType>());
	return (
		<Box minHeight='60vh' mb={8} w='full' display='flex' flexDir='column' gap={5}>
			<Heading>Media</Heading>
			{/* <Controls /> */}
			<MediaControls active={activeType} setActiveType={setActiveType} />
			{/* <MediaGrid /> */}
			<Grid templateColumns='repeat(5, 1fr)' gap={3}>
				{media.map((mediaElem) => (
					<MediaCard key={mediaElem.id} media={mediaElem} />
				))}
			</Grid>
			<Stack spacing={2} direction='row' alignSelf='center'>
				<IconButton aria-label='Previous page' icon={<ChevronLeftIcon />} />
				<Button>1</Button>
				<Button>2</Button>
				<Button>3</Button>
				<IconButton aria-label='Next page' icon={<ChevronRightIcon />} />
			</Stack>
		</Box>
	);
};

export default MediaPage;
