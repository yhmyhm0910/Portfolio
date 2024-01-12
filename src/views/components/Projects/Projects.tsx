// Chakra imports
import { Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
import CanTone from './CanTone';
import FYPIoT from './FYPIoT';
import IcloudToLocal from './IcloudToLocal';
import Portfolio from './Portfolio';

// Assets
export default function Projects(props: { [x: string]: any }) {
	const { ...rest } = props;
	// Chakra Color Mode
	const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
	//const textColorSecondary = 'gray.400';
	const cardShadow = useColorModeValue('0px 18px 40px rgba(112, 144, 176, 0.12)', 'unset');
	return (
		<Card paddingTop='0' marginTop='1vh' boxShadow={cardShadow} {...rest}>
			<Text color={textColorPrimary} fontWeight='bold' fontSize='3xl' mt='10px' mb='4px' id='Projects'>
				Major Projects
			</Text>
			<IcloudToLocal/> 
			<CanTone/>
			<FYPIoT/>
			<Portfolio/>
		</Card>
	);
}
