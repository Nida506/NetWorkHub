import EditProfile from "../components/EditProfile";
import { useSelector } from "react-redux";
const Profile = () => {
  const user = useSelector((store) => store.user);
  return (
    user && (
      <div className=" bg-gradient-to-r from-[#8800FF] to-[#FF00C1] height">
        <EditProfile user={user} />
      </div>
    )
  );
};

export default Profile;
