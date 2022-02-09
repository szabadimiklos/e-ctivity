import styled from "@emotion/styled"
import ActivityCard from "./ActivityCard"

const Deck = styled.div`
	height: 100vh;
	width: 100%;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	//display: flex;
	//flex-wrap: wrap;

	background: rgb(140, 140, 140);
`
const Test = styled.div`
	display: flex;
	flex-direction: row;
`
const TestInner = styled.div`
	flex: 1;
	background: blue;
	box-sizing: border-box;
	border: 1px solid white;
`

const ActivityCards = () => {
	return (
		<>
			<Deck>
				{[...Array(100)].map((item, index) => (
					<ActivityCard nth={index} key={index} />
				))}
			</Deck>
		</>
	)
}

export default ActivityCards