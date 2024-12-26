import { useContext } from "react";
import "../styles/components/Settings.scss";
import ThemeContext from "../context/theme.context";

function Settings() {
  const { dark } = useContext(ThemeContext);

  return (
    <div className="Settings">
      <div className="theme-toggler">
        <div className="theme-buttons">
          <div className="light-theme-btn ">
            <i className="bi bi-sun"></i>
          </div>
          <div className="dark-theme-btn active">
            <i className="bi bi-moon"></i>
          </div>
        </div>
      </div>
      <div className="settings-btn">
        <i className="bi bi-gear"></i>
      </div>
    </div>
  );
}

export default Settings;
