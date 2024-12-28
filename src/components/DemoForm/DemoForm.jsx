import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";

const DemoForm = () => {
  const [dataForm, setDataForm] = useState({
    email: "",
    pass: "",
  });

  const [err, setErr] = useState({
    email: "",
    pass: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    let attribute = e.target.getAttribute("data-type");

    let messErr = "";
    if (value === "") {
      messErr = `${name} is require`;
    } else {
      switch (attribute) {
        case "email":
          const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

          if (!regexEmail.test(value)) {
            messErr = `${name} không đúng định dạng`;
          }
          break;
        case "pass":
          const passwordRegex = /^(?=.*[A-Z]).{6,}$/;
          if (!passwordRegex.test(value)) {
            messErr = `${name} phải có 6 ký tự và 1 chữ hoa`;
          }
          break;
        default:
          break;
      }
    }

    setErr({
      ...err,
      [name]: messErr,
    });

    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kiểm tra from
    for (const key in err) {
      if (err[key] !== "") {
        return;
      }
    }
    console.log("submit ok");
  };
  return (
    <div className="container max-w-screen-xl">
      <h1 className="text-2xl font-bold">DemoForm</h1>
      <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="text"
            placeholder="name@flowbite.com"
            name="email"
            data-type="email"
            onChange={onChangeInput}
          />
          {err.email && <p className="text-red-300 text-lg">{err.email}</p>}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="text" />
          </div>
          <TextInput
            id="password1"
            type="text"
            name="pass"
            data-type="pass"
            onChange={onChangeInput}
          />
          {err.pass && <p className="text-red-300 text-lg">{err.pass}</p>}
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default DemoForm;
