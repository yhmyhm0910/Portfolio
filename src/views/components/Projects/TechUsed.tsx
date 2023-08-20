// Chakra imports
import { Box, Flex, Image, Text } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';

type Props = {
    logo: string;
    name: string;
	bgColor: string;
	textColor: string;
}

// Assets
export default function TechUsed(props: Props) {

	return (
		<Box display='inline-block' marginRight='1vw'  width='auto' >
			<Flex bgColor={props.bgColor} alignItems='center' justifyContent='center' padding='2px'>
				<Image src={props.logo} height='2vh'/>
				<Text color={props.textColor} fontFamily='"Lucida Console", Courier, monospace' paddingLeft='0.3vw' paddingRight='0.3vw'>{props.name}</Text>
			</Flex>
		</Box>
	);
}
