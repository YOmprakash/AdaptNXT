
import { FaTimes, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaShoppingCart, FaUndo, FaUsers, FaTruck, FaShippingFast, FaPuzzlePiece, FaCalculator, FaChartLine, FaUser } from 'react-icons/fa';

const iconColors = {
  dashboard: '#1D4ED8', 
  orders: '#F59E0B',
  returns: '#10B981', 
  customers: '#3B82F6', 
  shippings: '#E11D48', 
  channel: '#6B21A8', 
  integration: '#EC4899',
  calculators: '#F97316', 
  reports: '#4B5563', 
  account: '#1D4E87', 
};

const Sidebar = ({ isOpen, toggleSidebar }) => (
    <aside className={`bg-white text-gray-800 w-60 space-y-6 py-7 px-2 fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition z-40 duration-200 ease-in-out`}>
        <div className="flex justify-between items-center px-4 ">
            <h2 className="text-2xl font-semibold">Menu</h2>
            <FaTimes className="md:hidden cursor-pointer" onClick={toggleSidebar} />
        </div>
        <nav className='mt-6'>
            <ul className="space-y-4">
                <li className="flex items-center py-2 px-4 hover:bg-gray-100 cursor-pointer">
                    <FaTachometerAlt className="mr-2" style={{ color: iconColors.dashboard }} />
                    <Link to="/">Dashboard</Link>
                </li>
                <li className="flex items-center py-2 px-4 hover:bg-gray-100 cursor-pointer">
                    <FaShoppingCart className="mr-2" style={{ color: iconColors.orders }} />
                    <Link to="/orders">Orders</Link>
                </li>
                <li className="flex items-center py-2 px-4 hover:bg-gray-100 cursor-pointer">
                    <FaUndo className="mr-2" style={{ color: iconColors.returns }} />
                    <Link to="/returns">Returns</Link>
                </li>
                <li className="flex items-center py-2 px-4 hover:bg-gray-100 cursor-pointer">
                    <FaUsers className="mr-2" style={{ color: iconColors.customers }} />
                    <Link to="/customers">Customers</Link>
                </li>
                <li className="flex items-center py-2 px-4 hover:bg-gray-100 cursor-pointer">
                    <FaTruck className="mr-2" style={{ color: iconColors.shippings }} />
                    <Link to="/shippings">Shippings</Link>
                </li>
                <li className="flex items-center py-2 px-4 hover:bg-gray-100 cursor-pointer">
                    <FaShippingFast className="mr-2" style={{ color: iconColors.channel }} />
                    <Link to="/channel">Channel</Link>
                </li>
                <li className="flex items-center py-2 px-4 hover:bg-gray-100 cursor-pointer">
                    <FaPuzzlePiece className="mr-2" style={{ color: iconColors.integration }} />
                    <Link to="/integration">Integration</Link>
                    <FaChevronDown className="ml-auto" />
                </li>
                <li className="flex items-center py-2 px-4 hover:bg-gray-100 cursor-pointer">
                    <FaCalculator className="mr-2" style={{ color: iconColors.calculators }} />
                    <Link to="/calculators">Calculators</Link>
                    <FaChevronDown className="ml-auto" />
                </li>
                <li className="flex items-center py-2 px-4 hover:bg-gray-100 cursor-pointer">
                    <FaChartLine className="mr-2" style={{ color: iconColors.reports }} />
                    <Link to="/reports">Reports</Link>
                    <FaChevronDown className="ml-auto" />
                </li>
                <li className="flex items-center py-2 px-4 hover:bg-gray-100 cursor-pointer">
                    <FaUser className="mr-2" style={{ color: iconColors.account }} />
                    <Link to="/account">Account</Link>
                    <FaChevronDown className="ml-auto" />
                </li>
            </ul>
        </nav>
    </aside>
);

export default Sidebar;
