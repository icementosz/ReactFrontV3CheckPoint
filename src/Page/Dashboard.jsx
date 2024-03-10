import { useSidebar } from '../Component/sidebarcontext';
import './dashboard.css';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
    Filler
)

function Dashboard() {
    const { isSidebarOpen } = useSidebar();
    const mainClass = `Main${isSidebarOpen ? ' sidebarOpen' : ''}`;

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "First dataset",
            data: [33, 53, 85, 41, 44, 65],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
          }
        ]
      };
    const options = {
        responsive: true, // This makes the chart responsive
        maintainAspectRatio: false, // Adjust based on your preference
        plugins: {
            legend: {
                display: true, // Ensure the legend is displayed
            }
        },
    };

    return (
        <>
            <div className={mainClass}>
                <div className="main-content">
                    <div className="head-title">
                        <div className="left">
                            <h1>Dashboard</h1>
                            <ul className="breadcrumb">
                                <li>
                                    <a href="">Home</a>
                                </li>
                                <li><i className="fa-solid fa-angle-right"></i></li>
                                <li>
                                    <a className="active" href="#">Dashboard</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <ul className="box-info">
                    <li>
                    <i className="fa-solid fa-hospital-user"></i>
                        <span className="text">
                            <h3>1234</h3>
                            <p>Total Patients</p>
                        </span>
                    </li>
                    <li>
                    <i className="fa-solid fa-user-nurse"></i>
                        <span className="text">
                            <h3>5678</h3>
                            <p>Total Personnel</p>
                        </span>
                    </li>
                    <li>
                    <i className="fa-solid fa-stethoscope"></i>
                        <span className="text">
                            <h3>98765</h3>
                            <p>Total Case</p>
                        </span>
                    </li>
                </ul>

                <div className="graph-data">
                    <div className="graph-topic">
                        <h3>Graph</h3>
                        <h5>Test</h5>
                    </div>
                    <div className="chart">
                        <Line data={data} options={options}></Line>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Dashboard