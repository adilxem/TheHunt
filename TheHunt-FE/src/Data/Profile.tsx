import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";

const fields=[
    {label:"Job Title",placeholder:"Enter Job Title", options:['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support'], value:"Software Engineer", leftSection:FaBriefcase},
    {label:"Company",placeholder:"Enter Company Name", options:['Google', 'Microsoft', 'Meta', 'Netflix', 'Adobe', 'Facebook', 'Amazon', 'Apple', 'Spotify'],value:"Google", leftSection:FaBriefcase},
    {label:"Location",placeholder:"Enter Job Location", options:['Delhi', 'New York', 'San Francisco', 'London', 'Berlin', 'Tokyo', 'Sydney', 'Toronto'], value:"New York, United States",leftSection:FaMapMarkerAlt}
]
export default fields;