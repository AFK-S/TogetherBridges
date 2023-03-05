import React, { useState, useContext } from "react";
import { StateContext } from "../../context/StateContext";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

const Announcement = ({ setToggleAnnouncement }) => {
  const { ngo_id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const { setAlert } = useContext(StateContext);
  const [cookies] = useCookies(["user_id"]);
  const [announcement, setAnnouncement] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        `/api/register/announcement/${cookies.user_id}`,
        {
          description: announcement,
        }
      );
      console.log(data);
      setAnnouncement("");
      setToggleAnnouncement(false);
    } catch (error) {
      console.log(error);
      setAlert({
        isAlert: true,
        type: error.response.data.type,
        message: error.response.data.message,
      });
    }
    setIsLoading(false);
  };

  return (
    <div className="fixed top-0 right-0 left-0 z-50 w-full h-screen  bg-[#909090]/50 flex justify-center items-center px-4 overflow-x-hidden overflow-y-auto duration-300 ease-in-out">
      <div className="relative w-full h-full max-w-lg md:h-auto">
        <div className="relative bg-white rounded-lg w-full h-full max-w-2xl md:h-auto shadow px-6 py-6 lg:px-8">
          <div className="flex items-start justify-between rounded-t">
            <h3 className="mb-4 text-xl font-medium text-gray-900">
              Add a Announcements
            </h3>
            <button
              onClick={() => setToggleAnnouncement(false)}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
              </svg>
            </button>
          </div>
          <form className="space-y-4" onSubmit={onSubmit}>
            <textarea
              rows="3"
              className="input_field"
              placeholder="Type your announcement here..."
              onChange={(e) => setAnnouncement(e.target.value)}
              value={announcement}
              required
            ></textarea>

            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex justify-center items-center"
            >
              {isLoading ? (
                <svg
                  className="w-6 h-6 text-transparent animate-spin fill-white"
                  viewBox="0 0 100 101"
                  fill="none"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
