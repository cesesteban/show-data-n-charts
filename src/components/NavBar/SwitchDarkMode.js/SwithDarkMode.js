import React, { useEffect, useState } from "react";
import Switch from "@mui/material/Switch";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import styles from "./switchDarkMode.module.css";
const label = { inputProps: { "aria-label": "Switch demo" } };

function SwithDarkMode({ dark, setDarkMode }) {
  const [switchMode, setSwitchMode] = useState(true);

  const handleSwitch = (value) => {
    setSwitchMode(value);
  };

  useEffect(() => {
    setDarkMode(switchMode);
  }, [switchMode]);

  return (
    <div className={styles.display}>
      <div className={styles.centerLine}>
        <WbSunnyIcon color={dark ? "primary" : "disabled"} />
      </div>
      <Switch
        onChange={(e) => handleSwitch(!switchMode)}
        {...label}
        defaultChecked
      />
      <div className={styles.centerLine}>
        <DarkModeIcon color={dark ? "disabled" : "primary"} />
      </div>
    </div>
  );
}

export default SwithDarkMode;
