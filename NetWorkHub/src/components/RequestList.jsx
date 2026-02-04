import styles from "./RequestList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
const RequestList = ({ request, reviewRequestButtonHandler }) => {
  // extract detail of request
  const { firstName, lastName, photoUrl, age, gender, about } =
    request.fromUserId;

  return (
    <div className="flex justify-center mb-4">
      <div
        className={`navbar bg-white ${styles.listSetting} flex justify-between `}
      >
        <div className="w-28 ">
          <img
            src={photoUrl}
            alt="Photo"
            className={`rounded-full ${styles.imgSetting} me-0 pe-0 right-0 border-stone-950 border-2`}
          ></img>
        </div>
        <div className="flex items-start flex-col ps-2 pe-0">
          <div className="font-semibold text-stone-950 text-2xl">
            {firstName + " " + lastName}
          </div>

          <div className="font-semibold text-stone-950 text-base">{about}</div>
        </div>

        {/* for buttons */}

        <div className="flex">
          <FontAwesomeIcon
            onClick={() => reviewRequestButtonHandler("rejected", request._id)}
            icon={faCircleXmark}
            className={` ${styles.danger} text-5xl me-2 hover:text-6xl`}
          />
          <FontAwesomeIcon
            onClick={() => reviewRequestButtonHandler("accepted", request._id)}
            icon={faCircleCheck}
            className={` ${styles.success} text-5xl me-2 hover:text-6xl`}
          />
        </div>
      </div>
    </div>
  );
};

export default RequestList;
