const Student = (props) => {
    return(
        <div>
            <h1>Student Details</h1>
            {/* <p>Student first name: {props.student.firstName}</p>
            <p>Student last name: {props.student.lastName}</p>
            <p>Student email address: {props.student.email}</p> */}
            <p>Array data:{props.data}</p>
        </div>
    )
}
export default Student;