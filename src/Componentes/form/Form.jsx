// import React, { useState } from 'react'
// import "./Form.css"


// const Form = () => {
//     const [dataForm, setDataForm] = useState({email: '', name: '', phone: '', validateEmail: ''})
    

//     const handleChange = (e) => {
//         setDataForm( {
//           ...dataForm,
//           [e.target.name]: e.target.value
//       } )
//     }

//   return (
//     <>
//     <main className="formPagos">
//         <div className="container">
//             <div className="row mt-3">
//                 <div className="col ">
//                     <h2 className="titulasoPago d-flex justify-content-center mb-3">Realizar Compra</h2>
//                     <form id="procesar-pago" action="#">
//                         <div className="form-group row">
//                             <label  className="col-12 col-md-2  col-form-label detallesCampo">Nombre y Apellido :</label>
//                             <div className="col-12 col-md-10">
//                               <input 
//                               type='text' 
//                               name='name' 
//                               placeholder='Ingresa tu Nombre y Apellido' 
//                               value={dataForm.name}
//                               onChange={handleChange}
//                               className="form-control" 
//                               />
//                             </div>
//                         </div>
//                         <div className="form-group row">
//                             <label className="col-12 col-md-2 col-form-label detallesCampo">Correo :</label>
//                             <div className="col-12 col-md-10">
//                             <input 
//                             type='email' 
//                             name='email'
//                             placeholder='Ingresa tu Email' 
//                             value={dataForm.email}
//                             onChange={handleChange}
//                             className="form-control" />
//                             </div>
//                         </div>
//                         <div className="form-group row">
//                             <label  className="col-12 col-md-2 col-form-label detallesCampo">Validar Correo :</label>
//                             <div className="col-12 col-md-10">
//                             <input 
//                             type='email' 
//                             name='validateEmail'
//                             placeholder='Validar el Email' 
//                             value={dataForm.validateEmail}
//                             onChange={handleChange}
//                             className="form-control" />
//                             </div>
//                         </div>
//                         <div className="form-group row">
//                             <label className="col-12 col-md-2 col-form-label detallesCampo">Telefono :</label>
//                             <div className="col-12 col-md-10">
//                             <input 
//                             type='number' 
//                             name='phone'
//                             placeholder='Ingresa tu Numero de Telefono' 
//                             value={dataForm.phone}
//                             onChange={handleChange}
//                             className="form-control" />
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     </main>
//     </>
//   )
// }

// export default Form