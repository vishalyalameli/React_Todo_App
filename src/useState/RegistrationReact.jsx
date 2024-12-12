// import { password } from "bun";
import "./index.css";
import { useState } from "react";

export const RegistrationFormReact = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }))

    };
    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(user);
    }

    return (
        <>

            <form onSubmit={handleFormSubmit}>
                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account. </p>
                    <label htmlFor="firstName">
                        <b>First Name</b>
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Enter First Name"
                        value={user.firstName}
                        onChange={handleInputChange}

                    />

                    <label htmlFor="firstName">
                        <b>Last Name</b>
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Enter Last Name"
                        value={user.lastName}
                        onChange={handleInputChange}

                    />

                    <label htmlFor="firstName">
                        <b>Email</b>
                    </label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Enter Email"
                        value={user.email}
                        onChange={handleInputChange}

                    />

                    <label htmlFor="firstName">
                        <b>password</b>
                    </label>
                    <input
                        type="text"
                        name="password"
                        placeholder="Enter Password"
                        value={user.password}
                        onChange={handleInputChange}

                    />

                    <label htmlFor="firstName">
                        <b>Phone Number</b>
                    </label>
                    <input
                        type="text"
                        name="phoneNumber"
                        placeholder="Enter PhoneNumber"
                        value={user.phoneNumber}
                        onChange={handleInputChange}

                    />
                    <p>
                        By creating an account you agree to our
                        <a href="#" style={{ color: "dodgerblue" }}>
                            Terms & Privacy
                        </a>
                    </p>

                    <div className="clearfix">
                        <button type="submit" className="btn">
                            Sign Up
                        </button>
                    </div>
                </div>
            </form>

            <section
                className="summary"
                style={{ textAlign: "center", marginTop: "30px" }}
            >
                <p>
                    Hello, my name is
                    <span>
                        {user.firstName} {user.lastName}
                    </span>
                    . My email address is <span>{user.email}</span> and my phone number is
                    <span>{user.phoneNumber}</span>.
                </p>
            </section>


        </>
    )
}
