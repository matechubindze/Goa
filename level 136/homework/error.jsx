const BuggyComponent = ({ crash }) => {
    if (crash) {
        throw new Error("Something broke!");
    }

    return <p>ყველაფერი კარგადაა</p>;
};

export default BuggyComponent;
