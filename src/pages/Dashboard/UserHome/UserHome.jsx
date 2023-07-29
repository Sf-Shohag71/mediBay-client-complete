import useAuth from "../../../hooks/useAuth";


const UserHome = () => {
    const {user} = useAuth;
    return (
        <div>
              <h2 className="text-3xl">Hi, Welcome back</h2>
        </div>
    );
};

export default UserHome;