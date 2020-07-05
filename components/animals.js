import styled from "styled-components";
import getCurrentMonth from "../utils/date";
import useSpecies from "../utils/dataProvider";

const Page = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 10px;
`;

const Card = styled.div`
  display: grid;
  grid-template-rows: 220px auto;
  border-radius: 4px;
  border: 1px dotted #3d3d3d;
`;

const Animals = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(192px, 1fr));
  gap: 10px;
`;

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 120px auto;
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
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 0px 0px 5px 5px;
  list-style: none;
`;

const Animal = ({ type }) => {
  const animals = useSpecies(`${type}`);
  const currentMonth = getCurrentMonth();

  return (
    <Page>
      <Animals>
        {animals
          .filter((item) =>
            item.availability["month-array-northern"].includes(currentMonth)
          )
          .map((item, i) => {
            return (
              <Card key={i}>
                <Header>
                  <Image src={item["icon_uri"]} />
                  <Name>{item.name["name-EUen"]}</Name>
                </Header>
                <Infos>
                  <List>
                    <ListItem>💰 {item.price} $</ListItem>
                    <ListItem>📍 {item.availability.location}</ListItem>
                    <ListItem>⌚ {item.availability.time}</ListItem>
                  </List>
                </Infos>
              </Card>
            );
          })}
      </Animals>
    </Page>
  );
};

export default Animal;
