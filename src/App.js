import "./App.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import Verticaltable from "./t1/verticaltable";
import { faker } from "@faker-js/faker";
import VerticaltableLater from "./t1/verticaltableLater";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["DB 1"];

var data = {
  labels,
  datasets: [
    {
      label: "Disaster",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Prod",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

function App() {
  const [item, setItem] = useState({});
  const [load, setLoad] = useState(false);
  const [n1, sn1] = useState({});
  const [onClicked, setonClicked] = useState(false);
  const onChangeTable = () => {
    const gecici = item;
    const average = [];
    gecici.datasets.map((x, i) => {
      average.push(x.data[0]);
    });
    const sum = average.reduce((a, b) => a + b, 0);
    const avg = sum / average.length || 0;
    console.log("---", avg);

    gecici.datasets.map((x, i) => {
      x.data[0] = avg;
    });
    setItem((oldVersion) => {
      return oldVersion;
    });
    sn1((prevState) => {
      // Object.assign would also work
      console.log("n1 ö", prevState);
      prevState = { ...item };
      console.log("n1", prevState);
      return prevState;
    });
    setonClicked(true);
  };
  useEffect(() => {
    // const setData = async () => {
    //   sn1((prevState) => {
    //     // Object.assign would also work
    //     prevState = { ...item };
    //     console.log("n1", prevState);
    //     return prevState;
    //   });
    // };
    // setData();
  }, []);

  useEffect(() => {
    const setData = async () => {
      setItem((prevState) => {
        // Object.assign would also work
        prevState = { ...data };
        return prevState;
      });
    };
    setData();
    setLoad(true);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Button variant="outlined" onClick={onChangeTable}>
          Outlined
        </Button>
        <div style={{ width: 500, height: 500, flex: 1 }}>
          <h4>Random Number : {Math.random()}</h4>
          {load &&
            (onClicked ? (
              <VerticaltableLater item={n1} />
            ) : (
              <Verticaltable item={item} />
            ))}
        </div>
      </header>
    </div>
  );
}

export default App;
