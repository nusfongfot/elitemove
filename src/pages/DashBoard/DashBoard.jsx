import ActivityList from '../../components/ActivityList/ActivityList_TW';
import NavDash from '../../components/NavDash/NavDash';

function DashBoard() {
  return (
    <div className="overflow-hidden mt-10">
      <NavDash />
      <ActivityList />
    </div>
  );
}

export default DashBoard;
