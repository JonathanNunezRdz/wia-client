import { Checkbox, Stack } from '@chakra-ui/react';
import type { ChangeEvent, FC } from 'react';

import type { MediaType } from './MediaCard';

interface MediaControlsProps {
	active: Set<MediaType>;
	setActiveType: (type: Set<MediaType>) => void;
}

const MediaControls: FC<MediaControlsProps> = ({ active, setActiveType }) => {
	const types: MediaType[] = ['anime', 'manga', 'videogame'];
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const changeCheckbox = e.target.value as MediaType;
		const newActiveSet = new Set(active);
		if (active.has(changeCheckbox)) {
			newActiveSet.delete(changeCheckbox);
			setActiveType(newActiveSet);
		} else {
			newActiveSet.add(changeCheckbox);
			setActiveType(newActiveSet);
		}
	};
	return (
		<Stack spacing={5} direction='row'>
			{types.map((type) => (
				<Checkbox
					key={type}
					isChecked={active.has(type)}
					onChange={handleChange}
					value={type}
				>
					{type}s
				</Checkbox>
			))}
		</Stack>
	);
};

export default MediaControls;
