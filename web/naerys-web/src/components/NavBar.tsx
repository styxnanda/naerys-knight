import { Link } from "@tanstack/react-router";
import { FaLightbulb, FaGithub } from "react-icons/fa";
import { useModalStore } from "../utils/store";
import { Modal } from "flowbite-react";

const NavBar = () => {
  const faqPopup = useModalStore((state) => state.faqPopup);
  const toggleFaqPopup = useModalStore((state) => state.toggleFaqPopup);

  console.log(faqPopup);
  return (
    <div className="p-4 flex bg-white text-black justify-between font-poppins sticky top-0 z-50 items-center border border-t-0 border-l-0 border-r-0 border-b-1 border-gray-300">
      <Link to="/" className="[&.active]:font-bold px-3">
        <img
          src="/src/assets/Logo_Game_of_Thrones.png"
          alt="Logo_Game_of_Thrones.png"
          className="w-32 h-auto"
        />
      </Link>
      <div className="flex gap-5 items-center">
        <a
          href="#"
          className="text-gray-700 hover:text-gray-900 dark:hover:text-white"
          onClick={() => {
            toggleFaqPopup();
          }}
        >
          <FaLightbulb />
        </a>
        <a
          href="https://github.com/styxnanda/naerys-knight"
          target="_blank"
          className="text-gray-700 hover:text-gray-900 dark:hover:text-white"
        >
          <FaGithub />
        </a>
        <Link to="/characters" className="[&.active]:font-bold">
          Characters
        </Link>{" "}
        <Link to="/peyrie" className="[&.active]:font-bold">
          Pairing
        </Link>
      </div>
      <Modal dismissible show={faqPopup} onClose={() => toggleFaqPopup()}>
        <Modal.Header>Site Information</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <h2 className="font-bold">Disclaimer</h2>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-justify">
              This website is not affiliated with, endorsed by, or sponsored by{" "}
              <span className="font-bold">Game of Thrones</span>, the series{" "}
              <span className="font-bold">A Song of Ice and Fire</span>, or the
              archival site{" "}
              <span className="font-bold">Archive of Our Own </span>(AO3).
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-justify">
              All characters, names, places, and events from the series belong
              to their respective owners, including but not limited to{" "}
              <a
                href="https://georgerrmartin.com/"
                target="_blank"
                className="underline"
              >
                George R. R. Martin
              </a>
              , HBO, and related entities. All content related to Game of
              Thrones and A Song of Ice and Fire are the property of their
              respective owners.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-justify">
              Special thanks{" "}
              <a
                href="https://thronesapi.com/"
                target="_blank"
                className="underline"
              >
                ThronesApi.com
              </a>{" "}
              for providing the character information, such as name, title, and
              image so that the website could fetch it from the backend service
              and be passed to the client view.
            </p>
            <h2 className="font-bold">Privacy Terms</h2>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-justify">
              This website does not collect, store, or save any user data.
              Although there are user inputs on the site, none of this
              information is collected or saved in any form of database. All API
              requests are handled by a third-party service,{" "}
              <a
                href="https://thronesapi.com/"
                target="_blank"
                className="font-bold"
              >
                ThronesApi.com
              </a>
              . We do not have access to, nor do we store, any data from these
              requests.
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NavBar;
