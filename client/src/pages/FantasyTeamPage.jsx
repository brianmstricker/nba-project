import { Button } from "react-bootstrap";
import useFantasyTeamStore from "../store/fantasyTeam";

const FantasyTeamPage = () => {
  const fantasyTeam = useFantasyTeamStore((state) => state.fantasyTeam);
  const clearFantasyTeam = useFantasyTeamStore(
    (state) => state.clearFantasyTeam
  );
  const removePlayerFromFantasyTeam = useFantasyTeamStore(
    (state) => state.removePlayer
  );
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center my-4">Fantasy Team</h1>
          <div className="row">
            <div className="d-flex flex-row align-items-center justify-content-center mb-4">
              <Button
                style={{ width: "150px" }}
                disabled={fantasyTeam.length === 0}
                onClick={() => clearFantasyTeam()}
              >
                Clear Team
              </Button>
            </div>
          </div>
          <div className="row">
            {fantasyTeam.map((player) => (
              <div key={player._id} className="col-md-3">
                <div className="card m-3">
                  <div className="card-body">
                    <h5 className="card-title mb-4">{player.name}</h5>
                    <Button
                      variant="danger"
                      onClick={() => {
                        removePlayerFromFantasyTeam(player);
                      }}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default FantasyTeamPage;
