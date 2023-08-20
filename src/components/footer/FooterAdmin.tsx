/*eslint-disable*/
import { Flex, Link, List, ListItem, Text, useColorModeValue } from '@chakra-ui/react';

export default function Footer() {
	const textColor = useColorModeValue('gray.400', 'white');

	return (
		<Flex
			zIndex='3'
			flexDirection={{
				base: 'column',
				xl: 'row-reverse'
			}}
			alignItems={{
				base: 'center',
				xl: 'start'
			}}
			justifyContent='space-between'
			px={{ base: '30px', md: '50px' }}
			pb='30px'>
			<Text
				color={textColor}
				textAlign={{
					base: 'center',
					xl: 'start'
				}}
				mb={{ base: '20px', xl: '0px' }}>
				{' '}
				<Text as='span' fontWeight='500' ms='4px'>
					Personal Portfolio Website. Made with passion. {new Date().getFullYear()}
				</Text>
			</Text>
			{/*
						<List display='flex'>
				<ListItem
					me={{
						base: '20px',
						md: '44px'
					}}>
					<Link fontWeight='500' color={textColor} href='mailto:hello@simmmple.com'>
						About Me
					</Link>
				</ListItem>
				<ListItem
					me={{
						base: '20px',
						md: '44px'
					}}>
					<Link fontWeight='500' color={textColor} href='https://www.simmmple.com/licenses'>
						Experience
					</Link>
				</ListItem>

			</List>
			 */}

		</Flex>
	);
}
