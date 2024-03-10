import React, { useState, useEffect } from 'react';
import { useSidebar } from '../Component/sidebarcontext';
import '@fortawesome/fontawesome-free/css/all.min.css';
import MUIDataTable from "mui-datatables";
import './manageuser.css';
import Addusermodal from '../Component/addusermodel.jsx';
import Swal from 'sweetalert2';

function Manageuser() {
    
    const columns = [
        {
            name: 'Profile', label: 'Profile', options: {
                sort: false, // Disables sorting for this column
            },
        },
        {
            name: 'CardID', label: 'CardID', options: {
                sort: false, // Disables sorting for this column
            },
        },
        {
            name: 'Sex', label: 'Sex', options: {
                sort: false, // Disables sorting for this column
            },
        },
        {
            name: 'Role', label: 'Role', options: {
                sort: false, // Disables sorting for this column
            },
        },
        {
            name: 'Action', label: 'Action', options: {
                sort: false, // Disables sorting for this column
            },
        },
    ];


    const [responsive, setResponsive] = useState('standard');


    const suretodelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    const [data1, setdata1] = useState([[<div className='imgintable'><img src="../../UserProfile/rashford.jpg" alt="" /><div className='profiletext'>
        <p>Rashford</p><p>012-345-6789</p></div></div>, "1234567891011", <div className="sexintable male">Male</div>, "Patient", <div className="iconintable">
        <i className="fa-solid fa-id-card-clip"></i>
        <i className="fa-solid fa-pen-to-square"></i>
        <i className="fa-solid fa-trash-can" onClick={suretodelete}></i>
    </div>],
    [<div className='imgintable'><img src="../../UserProfile/rashford.jpg" alt="" /><div className='profiletext'>
        <p>Rashford</p><p>012-345-6789</p></div></div>, "1234567891011", <div className="sexintable female">Female</div>, "Patient", <div className="iconintable">
        <i className="fa-solid fa-id-card-clip"></i>
        <i className="fa-solid fa-pen-to-square"></i>
        <i className="fa-solid fa-trash-can"></i>
    </div>],
    [<div className='imgintable'><img src="../../UserProfile/rashford.jpg" alt="" /><div className='profiletext'>
        <p>Rashford</p><p>012-345-6789</p></div></div>, "1234567891011", <div className="sexintable male">Male</div>, "Patient", <div className="iconintable">
        <i className="fa-solid fa-id-card-clip"></i>
        <i className="fa-solid fa-pen-to-square"></i>
        <i className="fa-solid fa-trash-can"></i>
    </div>],
    [<div className='imgintable'><img src="../../UserProfile/rashford.jpg" alt="" /><div className='profiletext'>
        <p>Rashford</p><p>012-345-6789</p></div></div>, "1234567891011", <div className="sexintable male">Male</div>, "Patient", <div className="iconintable">
        <i className="fa-solid fa-id-card-clip"></i>
        <i className="fa-solid fa-pen-to-square"></i>
        <i className="fa-solid fa-trash-can"></i>
    </div>]
        , [
        <div className='imgintable'>
            <img src="../../UserProfile/rashford.jpg" alt="" />
            <div className='profiletext'>
                <p>Rashford</p>
                <p>012-345-6789</p>
            </div>
        </div>, "1234567891011",
        <div className="sexintable female">Female</div>, "Patient",
        <div className="iconintable">
            <i className="fa-solid fa-id-card-clip"></i>
            <i className="fa-solid fa-pen-to-square"></i>
            <i className="fa-solid fa-trash-can"></i>
        </div>
    ],
    [<div className='imgintable'><img src="../../UserProfile/rashford.jpg" alt="" /><div className='profiletext'>
        <p>Rashford</p><p>012-345-6789</p></div></div>, "1234567891011", "Yonkers", "Patient", <div className="iconintable">
        <i className="fa-solid fa-id-card-clip"></i>
        <i className="fa-solid fa-pen-to-square"></i>
        <i className="fa-solid fa-trash-can"></i>
    </div>], [<div className='imgintable'><img src="../../UserProfile/rashford.jpg" alt="" /><div className='profiletext'>
        <p>Rashford</p><p>012-345-6789</p></div></div>, "1234567891011", "Yonkers", "Patient", <div className="iconintable">
        <i className="fa-solid fa-id-card-clip"></i>
        <i className="fa-solid fa-pen-to-square"></i>
        <i className="fa-solid fa-trash-can"></i>
    </div>], [<div className='imgintable'><img src="../../UserProfile/rashford.jpg" alt="" /><div className='profiletext'>
        <p>Rashford</p><p>012-345-6789</p></div></div>, "1234567891011", "Yonkers", "Patient", <div className="iconintable">
        <i className="fa-solid fa-id-card-clip"></i>
        <i className="fa-solid fa-pen-to-square"></i>
        <i className="fa-solid fa-trash-can"></i>
    </div>]
    ]);

    const newData = data1.map(row => [...row, <div className="iconintable">
        <i className="fa-solid fa-id-card-clip"></i>
        <i className="fa-solid fa-pen-to-square"></i>
        <i className="fa-solid fa-trash-can"></i>
    </div>]);

    const options = {
        selectableRows: 'none',
        elevation: 0,
        responsive,
        search: false,
        download: false,
        print: false,
        viewColumns: false,
        filter: false,
        textTransform: 'none',
        pagination: true, // Enable pagination
        rowsPerPage: 5, // Set number of rows per page
        rowsPerPageOptions: [5, 10, 15],

    };

    const { isSidebarOpen } = useSidebar();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const mainClass = `Main${isSidebarOpen ? ' sidebarOpen' : ''}`;
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflowY = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflowY = 'auto';
        }
    }, [isModalOpen]);

    return (
        <>
            <div className={mainClass}>
                <div className="main-content">
                    <div className="head-title">
                        <div className="left">
                            <h1>Manage User</h1>
                            <ul className="breadcrumb">
                                <li>
                                    <a href="">Home</a>
                                </li>
                                <li><i className="fa-solid fa-angle-right"></i></li>
                                <li>
                                    <a className="active" href="#">Manage User</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="functable">
                    <div className="btnadduser">
                        <input type="submit" value="+ New User" onClick={openModal} />
                    </div>
                    <div className="searchboxandropdown">
                        <div className="searchbox">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input className="search-input" type="search" placeholder="Search..." />
                        </div>
                        <div className="dropdown">
                            <label htmlFor="role">Role : </label>
                            <select name="role" id="role">
                                <option value="All">All</option>
                                <option value="Patient">Patient</option>
                                <option value="Nurse">Nurse</option>
                                <option value="Admin">Admin</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="my-table" style={{ marginTop: "30px" }}>
                    <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
                        <MUIDataTable
                            data={newData}
                            columns={columns}
                            options={options}
                        />
                    </div>
                </div>

            </div>
            {isModalOpen && <Addusermodal onClose={closeModal} />}
        </>
    )
}


// Modal for Add User

// const Modal = ({ onClose }) => {
//     const suretodelete = () => {
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!",
//             customClass: {
//                 popup: 'my-custom-swal'
//             }
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 Swal.fire({
//                     title: "Deleted!",
//                     text: "Your file has been deleted.",
//                     icon: "success",
//                     customClass: {
//                         popup: 'my-custom-swal'
//                     }
//                 });
//             }
//         });
//     }

//     const [file, setFile] = useState("../../UserProfile/DefaultUser.jpg");

//     function handlePicChange(e) {
//         const filecheck = e.target.files[0];
//         if (filecheck) { // Check if any file is selected
//             const fileURL = URL.createObjectURL(filecheck);
//             setFile(fileURL);
//         }
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         suretodelete();
//     };

//     return (
//         <div className="modal-backdrop">
//             <div className="modal-content">

//                 <i className="fa-solid fa-xmark" onClick={onClose}></i>

//                 <form onSubmit={handleSubmit}>
//                     <div className="formadduser-header">
//                         <div className="picture">
//                             <img src={file} alt="" />
//                             <div className="file">
//                                 <input type="file" onChange={handlePicChange} accept=".png,.jpg,.jpeg" />
//                             </div>
//                         </div>
//                         <div className="input-header">
//                             <div className="input-group">
//                                 <label>CardID</label>
//                                 <input type="text" placeholder="Your CardID" required pattern="[0-9]{13}" />
//                             </div>
//                             <div className="input-group">
//                                 <label>Password</label>
//                                 <input type="password" placeholder="Your Password" required pattern=".{3,15}" />
//                             </div>
//                         </div>
//                     </div>

//                     <div className="formadduser">
//                         <div className="two-group-horizontal">
//                             <div className="input-group">
//                                 <label>Name</label>
//                                 <input type="text" placeholder="Your Name" required pattern="[a-zA-Zก-๏\s]{2,50}" />
//                             </div>
//                             <div className="input-group">
//                                 <label>Gender</label>
//                                 <select name="gender" id="gender">
//                                     <option value="Male">Male</option>
//                                     <option value="Female">Female</option>
//                                 </select>
//                             </div>
//                         </div>
//                         <div className="two-group-horizontal">
//                             <div className="input-group">
//                                 <label>Phone</label>
//                                 <input type="text" placeholder="Your Phone" required pattern="[0-9]{10}" />
//                             </div>
//                             <div className="input-group">
//                                 <label>Birthday</label>
//                                 <input type="date" placeholder="Your birthday" required />
//                             </div>
//                         </div>
//                         <div className="one-group-horizontal">
//                             <div className="input-group">
//                                 <label>Address</label>
//                                 <input type="text" placeholder="Your Address" required pattern=".{3,150}" />
//                             </div>
//                         </div>
//                         <div className="two-group-horizontal">
//                             <div className="input-group">
//                                 <label>Occupation</label>
//                                 <input type="text" placeholder="Your Occupation" required pattern=".{2,30}" />
//                             </div>
//                             <div className="input-group">
//                                 <label>Congenital Disease</label>
//                                 <input type="text" placeholder="Your Congenital Disease" required pattern=".{2,30}" />
//                             </div>
//                         </div>
//                         <div className="one-group-horizontal">
//                             <div class="input-group">
//                                 <label>Allergy</label>
//                                 <input type="text" placeholder="Your Allergy" required pattern=".{2,30}" />
//                             </div>
//                         </div>
//                     </div>

//                     <div className="button-group">
//                         <div className="btnadduser">
//                             <input type="submit" value="Submit" />
//                             <input type="button" value="Cancel" onClick={onClose} />
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

export default Manageuser