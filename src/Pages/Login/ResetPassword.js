// import React, { useState } from "react";
// import { getAuth, sendPasswordResetEmail } from "firebase/auth";
// import Swal from "sweetalert";
// import app from "../../firebase/firebase.config";

// const ResetPassword = (props) => {
//   const [email, setEmail] = useState("");

//   const auth = getAuth(app);

//   const handleResetPassword = () => {
//     sendPasswordResetEmail(auth, email)
//       .then(() => {
//         // Password reset email sent!
//         // ..

//         props.onHide();
//         Swal.fire("Good job!", "You clicked the button!", "success");
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // ..
//       });
//   };
//   return(
//         <div>   
//             {/* The button to open modal */}
// <label htmlFor="my-modal-3">Forget Password</label>

// {/* Put this part before </body> tag */}
// <input type="checkbox" id="my-modal-3" className="modal-toggle" />
// <div className="modal">
//   <div className="modal-box relative">
//     <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
//     <h3 className="text-lg font-bold">Reset Your Password</h3>
//    <input onBlur={(e) =>
//             setEmail(e.target.value)}
//             type="email"
//             placeholder="Email"
//             className="form-control p-2 mt-3"
//           />
//           <footer>
//   <button onClick={handleResetPassword} className="btn btn-primary">Update</button>
//   </footer>
//   </div>
  

// </div>

// </div>

//     )
// };

// export default ResetPassword;