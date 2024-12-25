import Header from "./Header";
import RepoList from "./RepoList";

const Frame = () => {
    return (
        <div className="flex flex-col bg-white w-full md:mx-4 md:my-4 md:rounded-lg">
            <Header />
            <RepoList />
        </div>
    )
}


export default Frame;