
import PieChart from '../components/PieChart';
import LineChart from '../components/LineChart';

const HomePage = () => {
    return (
        <div className="p-4 my-4">
            <h2 className="text-2xl mb-4">Home</h2>
            <p>Welcome to the dashboard!</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white col-span-2 p-4 rounded-lg shadow-md">
                    <LineChart />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <PieChart />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
