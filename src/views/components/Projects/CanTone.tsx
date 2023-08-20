// Chakra imports
import { Text, useColorModeValue, Flex, Box, Image } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
import { useState, useRef } from 'react';
// Assets
import CommonHeader from './CommonHeader';

// Assets
import TechUsed from './TechUsed';
import js_logo from 'assets/img/portfolio/skills/js_logo.png'
import react_logo from 'assets/img/portfolio/skills/react_logo.png'
import websocket_logo from 'assets/img/portfolio/skills/websocket_logo.png'
import markdownit_logo from 'assets/img/portfolio/skills/markdownit_logo.png'
import css_logo from 'assets/img/portfolio/skills/css_logo.png'
import nodejs_logo from 'assets/img/portfolio/skills/nodejs_logo.png'
import firebase_logo from 'assets/img/portfolio/skills/firebase_logo.png'
import github_logo from 'assets/img/portfolio/skills/github_logo.png'
import wizardlm_logo from 'assets/img/portfolio/skills/wizardlm_logo.png'
import python_logo from 'assets/img/portfolio/skills/python_logo.png'
import gitlab_logo from 'assets/img/portfolio/skills/gitlab_logo.png'
import sourcetree_logo from 'assets/img/portfolio/skills/sourcetree_logo.png'
import system_architecture from 'assets/img/portfolio/projects/cantone/system_architecture.png'
const basic_conversation = require('assets/img/portfolio/projects/cantone/basic_conversation.mp4')
const basic_code_conversation = require('assets/img/portfolio/projects/cantone/basic_code_conversation.mp4')
const have_conn_after_logout = require('assets/img/portfolio/projects/cantone/have_conn_after_logout.mp4')


export default function CanTone(props: { [x: string]: any }) {
	const { ...rest } = props;
	// Chakra Color Mode
	const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
	/*const textColorSecondary = 'gray.400';
	const cardShadow = useColorModeValue('0px 18px 40px rgba(112, 144, 176, 0.12)', 'unset');
    const iconColor = useColorModeValue('brand.500', 'white');
	const bgColor = useColorModeValue("white", "#101C44")*/
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
			title='CanTone-AI' 
			smallTitle='Itchi Technology Limited' 
			isVisible={isVisible} 
			setIsVisible={setIsVisible} 
			style={{position: 'sticky', top:'0', zIndex:1, marginTop:'2vh'}}
			handleClick={handleClick}
			/>
			<Box 
			color={textColorPrimary} 
			fontSize='l' 
			paddingLeft='2vw' 
			paddingRight='2vw' 
			paddingTop='1vh' 
			style={isVisible ?  {display: 'inline-block'} :  {display: 'none'}}>
				<Text fontSize='l'>
					This project aims to utilise the open-source NLP model WizardLM-30B-4bit GPTQ to generate Cantonese responses to clients’ Cantonese instruction via web.
				
					<br/><br/>
					Since it is a project from a start-up company, I am responsible for more and the following are my contributions.
				</Text>

				<Flex paddingTop='3vh' flexDirection='column' gap='1vh'>
					<Text fontSize='xl' fontWeight='bold'>
						System Architecture
					</Text>	
					<Image src={system_architecture} height='30vh' width='35vw'/>
				</Flex>

				<Flex paddingTop='3vh' flexDirection='column' gap='1vh'>
					<Text fontSize='xl' fontWeight='bold'>
						1. Web Client
					</Text>	
					
					<Box>
						<TechUsed logo={react_logo} name='ReactJS' bgColor='#222222' textColor='white'/>
						<TechUsed logo={js_logo} name='JavaScript' bgColor='#F7E018' textColor='black'/>
						<TechUsed logo={websocket_logo} name='Web Socket' bgColor='black' textColor='white'/>
						<TechUsed logo={markdownit_logo} name='MarkDown-it' bgColor='#d9d9d9' textColor='black'/>
						<TechUsed logo={css_logo} name='CSS' bgColor='#09729B' textColor='white'/>
					</Box>

					<Box>
						<Text>
							Built authentication by using Firebase user profile as a token stored in Cookies.
							<br/>
							Created a custom markdown-it renderer rule for code response, including a copy-code button.

						</Text>
					</Box>
				</Flex>
				<Flex paddingTop='3vh' flexDirection='column' gap='1vh'>
					<Text fontSize='xl' fontWeight='bold'>
						2. SocketAPI
					</Text>	
					
					<Box>
						<TechUsed logo={nodejs_logo} name='NodeJS' bgColor='#8BC500' textColor='black'/>
						<TechUsed logo={js_logo} name='JavaScript' bgColor='#F7E018' textColor='black'/>
						<TechUsed logo={websocket_logo} name='Web Socket' bgColor='black' textColor='white'/>
						<TechUsed logo={firebase_logo} name='Firebase' bgColor='#00BCD4' textColor='white'/>
					</Box>

					<Box>
						<Text>
							Completely built from scratch
							<br/>
							Proxy server between AI server and web client.
							<br/>
							Stores all chat history of active users for generating continuous, relational responses.

						</Text>
					</Box>
				</Flex>
				<Flex paddingTop='3vh' flexDirection='column' gap='1vh'>
					<Text fontSize='xl' fontWeight='bold'>
						3. AI Server
					</Text>	
					
					<Box>
						<TechUsed logo={github_logo} name='Open-source NLP WebUI' bgColor='#3A3A3A' textColor='white'/>
						<TechUsed logo={wizardlm_logo} name='WizardLM' bgColor='#FBAC1C' textColor='white'/>
						<TechUsed logo={python_logo} name='Python' bgColor='#19225e' textColor='white'/>
						<TechUsed logo={websocket_logo} name='Web Socket' bgColor='black' textColor='white'/>
					</Box>

					<Box>
						<Text>
						Uses Oobabooga/text-generation-webui from Github to load pre-trained models from HuggingFace.
						<br/>
						The pre-built WebSocket server API streams AI-generated answers to the proxy server.
						</Text>
					</Box>
				</Flex>
				<Flex paddingTop='3vh' flexDirection='column' gap='1vh'>
					<Text fontSize='xl' fontWeight='bold'>
						4. Database Communication (Firebase)
					</Text>	
					
					<Box>
						<TechUsed logo={nodejs_logo} name='NodeJS' bgColor='#8BC500' textColor='black'/>
						<TechUsed logo={firebase_logo} name='Firebase' bgColor='#00BCD4' textColor='white'/>
					</Box>

					<Box>
						<Text>
							Use pre-built APIs to further develop project-oriented APIs: insert, fetch and delete chat histories.
						</Text>
					</Box>
				</Flex>
				<Flex paddingTop='3vh' flexDirection='column' gap='1vh'>
					<Text fontSize='xl' fontWeight='bold'>
						Version Controls
					</Text>	
					
					<Box>
						<TechUsed logo={gitlab_logo} name='GitLab' bgColor='#FC6D21' textColor='white'/>
						<TechUsed logo={sourcetree_logo} name='SourceTree' bgColor='#005CF2' textColor='white'/>
					</Box>
				</Flex>

				<Flex paddingTop='5vh' flexDirection='column' gap='1vh'>
					<Flex gap='1vw' alignItems='baseline'>
						<Text fontSize='2xl' fontWeight='bold'>
						Video Demos
						</Text>	
						<Text fontSize='xs'>
							(Authorized by the company)
						</Text>	
					</Flex>

					<Flex flexDirection='column' gap='5vh'>
						<Box >
							<Text fontSize='l' fontWeight='bold' color={textColorPrimary}>
								Normal Conversation of CanTone-AI:
							</Text>
							<video muted controls style={{height:'60vh'}}>
								<source src={basic_conversation} type="video/mp4" />
								Your browser does not support the video tag.
							</video>
						</Box>

						<Box >
							<Text fontSize='l' fontWeight='bold' color={textColorPrimary}>
								It still has relational responses after logging out or ending a session:
							</Text>
							<video muted controls style={{}}>
								<source src={have_conn_after_logout} type="video/mp4" />
								Your browser does not support the video tag.
							</video>
						</Box>

						<Box >
							<Text fontSize='l' fontWeight='bold' color={textColorPrimary}>
								A custom Mark-Down it renderer with 'copy code' button is developed for code responses:
							</Text>
							<video muted controls style={{height:'60vh'}}>
								<source src={basic_code_conversation} type="video/mp4" />
								Your browser does not support the video tag.
							</video>
						</Box>
					</Flex>


				</Flex>

			</Box>

		</Card>
	);
}
