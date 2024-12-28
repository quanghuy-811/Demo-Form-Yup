import { Button, Label, TextInput } from "flowbite-react";
import { useFormik } from "formik"; // get value
import * as yup from "yup"; // validate

const DemoFomik = () => {
  // khởi tạo useFormik

  const formik = useFormik({
    initialValues: {
      // giá trị ban đầu của các trường trong form
      email: "", // trung với name của input
      pass: "",
      phone: "",
    },

    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("email is required")
        .email("email is invaild"),
      pass: yup
        .string()
        .required("password is required")
        .min(6, "6 đến 9 ký tự")
        .max(9, "6 đến 9 ký tự"),
      phone: yup
        .string()
        .required("phone is required")
        .matches(/^\d{8}$/, "Phone phải có 8 số"),
    }),
    onSubmit: (values) => {
      console.log("submit", values);
    },
  });
  return (
    <div>
      <div className="container max-w-screen-xl">
        <h1 className="text-2xl font-bold">Demo Formik</h1>
        <form
          className="flex max-w-md flex-col gap-4"
          onSubmit={formik.handleSubmit}
        >
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
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-300 text-lg">{formik.errors.email}</p>
            )}
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
              value={formik.values.pass}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.pass && formik.errors.pass && (
              <p className="text-red-300 text-lg">{formik.errors.pass}</p>
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Phone" />
            </div>
            <TextInput
              id="phone"
              type="text"
              name="phone"
              data-type="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className="text-red-300 text-lg">{formik.errors.phone}</p>
            )}
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default DemoFomik;
