import Frame from "../Frame/Frame";
import Sidebar from "../Sidebar";

const Home = () => {
    return (
        <div className="w-full flex flex-col lg:flex-row h-screen">
            <Sidebar />
            <Frame />
        </div>
    );
}

export default Home;