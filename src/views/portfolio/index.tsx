// Chakra imports
import { Box, SimpleGrid } from '@chakra-ui/react';
// Assets

// Custom components
import General from 'views/components/General';
import { SidebarResponsive } from 'components/sidebar/Sidebar';
import { Experience } from 'views/components/Experience';
import Skills from 'views/components/Skills';
import Projects from 'views/components/Projects/Projects';

export default function Portfolio() {
	// Chakra Color Mode
	//const brandColor = useColorModeValue('brand.500', 'white');
	//const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
	return (
		<Box>
			<SidebarResponsive/>
			<SimpleGrid columns={1} gap='10px' mb='20px'>
				<General/>
			</SimpleGrid>
			<SimpleGrid columns={1} gap='10px' mb='20px'>
				<Experience/>
			</SimpleGrid>
			<SimpleGrid columns={1} gap='10px' mb='20px'>
				<Skills/>
			</SimpleGrid>
			<SimpleGrid columns={1} gap='10px' mb='20px'>
				<Projects/>
			</SimpleGrid>
		</Box>

	);
}
