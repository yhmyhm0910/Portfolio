// Chakra Imports
import {
	Box,
	Button,
	Flex,
	Icon,
	Text,
	useColorModeValue,
	useColorMode
} from '@chakra-ui/react';
// Custom Components

// Assets
import { IoMdMoon, IoMdSunny } from 'react-icons/io';

type Props = {
	toLight?: string;
	toDark?: string;
}

export default function NightMode_btn(props: Props) {
	const { colorMode, toggleColorMode } = useColorMode();
	// Chakra Color Mode
	const navbarIcon = useColorModeValue('gray.400', 'white');

	return (
		<Box >
			<Button
			variant='no-hover'
			bg='transparent'
			p='0px'
			minW='unset'
			minH='unset'
			h='18px'
			w='max-content'
			onClick={toggleColorMode}>
				<Icon
					me='10px'
					h='18px'
					w='18px'
					color={navbarIcon}
					as={colorMode === 'light' ? IoMdMoon : IoMdSunny}
				/>
				{props.toDark ? 
					colorMode === 'light' ? 
						<Text>{props.toDark}</Text>
						 : <Text>{props.toLight}</Text> 
					: ''}
			</Button>
		</Box>


	);
}
