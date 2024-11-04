import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";

const fields=[
    {label:"Job Title",placeholder:"Enter Job Title", options:['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support'], leftSection:FaBriefcase},
    {label:"Company",placeholder:"Enter Company Name", options:['Google', 'Microsoft', 'Meta', 'Netflix', 'Adobe', 'Facebook', 'Amazon', 'Apple', 'Spotify'], leftSection:FaBriefcase},
    {label:"Location",placeholder:"Enter Job Location", options:['Delhi', 'New York', 'San Francisco', 'London', 'Berlin', 'Tokyo', 'Sydney', 'Toronto'], leftSection:FaMapMarkerAlt}
]
export default fields;