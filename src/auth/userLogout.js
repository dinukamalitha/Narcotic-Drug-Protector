import { projectAuth } from "../firebase";

let error = null;

const logOut = async () => {
    error = null;

    try {
        await projectAuth.signOut();
    } catch (err) {
        error = err.message;
    }
};

const userLogOut = () => {
    return {error, logOut};
}

export default userLogOut;