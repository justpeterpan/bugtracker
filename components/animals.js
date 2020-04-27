import styled from "styled-components";
import getCurrentMonth from "../utils/date";

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
  grid-template-columns: 1fr 1fr;
  gap: 10px;
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

const SearchInput = styled.input`
  height: 40px;
`;

const Animal = ({ type }) => {
  const animals = type;

  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  React.useEffect(() => {
    const results = animals.filter((animal) =>
      animal.name.includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  const currentMonth = getCurrentMonth();

  return (
    <Page>
      <SearchInput
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <Animals>
        {searchResults
          .filter((item) => item[currentMonth])
          .map((item, i) => {
            return (
              <Card key={i}>
                <Header>
                  <Image src={item.imageLink} />
                  <Name>{item.name}</Name>
                </Header>
                <Infos>
                  <List>
                    <ListItem>💰 {item.price} $</ListItem>
                    <ListItem>📍 {item.location}</ListItem>
                    <ListItem>⌚ {item.time}</ListItem>
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
