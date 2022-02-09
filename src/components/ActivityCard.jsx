import styled from "@emotion/styled"
import { useState } from "react"

const Card = styled.div`
	perspective: 1000px; /* Remove this if you don't want the 3D effect */
	box-sizing: border-box;
	position: absolute;
	width: 250px;
	height: 400px;
	position: absolute;
	top: ${props => `calc(50% - 200px + -${(props.nth*2)}px)`};
	left: calc(50% - 125px);

	transform:
		rotateX(51deg)
		rotateZ(43deg)
		rotateY(0deg)
		translateX(0px);
	transform-style: preserve-3d;
	transition: all 0.25s;

	background: rgba(255,255,255,1.0);
	border: 1px solid rgba(0,0,0,1.0);
	border-radius: 10px;

	${(props) => {
		if(props.flipped){
			return `
				transform:
					rotateX(0deg)
					rotateZ(0deg)
					rotateY(180deg)
					translateX(50px);
				transition: all 0.75s;
				z-index: 1;
			`
		}else{
			return `
				&:hover{
					transform:
						rotateX(51deg)
						rotateZ(43deg)
						rotateY(0deg)
						translateX(50px);
				}
			`
		}
	}}
`
const Front = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	backface-visibility: hidden;
	
	box-sizing: border-box;
	padding: 10px;
	border: 10px solid white;
	background: rgba(255,255,255,1.0);

	border-radius: 10px;
	overflow: hidden;

	transform: rotateY(180deg);

	display: flex;
    align-items: center;
    justify-content: center;

	&>span{
		position: absolute;
		top: 0;
		left: 0;
	}
`
const Back = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	backface-visibility: hidden;

	box-sizing: border-box;
	padding: 10px;
	border: 10px solid white;
	background: rgba(255,100,100,1.0);

	display: flex;
	justify-content: center;
	align-items: center;
	
	color: white;
	font-family: Arial;
	font-weight: bold;
	font-size: 55px;

	border-radius: 10px;
	overflow: hidden;

	span{
		transform: rotate(45deg)
	}
`
const Questions = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`
const Question = styled.div`
	background-color: grey;
	display: flex;
	flex: 1;
	font-family: Arial;
	font-size: 21px;
	margin-bottom: 20px;

	&:nth-child(3n+1){
		background-color: #c0681c;
	}
	&:nth-child(3n+2){
		background-color: #00a8a0;
	}
	&:nth-child(3n+3){
		background-color: #ffbf2b;
	}
`
const QType = styled.div`
	flex: 1;
	background: black;
	color: white;
	padding: 5px;
	text-align: center;
`
const QContent = styled.div`
	flex: 9;
	padding: 5px;
`

const ActivityCard = ({ nth }) => {
	const [flipped, setFlipped] = useState(false)

	const handleClick = () => {
		setFlipped(prev => !prev)
	}

	return (
		<Card onClick={handleClick} nth={nth} flipped={flipped}>
			<Front>
				<span>{nth}</span>
				<Questions>
					<Question>
						<QType>A</QType>
						<QContent>Lorem</QContent>
					</Question>
					<Question>
						<QType>B</QType>
						<QContent>ipsum</QContent>
					</Question>
					<Question>
						<QType>C</QType>
						<QContent>dolor</QContent>
					</Question>
					<Question>
						<QType>D</QType>
						<QContent>sit</QContent>
					</Question>
					<Question>
						<QType>E</QType>
						<QContent>amet</QContent>
					</Question>
					<Question>
						<QType>F</QType>
						<QContent>consectetur</QContent>
					</Question>
				</Questions>
			</Front>
			<Back>
				<span>e-ctivity</span>
			</Back>
		</Card>
	)
}

export default ActivityCard