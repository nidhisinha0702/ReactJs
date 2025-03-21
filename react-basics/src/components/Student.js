const Student = (props) => {
    const {firstName,lastName,email} = props
    return(
        <div>
            <h1>Student Details</h1>
             <p>Student first name: {firstName}</p>
            <p>Student last name: {lastName}</p>
            <p>Student email address: {email}</p> 
            
        </div>
    )
}
export default Student;