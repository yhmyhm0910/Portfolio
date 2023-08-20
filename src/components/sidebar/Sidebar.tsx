import { useState, useEffect } from 'react';

// chakra imports
import {
	Box,
	Flex,
	Link,
	Icon,
	useColorModeValue,
	Text,
} from '@chakra-ui/react';
import '../../assets/css/Sidebar.css'

// Assets
import NightMode_btn from 'components/navbar/nightmode_btn'
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'

function Sidebar() {

	const githubLink = process.env.REACT_APP_GITHUBLINK;
	const linkedInLink = process.env.REACT_APP_LINKEDINLINK;
	const igLink = process.env.REACT_APP_IGLINK;
	const email = process.env.REACT_APP_EMAIL;

	const variantChange = '0.2s linear';
	const shadow = useColorModeValue('14px 17px 40px 4px rgba(112, 144, 176, 0.08)', 'unset');
	// Chakra Color Mode
	//const sidebarBg = useColorModeValue('white', 'navy.800');
	const sidebarMargins = '0px';
	const [isCopied, setIsCopied] = useState<boolean>(false)
	const [isMounted, setIsMounted] = useState<boolean>(false)
	const [timeOut_c, setTimeOut_c] = useState<NodeJS.Timeout | null>(null)

	useEffect(() => {
		if (isMounted) {
			if (isCopied) {
				setTimeOut_c(setTimeout(() => {
					setIsCopied(prevIsCopied => !prevIsCopied)
				}, 2000))
			}
		} else {
			setIsMounted(true)
		}

		return () => {
			if (timeOut_c) {
				clearTimeout(timeOut_c);
			}
		};

	}, [isCopied])

	const handleCopyToClipboard = () => {
		const textToCopy = email
		
		navigator.clipboard.writeText(textToCopy)
		  .then(() => {
			setIsCopied(true)
		  })
		  .catch((error) => {
			console.error('Failed to copy text to clipboard:', error);
		  });
	};

	// SIDEBAR
	return (
		<Box display={{ sm: 'none', xl: 'block' }} minWidth='40vw' position='fixed' minH='100%' paddingTop='20vh' paddingLeft='2vw'>
			<Flex
				transition={variantChange}
				w='300px'
				h='100vh'
				m={sidebarMargins}
				minH='100%'
				overflowX='hidden'
				boxShadow={shadow}
				direction='column'
				>
				<Box>
					<Text fontSize='5xl'>Jerry Yip</Text>
					<Box className='scroller'>
						<span>
							M.Eng CE Student<br/>
							Software Engineer<br/>
							Fullstack Developer
						</span>
					</Box>
					<Flex paddingTop='2vh' gap='0.5vw'>
						<Link href={githubLink} isExternal>
							<Icon as={AiFillGithub} boxSize={6}/>
						</Link>
						<Link href={linkedInLink} isExternal>
							<Icon as={AiFillLinkedin} boxSize={6}/>
						</Link>
						<Link href={igLink} isExternal>
							<Icon as={AiOutlineInstagram} boxSize={6}/>
						</Link>
						<button onClick={handleCopyToClipboard}>
							<Icon as={AiOutlineMail} boxSize={6}/>
						</button>
					</Flex>
					{isCopied ? 
						<Box display='inline-block' paddingLeft='0.3vw' paddingRight='0.3vw' bgColor='green' color='white'>
							<Text>Email address copied</Text> 
						</Box>
					: <></>}
				</Box>
				
			</Flex>
			<Box position='fixed' bottom='2vh' left='2vw'>
				<NightMode_btn toDark='Change to DARK Mode' toLight='Change to LIGHT mode'/>
			</Box>
		</Box>
	);
}


// FUNCTIONS
export function SidebarResponsive() {

	const [isCopied, setIsCopied] = useState<boolean>(false)
	const [isMounted, setIsMounted] = useState<boolean>(false)
	const [timeOut_c, setTimeOut_c] = useState<NodeJS.Timeout | null>(null)

	const githubLink = process.env.REACT_APP_GITHUBLINK;
	const linkedInLink = process.env.REACT_APP_LINKEDINLINK;
	const igLink = process.env.REACT_APP_IGLINK;
	const email = process.env.REACT_APP_EMAIL;

	useEffect(() => {
		if (isMounted) {
			if (isCopied) {
				setTimeOut_c(setTimeout(() => {
					setIsCopied(prevIsCopied => !prevIsCopied)
				}, 2000))
			}
		} else {
			setIsMounted(true)
		}

		return () => {
			if (timeOut_c) {
				clearTimeout(timeOut_c);
			}
		};

	}, [isCopied])

	const handleCopyToClipboard = () => {
		const textToCopy = email
		
		navigator.clipboard.writeText(textToCopy)
		  .then(() => {
			setIsCopied(true)
		  })
		  .catch((error) => {
			console.error('Failed to copy text to clipboard:', error);
		  });
	};
	
	return (
		<Box display={{ sm: 'flex', xl: 'none' }} alignItems='center' position='relative'>	{/* Display keep it hide from computer view */}
			<Box>
				<Text fontSize='5xl'>Jerry Yip</Text>
				<Box className='scroller'>
					<span>
						M.Eng CE Student<br/>
						Software Engineer<br/>
						Fullstack Developer
					</span>
				</Box>
				<Flex paddingTop='2vh' gap='0.5vw'>
					<Link href={githubLink} isExternal>
							<Icon as={AiFillGithub} boxSize={6}/>
						</Link>
						<Link href={linkedInLink} isExternal>
							<Icon as={AiFillLinkedin} boxSize={6}/>
						</Link>
						<Link href={igLink} isExternal>
							<Icon as={AiOutlineInstagram} boxSize={6}/>
					</Link>
					<button onClick={handleCopyToClipboard}>
							<Icon as={AiOutlineMail} boxSize={6}/>
						</button>
					</Flex>
					{isCopied ? 
						<Box display='inline-block' paddingLeft='0.3vw' paddingRight='0.3vw' bgColor='green' color='white'>
							<Text>Email address copied</Text> 
						</Box>
					: <></>}
			</Box>
			<Box position='absolute' right='0' top='0'>
				<NightMode_btn/>
			</Box>
			
		</Box>
	);
}
// PROPS

export default Sidebar;