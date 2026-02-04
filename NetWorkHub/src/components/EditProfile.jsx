import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import styles from "./EditProfile.module.css";
const EditProfile = ({ user }) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl);
  const [age, setAge] = useState(user?.age);
  const [gender, setGender] = useState(user?.gender);
  const [about, setAbout] = useState(user?.about);
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);

  //editProfile handler
  const editProfileHandler = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        { firstName, lastName, photoUrl, age, gender, about },
        { withCredentials: true }
      );

      dispatch(addUser(res.data.data));

      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      setError(err?.response?.data);
    }
  };

  return (
    <>
      {/* for toast : show for message */}

      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile Saved Successfully</span>
          </div>
        </div>
      )}

      <div className="flex justify-center pb-2 pt-12 ">
        {/* edit profile */}
        <div
          className={`card bg-white pb-4 border-stone-950 border-2  ${styles.widthCard1} mx-4 shadow-xl rounded-none `}
        >
          <div className="card-body pt-5 pb-3">
            <h2 className="card-title text-stone-950 font-bold text-3xl mb-2 flex justify-center">
              Edit Your Profile
            </h2>
            {/* for first Name */}
            <label className="form-control w-full max-w-xs">
              <input
                type="text"
                value={firstName}
                placeholder="Enter Your First Name ..."
                onChange={(e) => setFirstName(e.target.value)}
                className={`input input-bordered text-base placeholder-stone-300 ${styles.paddingOnYaxis} bg-stone-950 text-white w-full max-w-xs`}
              />
            </label>
            {/* for last name */}
            <label className="form-control w-full max-w-xs">
              <input
                type="text"
                value={lastName}
                placeholder="Enter Last Name ..."
                onChange={(e) => setLastName(e.target.value)}
                className={`input input-bordered text-base placeholder-stone-300 ${styles.paddingOnYaxis} bg-stone-950 text-white w-full max-w-xs`}
              />
            </label>

            {/* for photoUrl */}
            <label className="form-control w-full max-w-xs">
              <input
                type="text"
                value={photoUrl}
                placeholder="Enter Photo Url ..."
                onChange={(e) => setPhotoUrl(e.target.value)}
                className={`input input-bordered text-base placeholder-stone-300 ${styles.paddingOnYaxis} bg-stone-950 text-white w-full max-w-xs`}
              />
            </label>

            {/* for age */}
            <label className="form-control w-full max-w-xs">
              <input
                type="text"
                value={age}
                placeholder="Enter Age ..."
                onChange={(e) => setAge(e.target.value)}
                className={`input input-bordered text-base placeholder-stone-300 ${styles.paddingOnYaxis} bg-stone-950 text-white w-full max-w-xs`}
              />
            </label>

            {/* about */}
            <label className="form-control w-full max-w-xs">
              <textarea
                type="text"
                value={about}
                placeholder="Enter something About You ..."
                onChange={(e) => setAbout(e.target.value)}
                className={`textarea textarea-bordered text-base  placeholder-stone-300 ${styles.paddingOnYaxisTextArea} bg-stone-950 text-white w-full max-w-xs`}
              />
            </label>

            {/* for gender */}
            <details className="dropdown dropdown-bottom">
              <summary className="w-32 btn flex ps-6 justify-start left-0  py-3 rounded-md bg-stone-950 text-base text-white cursor-pointer hover:bg-stone-950">
                {gender || "Gender"}
              </summary>
              <ul className="menu dropdown-content bg-stone-950 rounded-md rounded-t-none border-t-2 border-white z-10 w-32  shadow-lg  text-base text-white">
                <li onClick={() => setGender("Male")}>
                  <a className="py-0">Male</a>
                </li>
                <li onClick={() => setGender("Female")}>
                  <a className="py-0">Female</a>
                </li>
                <li onClick={() => setGender("Others")}>
                  <a className="py-0">Others</a>
                </li>
              </ul>
            </details>

            {/* for save profile button */}
            <div className="card-actions flex justify-end mt-4">
              <button
                onClick={editProfileHandler}
                className={`${styles.btn} px-3 py-2 rounded-full text-base font-semibold`}
              >
                Save Profile
              </button>
            </div>

            {/* for error show */}
            {/* {error && <p className="text-red-400">{error}</p>} */}
          </div>
        </div>

        {/* user own profile */}

        <div
          className={`card bg-white text-stone-950  border-stone-950 border-2  text-base font-normal ${styles.widthCard2} mx-4 shadow-xl rounded-none `}
        >
          <figure>
            <img
              src={photoUrl}
              alt="photo"
              className={`${styles.imgSetting}`}
            />
          </figure>
          <div className="mt-4 mb-4 ms-4 text-base font-semibold">
            <p>{firstName + " " + lastName}</p>
            <p> {about}</p>

            {age && gender && <p>{"Gender: " + gender + ", Age: " + age}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
