import { useLocation } from "react-router";
import Grid from "../../components/Grid/Grid";

function Game() {
  let { state } = useLocation();

  return <Grid rows={state.rows} columns={state.columns} />;
}
export default Game;
