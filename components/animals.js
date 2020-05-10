import styled from "styled-components";
import getCurrentMonth from "../utils/date";
import Heading from "@kiwicom/orbit-components/lib/Heading";
import InputField from "@kiwicom/orbit-components/lib/InputField";
import { motion } from "framer-motion";
import Select from "@kiwicom/orbit-components/lib/Select";

const Page = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 10px;
`;

const Card = styled.div`
  display: grid;
  grid-template-rows: 200px auto;
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
  border-top: 1px dashed #eff2f5;
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

const SelectInput = styled.select`
  background: rgb(255, 255, 255) none repeat scroll 0% 0%;
  border-radius: 3px;
  cursor: pointer;
  color: #1f1f1f;
  font-family: "Roboto", -apple-system, ".SFNSText-Regular", "San Francisco",
    "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif;
  font-size: 14px;
  height: 44px;
  padding: 0px 40px 0px 12px;
  outline: currentcolor none medium;
  width: 100%;
  transition: box-shadow 0.15s ease-in-out 0s;
  z-index: 2;
  border: 0px none;
  box-shadow: rgb(186, 199, 213) 0px 0px 0px 1px inset;
`;

const Animal = ({ type }) => {
  const currentMonth = getCurrentMonth();
  const animals = type;
  const [months] = React.useState([
    { label: "January", value: "jan" },
    { label: "February", value: "feb" },
    { label: "March", value: "mar" },
    { label: "April", value: "apr" },
    { label: "May", value: "may" },
    { label: "June", value: "jun" },
    { label: "July", value: "jul" },
    { label: "August", value: "aug" },
    { label: "September", value: "sep" },
    { label: "October", value: "oct" },
    { label: "November", value: "nov" },
    { label: "December", value: "dec" },
  ]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [value, setValue] = React.useState(currentMonth);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  React.useEffect(() => {
    const results = animals.filter((animal) =>
      animal.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Page>
      <InputField
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />

      <SelectInput
        id="animals"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      >
        {months.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </SelectInput>

      <Animals>
        {searchResults
          .filter((item) => item[value])
          .map((item, i) => {
            return (
              <motion.div
                key={i}
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 0.3 }}
                translate={{ x: 100 }}
              >
                <Card>
                  <Header className="header">
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
              </motion.div>
            );
          })}
      </Animals>
    </Page>
  );
};

export default Animal;
