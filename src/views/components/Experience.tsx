import { useColorModeValue } from "@chakra-ui/system"
import Card from 'components/card/Card';
import { Text } from "@chakra-ui/react";
import '../../assets/css/Experience.css'

export function Experience() {
    const mode = useColorModeValue("light-mode", "dark-mode")
    const bgColor = useColorModeValue("white", "#101C44")
	// Chakra Color Mode
	const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
    const cardShadow = useColorModeValue('0px 18px 40px rgba(112, 144, 176, 0.12)', 'unset');
    
    return (  
    <Card paddingTop='0' marginTop='1vh' boxShadow={cardShadow}>

        <Text color={textColorPrimary}
        fontWeight='bold' 
        fontSize='3xl' 
        marginTop='2vh'
        mb='4px' 
        zIndex={1}
        bgColor={bgColor}>
            Experiences
        </Text>
        <section className="design-section">
            <div className="timeline">

                <div className="timeline-empty">
                </div>

                <div className="timeline-middle">
                    <div className="timeline-circle"></div>
                </div>

                <div className={mode==='dark-mode' ? 'timeline-component timeline-content' : 'timeline-component timeline-content-light'} >
                    <Text fontSize='l'>👷🏼‍♂️  Nan Fung Group (HK)</Text>
                    <Text fontSize='xs'>2022/06 - 2022/08</Text>
                    <Text fontSize='l'>Building Services (Intern)</Text>
                </div>

                <div className={mode==='dark-mode' ? 'timeline-component timeline-content' : 'timeline-component timeline-content-light'}>
                    <Text fontSize='l'>🎓  The Hong Kong Polytechnic University</Text>
                    <Text fontSize='xs'>2019 - 2023</Text>
                    <Text fontSize='l'>B.Eng in Electrical Engineering</Text>
                </div>

                <div className="timeline-middle">
                    <div className="timeline-circle"></div>
                </div>

                <div className="timeline-empty">
                </div>

                <div className="timeline-empty">
                </div>

                <div className="timeline-middle">
                    <div className="timeline-circle"></div>
                </div>

                <div className={mode==='dark-mode' ? 'timeline-component timeline-content' : 'timeline-component timeline-content-light'}>
                    <Text fontSize='l'>🧑🏼‍💻  Itchi Technology Limited (HK)</Text>
                    <Text fontSize='xs'>2023/06 - 2023/08</Text>
                    <Text fontSize='l'>Software Developer (Intern)</Text>
                </div>

                <div className={mode==='dark-mode' ? 'timeline-component timeline-content' : 'timeline-component timeline-content-light'}>

                    <Text fontSize='l'>🎓  University of Guelph</Text>
                    <Text fontSize='xs'>2023/09 - Current</Text>
                    <Text fontSize='l'>M.Eng in Computer Engineering</Text>
                </div>

                <div className="timeline-middle">
                    <div className="timeline-circle"></div>
                </div>

                <div className="timeline-empty">
                </div>

        </div>
</section>
</Card>
    )
  }

