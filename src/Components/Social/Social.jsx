import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTiktok,
  faLine,
} from "@fortawesome/free-brands-svg-icons";

const Social = () => {
  return (
    <>
      <ul className="h-auto fixed top-[50%] right-4 bg-blue-500 text-white px-4 py-3 rounded-3xl shadow-md z-50 flex flex-col gap-5">
        <li>
          <a
            href={"https://www.facebook.com/profile.php?id=61570220064844"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="text-white text-2xl hover:scale-110 duration">
              <FontAwesomeIcon icon={faFacebook} />
            </button>
          </a>
        </li>
        <li>
          <a
            href={"https://www.tiktok.com/@chotkarnyang"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="text-white text-2xl hover:scale-110 duration">
              <FontAwesomeIcon icon={faTiktok} />
            </button>
          </a>
        </li>
        <li>
          <a
            href={"https://line.me/ti/p/chFSPht1C4"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="text-white text-2xl hover:scale-110 duration">
              <FontAwesomeIcon icon={faLine} />
            </button>
          </a>
        </li>
      </ul>
    </>
  );
};

export default Social;
