import data from "../fish.json";
import styled from "styled-components";

const FishCard = styled.div`
  display: grid;
  grid-template-rows: 220px auto;
  border-radius: 4px;
  border: 1px dotted #3d3d3d;
`;

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 120px auto;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const Image = styled.img`
  justify-self: center;
`;

const Name = styled.h2`
  padding-left: 5px;
  align-self: start;
`;

const Infos = styled.div`
  padding-top: 12px;
  background-color: #e1ecc6;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 0px 0px 5px 5px;
  list-style: none;
`;

function Fish() {
  const fishes = data;

  return fishes
    .filter((fish) => fish.apr)
    .map((fish, i) => {
      return (
        <FishCard key={i}>
          <Header>
            <Image src={fish.imageLink} />
            <Name>{fish.name}</Name>
          </Header>
          <Infos>
            <List>
              <ListItem>💰 {fish.price} $</ListItem>
              <ListItem>📍 {fish.location}</ListItem>
              <ListItem>⌚ {fish.time}</ListItem>
            </List>
          </Infos>
        </FishCard>
      );
    });
}

export default Fish;
