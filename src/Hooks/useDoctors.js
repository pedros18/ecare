import { useState } from "react";

const useDoctors = () => {
  const [doctors, setDoctors] = useState([
    {
      "id": "001",
      "name": "Dr Kishor",
      "categories": "Psychiatrists",
      "weekDays": "Sat-Sun",
      "time": "10AM-4PM",
      "fees": 2000,
      "pic": "https://preview.colorlib.com/theme/docmed/img/experts/1.png.webp"
    },
    {
      "id": "002",
      "name": "Dr Franklin",
      "categories": "gynecologists",
      "weekDays": "Mon-Fri",
      "time": "9AM-5PM",
      "fees": 1500,
      "pic": "https://preview.colorlib.com/theme/docmed/img/experts/2.png.webp"
    },
    {
      "id": "003",
      "name": "Dr Aditi Roy",
      "categories": "Ophthalmologists",
      "weekDays": "Sun-Fri",
      "time": "11AM-5PM",
      "fees": 3500,
      "pic": "https://preview.colorlib.com/theme/docmed/img/experts/3.png.webp"
    },
    {
      "id": "004",
      "name": "Dr Truluck",
      "categories": "Allergists",
      "weekDays": "Fri-Mon",
      "time": "8AM-5PM",
      "fees": 3000,
      "pic": "https://preview.colorlib.com/theme/docmed/img/experts/4.png.webp"
    },
    {
      "id": "005",
      "name": "Dr Payne",
      "categories": "Dermatologists",
      "weekDays": "Sat-thu",
      "time": "11AM-5PM",
      "fees": 1500,
      "pic": "https://preview.colorlib.com/theme/docmed/img/experts/9.png.webp"
    },
    {
      "id": "006",
      "name": "Dr Johnathan",
      "categories": "Neurologist",
      "weekDays": "Tue-Fri",
      "time": "9AM-4PM",
      "fees": 2000,
      "pic": "https://preview.colorlib.com/theme/docmed/img/experts/6.png.webp"
    }
  ]);

  return [doctors, setDoctors];
};

export default useDoctors;
