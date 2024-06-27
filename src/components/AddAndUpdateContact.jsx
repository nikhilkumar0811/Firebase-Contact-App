// import { ErrorMessage, Field, Form, Formik } from "formik";
// import Modal from "./Modal";
// import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
// import { db } from "../config/firebase";
// import { toast } from "react-toastify";
// import * as Yup from "yup";

// const contactSchemaValidation = Yup.object().shape({
//   name: Yup.string().required("Name is Required"),
//   email: Yup.string().email("Invalid Email").required("Email is Required"),
// });

// const AddAndUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {
//   const addContact = async (contact) => {
//     try {
//       const contactRef = collection(db, "contacts");
//       await addDoc(contactRef, contact);
//       onClose();
//       toast.success("Contact Added Successfully");
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const updateContact = async (contact, id) => {
//     try {
//       const contactRef = doc(db, "contacts", id);
//       await updateDoc(contactRef, contact);
//       onClose();
//       toast.success("Contact Updated Successfully");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <Modal isOpen={isOpen} onClose={onClose}>
//         <Formik
//           validationSchema={contactSchemaValidation}
//           initialValues={
//             isUpdate
//               ? {
//                   name: contact.name,
//                   email: contact.email,
//                 }
//               : {
//                   name: "",
//                   email: "",
//                 }
//           }
//           onSubmit={(values) => {
//             console.log(values);
//             isUpdate ? updateContact(values, contact.id) : addContact(values);
//           }}
//         >
//           <Form className="flex flex-col gap-4">
//             <div className="flex flex-col gap-1">
//               <label htmlFor="name">Name</label>
//               <Field name="name" className="h-10 border" />
//               <div className=" text-xs text-red-500">
//                 <ErrorMessage name="name" />
//               </div>
//             </div>
//             <div className="flex flex-col gap-1">
//               <label htmlFor="email">Email</label>
//               <Field name="email" className="h-10 border" />
//               <div className=" text-xs text-red-500">
//                 <ErrorMessage name="email" />
//               </div>
//             </div>

//             <button className="self-end border bg-orange px-3 py-1.5">
//               {isUpdate ? "update" : "add"} contact
//             </button>
//           </Form>
//         </Formik>
//       </Modal>
//     </div>
//   );
// };

// export default AddAndUpdateContact;


import { ErrorMessage, Field, Form, Formik } from "formik";
import Modal from "./Modal";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";

const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().email("Invalid Email").required("Email is Required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is Required"),
});

const AddAndUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      onClose();
      toast.success("Contact Added Successfully");
    } catch (error) {
      console.log(error);
    }
  };
  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("Contact Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={contactSchemaValidation}
          initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  email: contact.email,
                  phone: contact.phone,
                }
              : {
                  name: "",
                  email: "",
                  phone: "",
                }
          }
          onSubmit={(values) => {
            console.log(values);
            isUpdate ? updateContact(values, contact.id) : addContact(values);
          }}
        >
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className="h-10 border" />
              <div className="text-xs text-red-500">
                <ErrorMessage name="name" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field name="email" className="h-10 border" />
              <div className="text-xs text-red-500">
                <ErrorMessage name="email" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="phone">Phone Number</label>
              <Field name="phone" className="h-10 border" />
              <div className="text-xs text-red-500">
                <ErrorMessage name="phone" />
              </div>
            </div>

            <button className="self-end border bg-orange px-3 py-1.5">
              {isUpdate ? "update" : "add"} contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdateContact;
