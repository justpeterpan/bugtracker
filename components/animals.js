import styled from "styled-components";
import getCurrentMonth from "../utils/date";
import Heading from "@kiwicom/orbit-components/lib/Heading";
import InputField from "@kiwicom/orbit-components/lib/InputField";

const Page = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 10px;
`;

const Card = styled.div`
  display: grid;
  grid-template-rows: 180px auto;
  border: 1px solid #eff2f5;
  border-radius: 3px;
`;

const Animals = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(174px, 1fr));
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

const Name = styled.span`
  padding-left: 5px;
  align-self: start;
`;

const Infos = styled.div`
  border-top: 1px solid #eff2f5;
  padding-top: 12px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0px 10px 10px 10px;
  list-style: none;
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
      animal.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  const currentMonth = getCurrentMonth();

  return (
    <Page>
      <InputField
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
                <Header className='header'>
                  <Image src={item.imageLink} />
                  <Heading type="title2">
                    <Name>{item.name}</Name>
                  </Heading>
                </Header>
                <Infos>
                  <List>
                    <ListItem>
                      <span>💰</span> {item.price} $
                    </ListItem>
                    <ListItem>
                      <span>📍</span> {item.location}
                    </ListItem>
                    <ListItem>
                      <span>⌚</span> {item.time}
                    </ListItem>
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
