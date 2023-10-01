"use client";
import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const [isNameValid, setNameValid] = useState();
  const [isSubjectValid, setSubjectValid] = useState();
  const [isEmailValid, setEmailValid] = useState();
  const [isTextValid, setTextValid] = useState();

  const validateForm = () => {
    let entrar = false;
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (name.length < 4) {
      console.log("The name must be longer than 4 characters.");
      console.log(name);
      setNameValid(false);
      entrar = true;
    } else {
      setNameValid(true);
    }
    if (subject.length < 4) {
      console.log("The subject must be longer than 4 characters.");
      console.log(email);
      setSubjectValid(false);
      entrar = true;
    } else {
      setSubjectValid(true);
    }
    if (text.length < 4) {
      console.log("The text must be longer than 4 characters.");
      console.log(subject);
      setTextValid(false);
      entrar = true;
    } else {
      setTextValid(true);
    }
    if (!regexEmail.test(email)) {
      console.log("The email address is not valid.");
      console.log(text);
      setEmailValid(false);
    } else {
      setEmailValid(true);
    }
  };

  return (
    <form className="w-full max-w-md mx-auto" id="form">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Enter your name*</span>
          <span className={`label-text-alt text-red-600 ${isNameValid || isNameValid === undefined ? "hidden" : ""}`}>Invalid Field</span>
        </label>
        <input
          type="text"
          id="name"
          pattern="[A-Za-z]+"
          className={`input input-bordered w-full max-w-xs ${isNameValid || isNameValid === undefined ? "" : "input-error"}`}
          onChange={(e) => setName(e.target.value)}
          required
        />
        {/* <label className={`label ${isNameValid || isNameValid === undefined ? "hidden" : ""}`}>
          <span className="label-text-alt text-red-600">
            The name must be longer than 4 characters.
          </span>
        </label> */}

        <label className="label">
          <span className="label-text">Enter your email*</span>
          <span className={`label-text-alt text-red-600 ${isEmailValid || isEmailValid === undefined ? "hidden" : ""}`}>Invalid Field</span>
        </label>
        <input
          type="email"
          id="email"
          placeholder=""
          className={`input input-bordered w-full max-w-xs ${isEmailValid || isEmailValid === undefined ? "" : "input-error"}`}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {/* <label className={`label ${isEmailValid || isEmailValid === undefined ? "hidden" : ""}`}>
          <span className="label-text-alt text-red-600">
            The email address is not valid
          </span>
        </label> */}

        <label className="label">
          <span className="label-text">Enter your subject*</span>
          <span className={`label-text-alt text-red-600 ${isSubjectValid || isSubjectValid === undefined ? "hidden" : ""}`}>Invalid Field</span>
        </label>
        <input
          type="text"
          id="subject"
          placeholder=""
          pattern="[A-Za-z]+"
          className={`input input-bordered w-full max-w-xs ${isSubjectValid || isSubjectValid === undefined ? "" : "input-error"}`}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        {/* <label className={`label ${isSubjectValid || isSubjectValid === undefined ? "hidden" : ""}`}>
          <span className="label-text-alt text-red-600">
            The subject must be longer than 4 characters.
          </span>
        </label> */}

        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter your message*</span>
            <span className={`label-text-alt text-red-600 ${isTextValid || isTextValid === undefined ? "hidden" : ""}`}>Invalid Field</span>
          </label>
          <textarea
            className={`input input-bordered w-full max-w-xs ${isTextValid || isTextValid === undefined ? "" : "input-error"}`}
            id="text"
            onChange={(e) => setText(e.target.value)}
            required></textarea>
          {/* <label className={`label ${isTextValid || isTextValid === undefined ? "hidden" : ""}`}>
            <span className="label-text-alt text-red-600">
              The message must be longer than 4 characters.
            </span>
          </label> */}
        </div>
        <button
          className="btn btn-primary mr-5 mt-5 mb-2"
          onClick={() => {
            validateForm();
          }}>
          Send email
        </button>
      </div>
    </form>
  );
};

export default Form;
