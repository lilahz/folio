import { IoCheckmarkDoneOutline } from 'react-icons/io5';
import { GiSandsOfTime } from "react-icons/gi";
import { HiOutlineClipboardList } from "react-icons/hi";
import { MdAttachMoney } from "react-icons/md";
import { GoLaw } from "react-icons/go";
import { GrLineChart, GrMoney } from "react-icons/gr";
import { ImMobile } from "react-icons/im";
import { CgWebsite } from "react-icons/cg";
import { BiPaint } from "react-icons/bi";
import { RiPaintFill } from "react-icons/ri";

export const field_array = [{ value: 'marketing', label: ' Marketing ', icon: <GrLineChart size={18}/>},
            { value: 'appdev', label: ' App Development ', icon: <ImMobile size={18}/>},
            { value: 'webdev', label: ' Web Development ', icon: <CgWebsite size={18}/>},
            { value: 'logodesign', label: ' Logo Design ', icon: <BiPaint size={18}/>},
            { value: 'webdesign', label: ' Web Design ', icon: <RiPaintFill size={18}/>},
            { value: 'finance', label: ' Financial Aid ', icon: <MdAttachMoney size={18}/>},
            { value: 'legal', label: ' Legal Aid ', icon: <GoLaw size={18}/>},
            { value: 'sales', label: ' Sales ', icon: <GrMoney size={18}/>}];

export const status_array = [{value: 'todo', label: ' To Do  ', icon: <HiOutlineClipboardList size={18}/>},
                            {value: 'inprogress', label: ' In Progress', icon: <GiSandsOfTime size={18}/>},
                            {value: 'done', label: ' Done', icon: <IoCheckmarkDoneOutline size={18}/>}]


