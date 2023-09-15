import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/dashboard/item1">Item 1</Link></li>
        <li><Link to="/dashboard/item2">Item 2</Link></li>
        <li><Link to="/dashboard/item3">Item 3</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;