import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTiktok, faLine } from "@fortawesome/free-brands-svg-icons";

const Social = () => {
  return (
    <>
      <ul className="h-auto fixed top-[50%] right-4 bg-blue-500 text-white px-4 py-3 rounded-3xl shadow-md z-50 flex flex-col gap-5">
        <li>
          <Link to={"//www.facebook.com"} target="_blank">
            <button className="text-white text-2xl hover:scale-110 duration">
              <FontAwesomeIcon icon={faFacebook} />
            </button>
          </Link>
        </li>
        <li>
          <Link to={"//www.tiktok.com"} target="_blank">
            <button className="text-white text-2xl hover:scale-110 duration">
              <FontAwesomeIcon icon={faTiktok} />
            </button>
          </Link>
        </li>
        <li>
          <Link to={"https://line.me/ti/p/chFSPht1C4"} target="_blank">
            <button className="text-white text-2xl hover:scale-110 duration">
              <FontAwesomeIcon icon={faLine} />
            </button>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Social;
