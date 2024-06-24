
import { useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([
    {
      "id": "001",
      "name": "Blood Analisys",
      "openDays": "Everyday",
      "countDoctors": 4,
      "details": "We have Specialized doctors to anlalize your blood. You may have blood tests to keep track of how well you are managing a condition such as diabetes or high cholesterol. You may also have them for routine checkups or when you are ill. Blood tests are very common.",
      "pic": "https://raw.githubusercontent.com/arifulsajib/pictures-for-projects/main/healthService/service1.jpg"
    },
    {
      "id": "002",
      "name": "Cancer Treatment",
      "openDays": "Mon-Fri",
      "countDoctors": 5,
      "details": "Many procedures and drugs are available to treat cancer, with many more being studied. we provide treatments like surgery and radiation therapy, which are used to treat a specific tumor or area of the body. Drug treatments (such as chemotherapy, immunotherapy, or targeted therapy) are often called systemic treatments .",
      "pic": "https://raw.githubusercontent.com/arifulsajib/pictures-for-projects/main/healthService/service2.jpg"
    },
    {
      "id": "003",
      "name": "Hair Transplantation",
      "openDays": "Fri-Sun",
      "countDoctors": 2,
      "details": "Hair transplantation is a surgical technique that removes hair follicles from one part of the body, called the 'donor site', to a bald or balding part of the body known as the 'recipient site'. The technique is primarily used to treat male pattern baldness. We have the best doctors for the treatment",
      "pic": "https://raw.githubusercontent.com/arifulsajib/pictures-for-projects/main/healthService/service3.png"
    },
    {
      "id": "006",
      "name": "Brain tumor Surgary",
      "openDays": "Fri-Sun",
      "countDoctors": 3,
      "details": "To remove a brain tumor, a neurosurgeon makes an opening in the skull. This operation is called a craniotomy. Whenever possible, the surgeon attempts to remove the entire tumor. If the tumor cannot be completely removed without damaging vital brain tissue, your doctor may remove as much of the tumor as possible. We will give you the best services and we have the best equipments for this surgary.",
      "pic": "https://raw.githubusercontent.com/arifulsajib/pictures-for-projects/main/healthService/service6.jpg"
    },
    {
      "id": "008",
      "name": "Depression treatment",
      "openDays": "Everyday",
      "countDoctors": 3,
      "details": "Medications and psychotherapy are effective for most people with depression. Your primary care doctor or psychiatrist can prescribe medications to relieve symptoms. However, many people with depression also benefit from seeing a psychiatrist, psychologist or other mental health professional. We have experienced psycatrist for this.",
      "pic": "https://raw.githubusercontent.com/arifulsajib/pictures-for-projects/main/healthService/service8.jpg"
    },
    {
      "id": "009",
      "name": "Kidney Stone",
      "openDays": "Sun-Thu",
      "countDoctors": 7,
      "details": "The treatment for a kidney stone depends on the size of the stone, what it is made of, whether it is causing pain and whether it is blocking your urinary tract. To answer these questions and to figure out the right treatment for you, your doctor might ask you to have a urine test, blood test, x-ray and/or CT scan. A CT scan sometimes uses contrast dye. If you have ever had a problem with contrast dye, be sure to tell your doctor about it before you have your CT scan. Our doctor will check which tratement suits you. Do visit us",
      "pic": "https://raw.githubusercontent.com/arifulsajib/pictures-for-projects/main/healthService/service9.jpg"
    }
  ]);
  return [services, setServices];
};

export default useServices;


