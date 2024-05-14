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
            Working Experiences and Education
        </Text>
        <section className="design-section">
            <div className="timeline">

                <div className="timeline-empty">
                </div>

                <div className="timeline-middle">
                    <div className="timeline-circle"></div>
                </div>

                <div className={mode==='dark-mode' ? 'timeline-component timeline-content' : 'timeline-component timeline-content-light'}>
                    <Text fontSize='xl'>🎓  University of Guelph</Text>
                    <Text fontSize='l'>📍  Guelph, ON</Text>
                    <Text fontSize='l'>📅  Fall 2023 - July 2024 (Anticipated)</Text>
                    <Text fontSize='xl'>M.Eng in Computer Engineering</Text>
                </div>

                <div className={mode==='dark-mode' ? 'timeline-component timeline-content' : 'timeline-component timeline-content-light'}>
                    <Text fontSize='xl'>🧑🏼‍💻  Itchi Technology Limited</Text>
                    <Text fontSize='l'>📍  Hong Kong, Hong Kong</Text>
                    <Text fontSize='l'>📅  Summer 2023</Text>
                    <Text fontSize='xl'>Software Developer Intern</Text>
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
                    <Text fontSize='xl'>🎓  The Hong Kong Polytechnic University</Text>
                    <Text fontSize='l'>📍  Hong Kong, Hong Kong</Text>
                    <Text fontSize='l'>📅  2019 - 2023</Text>
                    <Text fontSize='xl'> B.Eng in Electrical Engineering</Text>
                </div>

                <div className={mode==='dark-mode' ? 'timeline-component timeline-content' : 'timeline-component timeline-content-light'} >
                    <Text fontSize='xl'>🧑🏼‍💻  Nan Fung Group</Text>
                    <Text fontSize='l'>📍  Hong Kong, Hong Kong</Text>
                    <Text fontSize='l'>📅  Summer 2022</Text>
                    <Text fontSize='xl'>Building Services Intern</Text>
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
                    <Text fontSize='xl'>🧑🏼‍💻  Hong Kong Productivity Council</Text>
                    <Text fontSize='l'>📍  Hong Kong, Hong Kong</Text>
                    <Text fontSize='l'>📅  Summer 2021</Text>
                    <Text fontSize='xl'> Smart City Division Intern</Text>
                </div>

                <div className="timeline-empty">
                </div>

        </div>
</section>
</Card>
    )
  }

