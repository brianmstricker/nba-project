import { useEffect, useState } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import axios from "axios";
import useFantasyTeamStore from "../store/fantasyTeam";

const Homepage = () => {
  const [players, setPlayers] = useState([]);
  const [searchPlayer, setSearchPlayer] = useState("");
  const addPlayerToFantasyTeam = useFantasyTeamStore(
    (state) => state.addPlayer
  );
  const removePlayerFromFantasyTeam = useFantasyTeamStore(
    (state) => state.removePlayer
  );
  useEffect(() => {
    const fetchPlayers = async () => {
      const { data: playersData } = await axios.get(
        "http://localhost:3000/players"
      );
      setPlayers(playersData);
    };
    fetchPlayers();
  }, []);
  const getFilteredPlayers = () => {
    return players.filter((player) => {
      return player.name.toLowerCase().includes(searchPlayer.toLowerCase());
    });
  };
  const onSearchPlayerChange = (e) => {
    setSearchPlayer(e.target.value);
  };
  if (!players.length) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <Container>
        <Row>
          <input
            className="form-control mt-4 mx-auto mb-3"
            style={{ width: "50%", minWidth: "200px" }}
            placeholder="Search Player By Name"
            type="text"
            value={searchPlayer}
            onChange={onSearchPlayerChange}
          />
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-center">
          {getFilteredPlayers().map((player) => (
            <Card
              className="d-inline-block my-2 shadow"
              style={{ width: "16rem", margin: "0 1rem" }}
              key={player._id}
            >
              <Card.Img
                variant="top"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRYVFhUZGBgYHBkaHRgaHBofHBgeGBkdHBgZGhohJS4mHB4rHxwcJjgmKy8xNjU1HiQ7QDs0Py40NTEBDAwMEA8QHxISHjcsJSw1ND02PT00NjY2NjQ2NDQ0NDQ0NDE0NDQ0MTQ0ND0xNDQ0NjQ1NDQ0NDQ0NDQ0NDQ0P//AABEIAL8BCAMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABQYDBwECBAj/xABBEAACAQIEAwQHBAgFBQEAAAABAgADEQQSITEFQVEGImFxBxMygZGhsUJS0fAUI2KCkrLB4SQzY3LCQ3ODorM0/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAMEAQIFBv/EACsRAAMAAgEEAAMIAwAAAAAAAAABAgMRIQQSMUEiUXEFEzI0YYGRsSMz0f/aAAwDAQACEQMRAD8A3NERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREASJ7RccpYKg1eqTlXYDdidAo8byL7cdr04fQWoEFV2cItPOF5EsSbEgADpuRNCdq+0VXG13quWCMe5TzMVRQLAAE2BtuRzJgF1476Xa7OwwioqFVsaiEurZe+PaynvHQkcttZXOJ+kTiFenkavlU6n1aqhOtwCw1t5W8byqiwPhOWHKYMlmwfb7iNNs/wCks5ylbOFZdrDS2hGhv1GtxvP9nPSpXoKlOuhxCi93LfrSCSbXOh3FvKa7InOX+wgH012b7WYbHLei9n+1TawqL5rzHiLiWCfI9GoyMrqxVlIyshKsp6hhqD5Tcfo89IwqerwmLJ9aWCJWO1Qn2Fe2zcr7HTnMmDasREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEhO0vaPD4JFeu+TPcJ3Wa7AbWHnJuaU9N/FaL1KGHW5q0cxY/ZVaiqct/vHKpgGteJ4xq1WpUZrl3Z+g7x+7sNLTCiE9SZ2w1DO4XYbnyk3SwqqABI7tSTY8Toi6GBdv7mSOH4Azbuo67m+uv58JL4TBXkrSwMr1nr0W56afZWD2Zfk6/OYMRwGou1m53H0EvKYbwnWphJqs9Ga6WDW70WXdSN9xacK7KVZCVYbMpsR4gjWXLGYLcEeYld4xw7IA67HQjofwIk8ZlT0ytkwOVteDc3or7UDFYf1DszVqAAZmYEupJysNbmwspJ8NdZf58w9j+KjC4ujWZSyBgGA3sToR4g2Pun02huAesnKx3iIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAJ85+litm4lX7uXKEQ/t2QNm8bhgP3Z9GT599MOHy8SY5SA9Om19e8dVNj7gIBWuD0e6zeQ/rJrD0L8p4uFU+54XHyEmsKcoJlPI33M6OFalHuwdOwkpTWR+GxdFSM1RVPQ+MmaTo/sOG8jeQuX7JlSfB1Sn1EysgttMyU5xUyKLu6rfqQIUmaZBY+nvIPHYbOjL4GWbEvTOzhr9DeR9WjqfgZlJyzWnNLRrllyg3+tvPWfVXDa4qUaTqCA6IwB3AZQQD42M+X+IUO+U2uctzyubX+c+osBRCU6aDZEVRbayqAPpOgvByq4Z6oiJkwIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIBxNNenHAMKmHr6ZCrUzrqGBzXt0tfX8ZuWaq9Kyg4mgG9n1T7i+ubl05TWnpbN8cd9aKJgRZQPfJPD0lUZnNl/P5tPDSSzkchp/WSDUFqCxsF8fwlSnzsvxPGjKOI4drU1psxY2HdY72tqqkfaHPS4vCVxTa2Wwv8OXLny1ncUUVg+7rYhh1FgDub+yvwkfiHZnJa5JN7m5J8bnymH2tcG8qk+dFtw2MVkvzkLjMUjOSUz2BY6E2A3PM/ATvgT3Rr4TFUokNpcaFTYkZgdw1v6zWdb5N6n5GTC8SwzjurkIuPZK6+RAJ1BFxfYzvXpWuw2I/veKOBphCgFs1rgnexzDXl3iTOzoFUr8PKbulvgjUvXPkqicKbFY2lQGnrWALWuAupJPuVp9JItgB0E05wCmFr4Y2sfWKb8iLbX63O3hNyS1jruRRz4+1r9TtERNyEREQBERAEREAREQBERAEREAREQBERAEREAREQDiav8ASxXZKuGJXu5XAa2xJXPc+QX5zaErfbnhRxGGKqudkIdV62uCB45SZpa3LRJirttM08EAZlvfY36ggEGe/CguQtgBIvGIaboMjIpUoMwIAym4GvPXaSfCn72u/KVL4SOjD+JkmeGXkTiKQGYm6hRc2BZj7gLkSZxvFkS4vtofMbiQ1TijsbLSv0JNvnNEuSV0vBI4H1Xqc+ewylsx8DrO9CmHF7ltNGsQbdCDaeVMe6AEUFJ1vYnTxB6zLR41r36bJfqD85lr5DfzJBOH2F/yJ5a5tcHlzntw/EUcEKb6XHjbcW5EDWRXFcQFBPID68pheUjWntNmfhVRv0jD00UuxZHbayXIP01m5pSOxfAmRxWenkslhcAMzEAFiNxYXGvWXaXcUtLk5/UWqpJekdoiJIVxERAEREAREQBERAEREAREQBERAEREAREQBERAEREA1l6Z8N+ooVQbZKliL/fG9ueoHzmvuG4o5h1G2vSbs7Z8DXF4WpTK5mAzpbfMoOW308Z860sU6MORU2II100II66bSLJHcWMOTtLSlMENr37GxIvYk9N/fPRw6vStaq1QNZvZAIzW7pHvvofCV/AcTyubm4JljemB3wLje45fiPxldrtfJdila4JlMNhQx/XuFy3uVF8xJ0tlGwsffIjG1rsFplmvvmWw2FyNTzv0850XEm/sDrrb37T2NUCozsLaG/j0Ey6TXgk1r22ePA0MtQtmAy3aw0W9mFh0GvPpIfiuMLi+tiSALjfy58tZgqcWOd3A0IYWv4aG9vKejspgGxmKpUuV8zX2Crv8TYe+bxje9sqZMqS0j6G4e16VMm9yqnXfYT1Toi2AA0A0A8BtO8slEREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREA4nzd2v4b/icS6cq1Ykf+Rz+RPpGaM40n+LxI61anzcyLLXakybDKptM18jG49/5+EmMBxBkXKGsOh1t4TLj+AsvepjMNyOYPOwkW1Ng1jdSORH1mNzSN57oZY04m1gQQbai46bGR+P4rUcFXa4PLp+E8DOxXVjfyvtytMuHwFRzcIx8dh11OwmqiZ5JKy3XCPMBmYAa30HU3285s/0TYL1WIcMAHak3u76G15BcK4ElIB27z8uieXWWTsa1scnRlcefd/tMfe7pSjH3OodV5NrRESyUxERAEREAREQBERAEREAREQBERAEREAREQBERAERMVaqqgszBVG5YgD4mAZJh9ctyMwuNSLi490pfbXtVVTDVGwa5mUd6oRoi/aKruSBrc6aHeaX4G2eqyuxZqxvnJ7xqXJFyebXYeJYdZlxSh1rwZS20jfPG+22GoXVT66p9xNQP9zbL5anwmsq1VqrtVe2Z2LG2gBY3IA6Tmlw4Is7YVbkS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"
              />
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title>{player.name}</Card.Title>
                <Card.Text>
                  {player.position && player.position.toUpperCase()} - #
                  {player.number}
                </Card.Text>
                <div className="d-flex flex-row gap-2">
                  <Button
                    variant="primary"
                    onClick={() => {
                      addPlayerToFantasyTeam(player);
                    }}
                  >
                    Add to Team
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      removePlayerFromFantasyTeam(player);
                    }}
                  >
                    Remove from Team
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Homepage;
