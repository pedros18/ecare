import { useState } from "react";
import pic1 from '../Images/Devices/device10.jpg';
import pic2 from '../Images/Devices/device9.jpg';
import pic3 from '../Images/Devices/device8.jpg';
import pic4 from '../Images/Devices/device11.jpg';
import pic5 from '../Images/Devices/device13.jpg';
const useDevices = () => {
  const [devices, setDevices] = useState([
    {
      "id": "001",
      "name": "Health Care watch",
      "Quantity": "4",
      "Price": 13000,
      "pic": pic1
    },
    {
        "id": "001",
        "name": "Health Care watch",
        "Quantity": "4",
        "Price": 13000,
        "pic": pic2
    },
    {
        "id": "001",
        "name": "Health Care watch",
        "Quantity": "4",
        "Price": 13000 ,
        "pic": pic3
    },
    {
        "id": "001",
        "name": "Health Care watch",
        "Quantity": "4",
        "Price": 13000,
        "pic": pic4
    },
    {
        "id": "001",
        "name": "Health Care watch",
        "Quantity": "4",
        "Price": 13000,
        "pic": pic5
    }
  ]);

  return [devices, setDevices];
};

export default useDevices;
