import Head from "next/head";
import { useState } from "react";
import Input from "../components/Input";

export default function Home() {
    const [firstNameInput, setFirstNameInput] = useState("");
    const [lastNameInput, setLastNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const [firstNameError, setFirstNameError] = useState(null);
    const [lastNameError, setLastNameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);

    const firstNameChangeHandler = (event) => {
        setFirstNameInput(event.target.value);
    };

    const lastNameChangeHandler = (event) => {
        setLastNameInput(event.target.value);
    };

    const emailChangeHandler = (event) => {
        setEmailInput(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        setPasswordInput(event.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        if (!firstNameInput) {
            setFirstNameError("First Name cannot be empty.");
        }
        if (!lastNameInput) {
            setLastNameError("Last Name cannot be empty.");
        }
        if (!emailInput || emailInput.includes("@")) {
            setEmailError("Looks like this is not an email.");
        }
        if (!passwordInput) {
            setPasswordError("Password cannot be empty");
        }
    };

    return (
        <>
            <Head>
                <title>Intro Component with sign up form - Rhythm Saha</title>
            </Head>

            <div className="max-w-6xl w-10/12 mx-auto grid xl:grid-cols-2 gap-12 h-full place-items-center xl:min-h-screen">
                <div>
                    <h1 className="text-white font-bold text-2xl mt-20 px-8 text-center xl:text-left xl:px-0 xl:text-5xl">
                        Learn to code by watching others
                    </h1>

                    <p className="text-white text-center mt-4 xl:text-left">
                        See how experienced developers solve problems in
                        real-time. Watching scripted tutorials is great, but
                        understanding how developers think is invaluable.
                    </p>
                </div>

                <div className="mb-8">
                    <div className="bg-indigo-800 text-white text-center font-normal py-5 px-14 rounded-md text-sm">
                        <strong className="font-semibold">
                            Try it free 7 days{" "}
                        </strong>
                        then $20/mo. thereafter
                    </div>

                    <form
                        className="w-full bg-white p-6 mt-4 rounded-lg"
                        onSubmit={submitHandler}
                    >
                        <Input
                            type="text"
                            value={firstNameInput}
                            placeholder="First Name"
                            error={firstNameError}
                            onChange={firstNameChangeHandler}
                        />
                        <Input
                            type="text"
                            value={lastNameInput}
                            placeholder="Last Name"
                            error={lastNameError}
                            onChange={lastNameChangeHandler}
                        />
                        <Input
                            type="text"
                            value={emailInput}
                            placeholder="Email Address"
                            error={emailError}
                            onChange={emailChangeHandler}
                        />
                        <Input
                            type="password"
                            value={[passwordInput]}
                            placeholder="Password"
                            error={passwordError}
                            onChange={passwordChangeHandler}
                        />

                        <button className="uppercase bg-green-500 text-white w-full p-4 mt-2 rounded-md font-medium text-sm tracking-wider hover:bg-green-400">
                            Claim your free trial
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
