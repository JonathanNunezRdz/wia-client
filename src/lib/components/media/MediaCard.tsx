import { Box, GridItem, Text } from '@chakra-ui/react';
import type { FC } from 'react';

export type MediaType = 'anime' | 'manga' | 'videogame';

export interface Media {
	title: string;
	type: MediaType;
	id: number;
}

interface MediaCardProps {
	media: Media;
}

const MediaCard: FC<MediaCardProps> = ({ media }) => {
	return (
		<GridItem>
			<Box borderRadius='lg' bgColor='cyan.400' p={2}>
				<Text>{media.title}</Text>
				<Text fontSize='sm' mt='0.5'>
					{media.type}
				</Text>
			</Box>
		</GridItem>
	);
};

export default MediaCard;
