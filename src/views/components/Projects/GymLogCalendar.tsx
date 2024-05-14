// Chakra imports
import { Text, useColorModeValue, Flex, Box, Link, Image } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
import { useState, useRef } from 'react';
// Assets
import CommonHeader from './CommonHeader'
import react_logo from 'assets/img/portfolio/skills/react_logo.png'
import typescript_logo from 'assets/img/portfolio/skills/typescript_logo.png'
import nodejs_logo from 'assets/img/portfolio/skills/nodejs_logo.png'
import firebase_logo from 'assets/img/portfolio/skills/firebase_logo.png'
import TechUsed from './TechUsed'

import system_architecture from 'assets/img/portfolio/projects/GymLogCalendar/system_archi.png'
const vdo_demo = require('assets/img/portfolio/projects/GymLogCalendar/demo_mp4.MP4')

export default function IcloudToLocal(props: { [x: string]: any }) {
	const { ...rest } = props;
	// Chakra Color Mode
	const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
	//const textColorSecondary = 'gray.400';
    const [isVisible, setIsVisible] = useState<boolean>(true)

	const headerRef = useRef<HTMLDivElement>(null);

	const handleClick = () => {
		if (headerRef.current) {
			headerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}

	return (
		<Card paddingTop='0' {...rest}>
			<div ref={headerRef}/>
            <CommonHeader 
			title='3. Gym Log Calendar ' 
			smallTitle='Personal project' 
			isVisible={isVisible} 
			setIsVisible={setIsVisible}
			style={{position: 'sticky', top:'0', zIndex:1, marginTop:'2vh'}}
			id='GymLogCalendar'
			handleClick={handleClick}/>
			<Box 
			color={textColorPrimary} 
			fontSize='l' 
			paddingLeft='2vw' 
			paddingRight='2vw' 
			paddingTop='1vh' 
			style={isVisible ?  {display: 'inline-block'} :  {display: 'none'}}>
				
			<Flex paddingTop='1vh' flexDirection='column' gap='2vh'>
				<Box>
					<TechUsed logo={react_logo} name='React-Native' bgColor='#222222' textColor='white'/>
					<TechUsed logo={typescript_logo} name='TypeScript' bgColor='#2D79C7' textColor='white'/>
					<TechUsed logo={firebase_logo} name='Firebase' bgColor='#8BC500' textColor='black'/>
				</Box>

				<Text>
                    This Gym logging app tracks workouts by featuring a calendar display for reviewing sessions. It is simple and have a clear UI. Firebase Cloud Database is integrated for storing weight and reps data. With user authentication and customizable workouts, it's the my personal tool for tracking my progressive overload workout.
				</Text>
				<Text>
					Learn more in Github Repo:{' '}
					<Link href='https://github.com/yhmyhm0910/DETR-Filter-iCloud-Photos' isExternal style={{textDecoration: 'underline'}}>
						https://github.com/yhmyhm0910/GymLogCalendar
					</Link>
				</Text>
			</Flex>	

			<Flex paddingTop='5vh' flexDirection='column' gap='1vh'>
					<Flex gap='1vw' alignItems='baseline'>
						<Text fontSize='2xl' fontWeight='bold'>
						Video Demo
						</Text>	
					</Flex>

					<Flex flexDirection='column' gap='5vh'>
						<Box >
							<video muted controls width='400vw'>
								<source src={vdo_demo} type="video/mp4" />
								Your browser does not support the video tag.
							</video>
						</Box>
					</Flex>
			</Flex>

			<Flex paddingTop='3vh' flexDirection='column' gap='1vh'>
					<Text fontSize='xl' fontWeight='bold'>
						System Architecture
					</Text>	
					<Image src={system_architecture} height='28vh' width='35vw'/>
				</Flex>
            
			</Box>

				
		</Card>
	);
}
